import React,{Component} from "react";
import {useState} from "react";
import './Menuadd.css';



function Menuadd(props) {
  const [showState, setshowState] = useState(true);
  const [name, setname] = useState();
  const [image, setimage] = useState();
  const [price, setprice] = useState();
  const priceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));

  }
  const [addState, setaddState] = useState(false);
  const CheckAdd = () => { CheckAdd_name();CheckAdd_price();}

  const CheckAdd_name = () => {
    const exp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (exp.test(name) && name.length>=1 && name.length<=20 ){
     return true;}
  else{
    alert('잘못된 이름입니다!');
    return false;}
  }
  const CheckAdd_price = () => {
    if (100<=price && price <=1000000 && price%10 == 0){
     return true;}
  else{
    alert('잘못된 가격입니다!');
    return false;}
  }



  return(

    <div>
    {addState&&
    <div>
    <button className = "ModalBg" onClick = {() => (setaddState(addState => !addState))}>
    </button>

      <div className = "Addmodal">
        <h3>메뉴추가</h3>
        <ul><span>이름</span><input type = "text" placeholder = "맛있는와플" value = {name} onChange = {(e) => setname(e.target.value)}/></ul>
        <ul><span>가격</span><input type = "text" placeholder = "5,000" value = {price} onChange = {(e) => setprice(priceFormat(e.target.value))} /><div className = "Pricewon">원</div></ul>
        <ul><span>상품 이미지</span><input type = "text" placeholder = "https://foo.bar/baz.png" value = {image} onChange = {(e) => setimage(e.target.value)}/></ul>
        <div className = "Twobuttons">
          <button onClick = {CheckAdd}>추가</button>
          <button>취소</button>
        </div>
      </div>
    </div>}
    <button className= "Addbutton" onClick = {() => (setaddState(addState => !addState))}><span>+</span></button> {/* 하단의 추가 버튼*/ }
    </div>
  );
}



export default Menuadd;
