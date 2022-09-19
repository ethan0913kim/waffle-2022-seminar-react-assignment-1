import React,{Component} from "react";
import {useState} from "react";
import './Menulist.css';
import Menuadd from './Menuadd.js'
import Detail from './Detail.js'

//중앙의 메뉴 리스트 component
const Menulist  = ({list, setdetailed, detailed, changeModal, deleteModal} ) =>{
  const [isMouseOver, setisMouseOver] = useState(-1); // 마우스 위에 있는 것 감지
  const [isSelected, setisSelected] = useState(-1); // 특정 메뉴가 선택되었음을 나타내는 useState
  // 특정 element가 선택한 메뉴가 맞는지 확인하는 함수
  function isKey(element){
    if (element.id == isSelected)
      return true;
  };
  // 선택한 메뉴가 현재 메뉴 리스트에 존재하는지 확인 : 없다면 즉, true라면 삭제된 메뉴가 존재
  function Nokey(){
    for (let i = 0;i<list.length;i++){
      if (isKey(list[i])){
        return false;
      }
    }
    return true;
  }
  //선택한 메뉴만 return
  const filtered = list.filter((val) =>{
      if (val.id == isSelected){
        return val;
      }
    }
    );
  //삭제된 메뉴가 있다면 선택 상태(selected)를 -1로 초기화
  const Checkdelete = () => {
    if (isSelected>0&&Nokey()){
    setisSelected(-1);
  }
  }
  return (
    <div className = "Fullscreen">
     <div className = "Menulist" style = {(isSelected != -1) ? {width:"55%"} : {}}>{/*메뉴를 선택한 상태라면 오른쪽에 상세 메뉴가 뜰 수 있게 width를 바꿈 */}
      <ul>
        <span>ID</span>
        <span>이름</span>
        <span>가격</span>
      </ul>
      {list.map((menu,index) => (
        <ul key = {menu.id} onMouseOver={() =>{setisMouseOver(menu.id);}}
      onMouseOut={() => {setisMouseOver(-1)}} onClick = {() => {if (menu.id != isSelected){ setisSelected(menu.id);} else{setisSelected(-1);} }}className = { (isMouseOver == menu.id || isSelected == menu.id)  ?  'Yesmouse' : 'Nomouse'} >
          <span>{menu.id}</span>
          <span>{menu.name}</span>
          <span>{menu.price}</span>
        </ul>
      ))
    }{/*상위 컴포넌트인 Main에서 받은 List를 map함수로 화면에 나타냄 이때 특정 메뉴에 마우스를 갖다대면 색이 변하고, 클릭하면 selected 상태를 그 메뉴의 key(index)로 바꿔줌 한 번 더 클릭하면 -1로 초기화 */}
     </div>
     {Checkdelete()} {/*식제된 메뉴가 있다면 선택 상태(selected)를 -1로 초기화하는 함수 호출(삭제된거있는지 체크)*/}
     {setdetailed(isSelected != -1)} {/*selected에 따라 상세뷰를 띄울지(state - detailed)를 결정*/}
     {(isSelected != -1) && <Detail isSelected = {isSelected} setisSelected = {setisSelected} object = {filtered} changeModal = {changeModal} deleteModal = {deleteModal}/>}</div>
  );
}



export default Menulist;
