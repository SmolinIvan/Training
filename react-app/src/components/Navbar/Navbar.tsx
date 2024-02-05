
import './Navbar.css';
import Dropdown, { VerticalMenuProps } from '../Dropdown/Dropdown';

export interface NavBarMenuProps {
  title: string;
  url: string;
  verticalMenu:VerticalMenuProps[]
}

export interface InOneNavBarMenuProps {
  list: NavBarMenuProps[]
}

const Navbar = ({list}:InOneNavBarMenuProps)  => {
  
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {list.map((menu, index) => {
          return (
            // <li className="menu-items" key={index}>
            <div className="menu-items" key={index}>
            <Dropdown vertMenuList={menu.verticalMenu}>{menu.title}</Dropdown>
              </div>
            // </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;


