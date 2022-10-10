import React,{Component} from "react";
import {useState} from "react";
import './Menuchange.css';

//전체적인 구성은 Menuadd와 비슷

const Menuchange = ({changeMenu, whattochange, setwhattochange, menuList} ) => {
  const [name, setname] = useState(whattochange.name);
  const [image, setimage] = useState(whattochange.image);
  const [price, setprice] = useState(whattochange.price);
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
  //입력이 형식에 맞는지 확인
  const CheckChange = () => {
    if (CheckChange_name()&&CheckChange_price()&&CheckChange_same()){
      ChangeFinal();
      return;
    }
    else{
      return;
    }

  };

  const CheckChange_name = () => {
    const exp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (exp.test(name) && name.length>=1 && name.length<=20 ){
     return true;}
  else{
    alert('잘못된 이름입니다!');
    return false;}
  }
  const CheckChange_price = () => {
    const number = price.replace(/,/g, "");
    if (100<=number && number <=1000000 && number%10 == 0){
     return true;}
  else{
    alert('잘못된 가격입니다!');
    return false;}
  }

  const CheckChange_same = () => {
    for (let i = 0;i<menuList.length;i++){
      if (name == menuList[i].name){
        alert('이미 존재하는 메뉴입니다!');
        return false;
      }
    }
    return true;

  }
//체크 후 최종적으로 changeMenu(main.js의 함수)로 추가하고 입력 초기화
  const ChangeFinal = () => {
    changeMenu({
        "name": name,
        "price": price,
        "image": image,
        "id": whattochange.id
      });
    setname("");
    setprice("");
    setimage("");
    setwhattochange({});
  }

  return(
    <div>
    <button className = "ModalBg" onClick = {() => {setname("");setprice("");
    setimage("");setwhattochange({})}}>
    </button>

      <div className = "Changemodal">
        <h3>메뉴수정</h3>
        <ul><span>이름</span><input type = "text"  value = {name} onChange = {(e) => setname(e.target.value)}/></ul>
        <ul><span>가격</span><input type = "text"  value = {price} onChange = {(e) => setprice(priceFormat(e.target.value))} /><div className = "Pricewon">원</div></ul>
        <ul><span>상품 이미지</span><input type = "text"  value = {image} onChange = {(e) => setimage(e.target.value)}/></ul>
        <div className = "Twobuttons">
          <button onClick = {CheckChange} style = {{'background-color': '#B2FF66'}}>저장</button>
          <button onClick = {() => {setname("");setprice("");
          setimage("");setwhattochange({});}}>취소</button>
        </div>
      </div>
    </div>
  );
}



export default Menuchange;
