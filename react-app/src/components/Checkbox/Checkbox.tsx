import { useState } from "react";
import './Checkbox.css';
export interface LabelProps{
    label: string;
}
export interface OneCheckBoxProps {
    value: LabelProps[]
    title:string;
}

export interface CheckBoxesProps {
    checkBoxItems : OneCheckBoxProps[];
    onClick?: () => void;
    onClose?: () => void;
}



const Checkbox = ({ checkBoxItems, onClick, onClose }:CheckBoxesProps) => {
    const [check, setCheckbox] = useState({
            "Wine": true,
            "Champagne": true,
        })

    const handleCheck = (e) => {
        setCheckbox({
            ...check,
            [e.target.name]:e.target.checked,
        })
    };
    console.log(check)
    return (
        <div className="parentCheckbox">
            <div className = "checkbox" >
                <h4>{checkBoxItems[0].title}</h4>
                    {checkBoxItems[0].value.map((textBox, index) => {
                        return (
                            <label>
                                <input type="checkbox" checked={check.Wine} name = {textBox.label} key={index} onChange={handleCheck}/>
                                <span>{textBox.label}</span>
                            </label>
                        );
                    })}
            </div>
            <div className = "checkbox">
                <h4>{checkBoxItems[1].title}</h4>
                {checkBoxItems[1].value.map((textBox, index) => {
                    return (
                        <label>
                            <input type="checkbox" name = {textBox.label} key={index} onChange={handleCheck}/>
                            <span>{textBox.label}</span>
                        </label>
                    );
                })}
            </div>
            <button onClick={onClick}>Сохранить</button>
            <button type="button" className="btn-close" onClick = {onClose}></button>
        </div>
    );
};
export default Checkbox;