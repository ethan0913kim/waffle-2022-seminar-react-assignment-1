import React,{Component} from "react";
import {useState} from "react";
import './Detail.css';
import deleteimg from './delete.png'
import changeimg from "./change.png"

const Detail =  ({isSelected, setisSelected, object, changeModal, deleteModal}) => {
  //object는 선택한 메뉴만 들어 있는 array
  return(
    <div>
    {(object.length != 0) &&
    <div className = "Detail">
      <button className = "Close" onClick = {() => setisSelected(-1)}>x</button>{/*위의 x 누르면 선택 해제 */}
      <div className = "Imagewrapper">{/*이미지 모양 똑같이 맞추기 위해 */}
        <img src = {object[0].image} alt = {"image of "+ object[0].name}className = "Menuimage"/>
      </div>
      <div className = "Text">
        <span className = "Name">{object[0].name}</span>
        <br/><br/>
        <div>{object[0].price+'원'}</div>
      </div>
      <div className = "Buttons">
      <img src = {changeimg} onClick = {() => {changeModal(object[0])}}/><img src = {deleteimg} onClick = {() => {deleteModal(object[0])}}/>
      {/*삭제, 수정 버튼 */}
      </div>
    </div>}
    </div>
  );
}


export default Detail;
