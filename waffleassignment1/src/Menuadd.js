import React,{Component} from "react";
import {useState} from "react";
import './Menuadd.css';



const Menuadd = ({addMenu, menuList, detailed} ) => {
  //입력으로 받을 이름, 이미지, 가격 상태
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  //가격에 쉼표를 달아주는 함수
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
  //모달창 존재 여부 결정하는 상태
  const [addState, setaddState] = useState(false);
  //입력이 형식에 맞는지 확인
  const CheckAdd = () => {
    if (CheckAdd_name()&&CheckAdd_price()&&CheckAdd_same()){
      AddFinal();
      return;
    }
    else{
      return;
    }

  };
//메뉴 이름 형식 확인
  const CheckAdd_name = () => {
    const exp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (exp.test(name) && name.length>=1 && name.length<=20 ){
     return true;}
  else{
    alert('잘못된 이름입니다!');
    return false;}
  }
  const CheckAdd_price = () => {
    const number = price.replace(/,/g, "");
    if (100<=number && number <=1000000 && number%10 == 0){
     return true;}
  else{
    alert('잘못된 가격입니다!');
    return false;}
  }
  //이름 같은 메뉴 이미 있는지 체크
  const CheckAdd_same = () => {
    for (let i = 0;i<menuList.length;i++){
      if (name == menuList[i].name){
        alert('이미 존재하는 메뉴입니다!');
        return false;
      }
    }
    return true;

  }
//체크 후 최종적으로 addMennu(main.js의 함수)로 추가하고 입력 초기화
  const AddFinal = () => {
    addMenu({
        "name": name,
        "price": price,
        "image": image
      });
    setname("");
    setprice("");
    setimage("");
    setaddState(addState => !addState);
  }

  return(

    <div>
    {addState&&
    <div>
    <button className = "ModalBg" onClick = {() => {setname("");setprice("");
    setimage("");setaddState(addState => !addState);}}>{/*어두운 배경, 클릭하면 모달창 닫히게 addState 변경 */}
    </button>
      <div className = "Addmodal">{/*모달창 */}
        <h3>메뉴추가</h3>
        <ul><span>이름</span><input type = "text" placeholder = "맛있는와플" value = {name} onChange = {(e) => setname(e.target.value)}/></ul>
        <ul><span>가격</span><input type = "text" placeholder = "5,000" value = {price} onChange = {(e) => setprice(priceFormat(e.target.value))} /><div className = "Pricewon">원</div></ul>
        <ul><span>상품 이미지</span><input type = "text" placeholder = "https://foo.bar/baz.png" value = {image} onChange = {(e) => setimage(e.target.value)}/></ul>
        <div className = "Twobuttons">{/*추가, 취소 버튼 누르면 CheckAdd 함수로 추가 로직 실행, addState 바꾸는 로직 실행 */}
          <button onClick = {CheckAdd}>추가</button>
          <button onClick  = {() => {setname("");setprice("");
          setimage("");setaddState(addState => !addState);}}>취소</button>
        </div>
      </div>
    </div>}
    <button className= "Addbutton" style = {detailed ? {left:"53%"} : {}}onClick = {() => (setaddState(addState => !addState))}><span>+</span></button> {/* 하단의 추가 버튼*/ }
    </div>
  );
}



export default Menuadd;
