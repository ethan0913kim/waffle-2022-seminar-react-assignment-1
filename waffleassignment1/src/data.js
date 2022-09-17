import React,{Component} from "react";
import {useState} from "react";
import {render} from "react-dom"

class data extends Component {
  constructor(){
  super();
  this.state = {menuList: [
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
  ]
}}

  render(){
    return(<div></div>);
  }


}


export default data;
