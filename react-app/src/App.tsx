
import { useState } from "react";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import modalText from './texts/modalText';
import Navbar from "./components/Navbar/Navbar";
import { menuNavbar } from './components/Navbar/menuItemsData';
import Checkbox from "./components/Checkbox/Checkbox";
import {itemForCheckBox2} from "./components/Checkbox/itemForCheckBox";
import Table from "./components/Table/Table";


function App() {
  const [modalVisible, modalVisibility] = useState(false);
  const [checkBox1Visible, checkBox1Visibility] = useState(false)
  const [title, setModalTitle] = useState('string');
  const [text, setModalText] = useState('string');
  const [src, setImgSrc] = useState('string');
  const [style, setStyle] = useState('string');

  

  return (
    <div>
      <Navbar list={menuNavbar} ></Navbar>
      <div className ={'title'}>
        <h2> New Retro Wave </h2>
      </div>
      <div className={'card-block'}>
        <Card imgSrc='src/assets/main/Orax.jpg' onClick={() =>[modalVisibility(true), setModalTitle(modalText.Orax.title), setModalText(modalText.Orax.text), setImgSrc(modalText.Orax.imgSrc), setStyle(' overlay')]}>Orax</Card>
        <Card imgSrc='src/assets/main/Kavinsky.jpg' onClick={() =>[modalVisibility(true), setModalTitle(modalText.Kavinsky.title), setModalText(modalText.Kavinsky.text), setImgSrc(modalText.Kavinsky.imgSrc), setStyle(' overlay')]}>Kavinsky</Card>
        <Card imgSrc='src/assets/main/Dance.jpg' onClick={() =>[modalVisibility(true), setModalTitle(modalText.Dwd.title), setModalText(modalText.Dwd.text), setImgSrc(modalText.Dwd.imgSrc), setStyle(' overlay')]}>Dance With The Dead</Card>
        <Card imgSrc='src/assets/main/3FORCE.webp' onClick={() =>[modalVisibility(true), setModalTitle(modalText.Force.title), setModalText(modalText.Force.text), setImgSrc(modalText.Force.imgSrc), setStyle(' overlay')]}>3FORCE</Card>
            { modalVisible && <Modal imgSrc={src} onClose = {() => [modalVisibility(false), setStyle('')]} title ={title} text = {text}> </Modal>}
      </div>
    {/*  <footer className="footer">*/}
    {/*  <div className ="footer1">*/}
    {/*  <a className = "footer1" href ="mailto:someone@yoursite.com">ivansmolin9667@yandex.ru</a>*/}
    {/*  </div>*/}
    {/*<div className ="footer1">*/}
    {/*  <h4 className= "footer1">Ivan Smolin</h4>*/}
    {/*</div>*/}
    {/*<div className ="footer1">*/}
    {/*  <a className= "footer1" href="https://telegram.me/SmolingIva">@SmolingIva</a>*/}
    {/*</div>*/}
    {/*</footer>*/}
        <Card onClick={() =>[checkBox1Visibility(true)]}>Посмотреть</Card>
        { checkBox1Visible && <Checkbox onClose = {() => [checkBox1Visibility(false)]} checkBoxItems={itemForCheckBox2} ></Checkbox>}

        <Table></Table>
  </div>
  );
}
export default App;
