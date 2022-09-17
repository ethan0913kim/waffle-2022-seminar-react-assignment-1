import React,{Component} from "react";
import {useState} from "react";
import './Main.css';
import waffle_logo from './waffle_logo.png';
import Menulist from './Menulist.js'
import data from './data.js'


function Main() {
  var menuList = [
    {
      "id": 1,
      "name": "초코와플",
      "price": 7000,
      "image": ""
    },
    {
      "id": 2,
      "name": "아메리카노",
      "price": 4000,
      "image": ""
    },
    {
      "id": 3,
      "name": "블루베리스무디",
      "price": 6000,
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Blueberries.jpg"
    },
    {
      "id": 4,
      "name": "딸기와플",
      "price": 7000,
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"
    }
  ];


  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const filtered = menuList.filter((val) =>{
      if (val.name.includes(search)){
        return val;
      }
    }
    );
  return (
    <div className = "Main">
      <header className="Main-header">
        <a href = "https://wafflestudio.com">
        <img src ={waffle_logo} className="waffle_logo" alt = "wafflestudio image"/>
        </a>
        <h1><a href = "https://wafflestudio.com" className = "header-text">와플스튜디오 메뉴 관리</a></h1>
      </header>
      <div className="Main-search">
        <span>이름 검색:</span>
        <input type = "text" placeholder = "검색어 입력" onChange = {onChangeSearch}/>
        <button type = "submit"/>
      </div>
      <Menulist list = {filtered}/>
    </div>

  );
}


export default Main;
