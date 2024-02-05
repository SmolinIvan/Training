import { ReactNode } from "react";
import './Modal.css'

export interface Props {
  children?: ReactNode;
  title: string;
  text: string;
  onClose?: () => void;
  imgSrc?: string;
}

const Modal = ({ children, onClose, title, text, imgSrc }: Props) => {
  return (
<div className="modal" style = {{ height: 'auto'}} >
    <h5 className="card-title">{title}</h5>
    <img className='card-image' src = {imgSrc}></img>
    <p className="modal-text">{text}</p>
    <button type="button" className="btn-close" onClick = {onClose}></button>
</div>
  );
};

export default Modal;
