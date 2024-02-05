
import { useState, useRef, useEffect } from "react";
import './Dropdown.css';

export interface VerticalMenuProps {
  title: string;
  url: string;
}

export interface dropDownProps {
    children?: string;
    onClick?: () => void;
    vertMenuList: VerticalMenuProps[];
}

const Dropdown = ({ children, vertMenuList }: dropDownProps)  => {
const container = useRef();
const [dropdownState, setDropdownState] = useState({ open: false });
const handleDropdownClick = () =>setDropdownState({ open: !dropdownState.open });

const handleClickOutside = (e: { target: any; }) => {
    if (container.current && !container.current.contains(e.target)) {
    setDropdownState({ open: false });
    }
};

useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
     <div className={"container"} ref={container}>
        <button type="button" className={"button"} onClick={handleDropdownClick}>
        {children}
        </button>
        {dropdownState.open && (
       <div className={"dropdown"}>
         <ul>
         {vertMenuList.map((menu, index) => {
          return (
            <li key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
          </ul>
        </div>
        )}
      </div>
    );
}
export default Dropdown;