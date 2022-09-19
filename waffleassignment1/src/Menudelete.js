import React,{Component} from "react";
import {useState} from "react";
import './Menudelete.css';

//전체적인 구성은 MenuAdd와 비슷

const Menudelete = ({deleteMenu, menuList, whattodelete, setwhattodelete} ) => {;
  const [deleteState, setdeleteState] = useState(true);//delete 모달창을 띄울지 정하는 state




  const DeleteFinal = () => {
    deleteMenu(whattodelete.id);
    setdeleteState(deleteState => !deleteState);
    setwhattodelete({});
  }

  return(
    <div>
    {deleteState&&
    <div>
    <button className = "ModalBg" onClick = {() => {setdeleteState(deleteState => !deleteState);setwhattodelete({});}}>{/*어두운 배경, 클릭하면 모달창 닫힘 */}
    </button>
      <div className = "Deletemodal">
        <h3>메뉴삭제</h3>
        <span>정말로 삭제하시겠습니까?</span>
        <div className = "Twobuttons">
          <button onClick = {DeleteFinal} style = {{'background-color': '#FF9999'}}>삭제</button>
          <button onClick= {() => {setdeleteState(deleteState => !deleteState);setwhattodelete({});}}>취소</button>
        </div>
      </div>
    </div>}
    </div>
  );
}



export default Menudelete;
