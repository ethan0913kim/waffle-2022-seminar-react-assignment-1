import React,{Component} from "react";
import {useState} from "react";
import './Menulist.css';
import Menuadd from './Menuadd.js'


function Menulist(props) {
  const [addState, setaddState] = useState(false);
  return (
     <div className = "Menulist">
     <div>
      <Menuadd list = {props.list}/>
     </div>
      <ul>
        <span>ID</span>
        <span>이름</span>
        <span>가격</span>
      </ul>
      {props.list.map((menu,index) => (
        <ul key = {index}>
          <span>{menu.id}</span>
          <span>{menu.name}</span>
          <span>{menu.price}</span>
        </ul>
      ))
      }

     </div>
  );
}



export default Menulist;
