import { useState } from "react";
import './Checkbox.css';
export interface LabelProps{
    label: string;
}
export interface OneCheckBoxProps {
    item: LabelProps[]
    title:string;
}

export interface CheckBoxesProps {
    checkBoxItems : OneCheckBoxProps[];
    onClick?: () => void;
    onClose?: () => void;
}

const Checkbox = ({ checkBoxItems, onClick, onClose }:CheckBoxesProps) => {
    const [check, setCheckbox] = useState(    {
        "Wine": true,
        "Champagne": false,
        "Vodka": true,
        "Whisky": false,
        "Gluten": true,
        "Fish": false,
        "Nuts": false,
        "Human flesh": false
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
                {checkBoxItems.map((Box, index) => {
                    return (
                        <div className = "checkbox" >
                            <h4 key = {index}>{Box.title}</h4>
                            {Box.item.map((textBox, index) => {
                                return (
                                    <label>
                                        <input type="checkbox" checked={check[textBox.label]} name = {textBox.label} key={index} onChange={handleCheck}/>
                                        <span>{textBox.label}</span>
                                    </label>
                                );
                            })}
                        </div>
                    );
                })}
            <button onClick={onClick}>Сохранить</button>
            <button type="button" className="btn-close" onClick = {onClose}></button>
        </div>
    );
};
export default Checkbox;


















