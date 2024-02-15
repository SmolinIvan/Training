
// Данный компонент был создан, чтобы разобраться как сохранять состояние компонента Чекбокс
// Нужно прописать пропсы, данные получаемые с бэка и их отправку обратно
// UPD: научился верно сохранять состояние в Checkbox, этот компонент не нужен

import "./Checkbox.css"
import {useState} from "react";

export interface simpleCheckBoxProps {
    onClick?: () => void;
    onClose?: () => void;
}

const SimpleCheckBox = ( {onClick, onClose}: simpleCheckBoxProps) => {
    const [check, setCheckbox] = useState({
        "Wine": true,
        "Vodka": true,
        "Champagne": false,
        "Whisky": false,
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
                <h4>Wishes</h4>
                <label>
                    <input type="checkbox" checked={check.Wine} name="Wine" onChange={handleCheck}/>
                    <span>Wine</span>
                </label>
                <label>
                    <input type="checkbox" checked={check.Vodka} name="Vodka"  onChange={handleCheck}/>
                    <span>Vodka</span>
                </label>
                <label>
                    <input type="checkbox" checked={check.Champagne} name="Champagne" onChange={handleCheck}/>
                    <span>Champagne</span>
                </label>
                <label>
                    <input type="checkbox" checked={check.Whisky} name="Whisky" onChange={handleCheck}/>
                    <span>Whisky</span>
                </label>
            </div>
            <div className = "checkbox">
                <h4>Allergies</h4>
                <label>
                    <input type="checkbox" name="String4"  onChange={handleCheck}/>
                    <span>String1</span>
                </label>
                <label>
                    <input type="checkbox" name="String5" onChange={handleCheck}/>
                    <span>String2</span>
                </label>
                <label>
                    <input type="checkbox" name="String6" onChange={handleCheck}/>
                    <span>String3</span>
                </label>
            </div>
            <button onClick={onClick}>Сохранить</button>
            <button type="button" className="btn-close" onClick = {onClose}></button>
        </div>
    );
};
export default SimpleCheckBox;