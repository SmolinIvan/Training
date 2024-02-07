import { useState } from "react";
import './Checkbox.css';
export interface LabelProps{
    label: string;
}
export interface CheckBoxProps {
    value: LabelProps[]
    onClick?: () => void;
    onClose?: () => void;
    title:string;
}



const Checkbox = ({ value,title, onClick,onClose }:CheckBoxProps) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox">
            <h4>{title}</h4>
                {value.map((textBox, index) => {
                    return (
                        <label>
                            <input type="checkbox" key={index} />
                            <span>{textBox.label}</span>
                        </label>
                    );
                })}
            <button onClick={onClick}>Сохранить</button>
            <button type="button" className="btn-close" onClick = {onClose}></button>
        </div>
    );
};
export default Checkbox;