import React,{Component} from "react";
import {useState} from "react";
import './Main.css';
import waffle_logo from './waffle_logo.png';
import Menulist from './Menulist.js'
import Menuadd from './Menuadd.js'
import Menuchange from './Menuchange.js'
import Menudelete from './Menudelete.js'



// 기본이 되는 component : main.js
function Main() {
  const [maxId, setMaxId] = useState(4); //메뉴 추가할때 새로운 Id 생성하는데 필요(그전 Id 값을 알아야 함)
  const [whattochange, setwhattochange] = useState({}); // 수정시 사용
  const [whattodelete, setwhattodelete] = useState({}); // 삭제시 사용
  // 메뉴 리스트(데이터 저장)
  const [menuList,setmenuList] = useState([
    {
      "id": 1,
      "name": "초코와플",
      "price": "7,000",
      "image": ""
    },
    {
      "id": 2,
      "name": "아메리카노",
      "price": "4,000",
      "image": ""
    },
    {
      "id": 3,
      "name": "블루베리스무디",
      "price": "6,000",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Blueberries.jpg"
    },
    {
      "id": 4,
      "name": "딸기와플",
      "price": "7,000",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"
    }
  ]);
  const [detailed, setdetailed] = useState(false); // 상세 메뉴바 띄우는 여부
  // 메뉴리스트에 새 메뉴 추가하는 함수
  const addMenu = (menu) => {
    const newMenu = [...menuList, {id: maxId+1, name:menu.name,price:menu.price,image:menu.image}];
    setmenuList(newMenu);
    setMaxId(maxId+1);
  };
  // 하위 컴퍼넌트인 Menulist.js에서 수정, 삭제 등을 할때 무엇을 수정/삭제하는지 정보를 받아옴
  const changeModal = (obj) => {
    setwhattochange(obj);
  }
  const deleteModal = (obj) =>{
    setwhattodelete(obj);
  }
  // 각각 메뉴리스트의 메뉴 수정하는 함수, 삭제하는 함수
  const changeMenu = (menu) => {
    const index = menuList.findIndex((e) => e.id === menu.id);
    const clone = menuList.slice();
    clone.splice(index, 1 , menu);
    setmenuList(clone);

  }
  const deleteMenu = (id) => {
   setmenuList(
     menuList.filter( (menuList) => {
       return menuList.id !== id;
     })
   );
 };
 //검색창 기능 관련 state와 함수
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  //검색창에 쓴 단어를 포함하는 메뉴만 filtered로 배열 형태로 저장
  const filtered = menuList.filter((val) =>{
      if (val.name.includes(search)){
        return val;
      }
    }
    );
  return (
    <div className = "Main">
      <header className="Main-header"> {/*화면 위쪽의 헤더 부분 */}
        <a href = "https://wafflestudio.com" target='_blank'>
        <img src ={waffle_logo} className="waffle_logo" alt = "wafflestudio image"/>
        </a>
        <h1><a href = "https://wafflestudio.com" target='_blank' className = "header-text">와플스튜디오 메뉴 관리</a></h1>
      </header>
      <div className="Main-search"> {/*검색창 부분*/}
        <span>이름 검색:</span>
        <input type = "text" placeholder = "검색어 입력" onChange = {onChangeSearch}/> {/*입력한 텍스트가 변화하면 onChangeSearch 함수로 search state를 set*/}
        <button type = "submit">🔍</button>
      </div>
      {/*메뉴창(중앙)*/}
      <Menulist list = {filtered}  setdetailed = {setdetailed} detailed =
      {detailed} changeModal = {changeModal} deleteModal = {deleteModal}/>
      {/*추가 모달*/}
      <Menuadd addMenu = {addMenu} menuList = {menuList} detailed = {detailed} />
      {/*수정 모달: whattochange가 존재할떄, 즉 수정할 정보를 하위 컴포넌트인 Detail에서 받아왔을때만 나타남 */}
      {whattochange.id>0&&<Menuchange changeMenu = {changeMenu} whattochange = {whattochange}
      setwhattochange = {setwhattochange} />}
      {/*삭제 모달: whattodelete가 존재할떄, 즉 삭제할 정보를 하위 컴포넌트인 Detail에서 받아왔을때만 나타남 */}
      {whattodelete.id>0&&<Menudelete deleteMenu = {deleteMenu} whattodelete = {whattodelete}
       setwhattodelete = {setwhattodelete} />}

    </div>

  );
}


export default Main;
