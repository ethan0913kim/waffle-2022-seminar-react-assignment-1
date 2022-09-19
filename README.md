# waffle-2022-seminar-react-assignment-1
## 프로젝트 설명
메뉴를 추가, 수정, 삭제할 수 있는 메뉴 관리 프로그램입니다.  
이름은 1 ~ 20 글자의 한글이고, 가격은 100 ~ 1,000,000 사이의 숫자이며, 10원 단위로 끊어야 합니다.  
각 메뉴는 같은 이름을 가질 수 없습니다.  
## 실행 설명  
cloudfront를 통해 배포된 url(https://dxi1tyyqlg1ji.cloudfront.net/)로 접속하시거나, react 앱 파일을 다운받아 yarn start 명령어로 실행하시면 됩니다.
## 기능 설명
### 헤더와 검색창 관련
헤더의 와플스튜디오 로고나 제목을 클릭하면 새 탭에서 와플스튜디오로 이동합니다.
검색창에 찾을 메뉴를 입력하면, 따로 엔터 키 등을 누르지 않아도 검색한 단어를 포함하는 메뉴만 리스트에 나타납니다.
### 메뉴 리스트 관련
각 메뉴를 선택하면 그 메뉴의 이미지, 가격, 이름이 나타나는 상세 뷰가 나타납니다. 또 오른쪽 아래 + 버튼을 통해새로운 메뉴를 추가할 수 있습니다. 프로젝트 설명의 규격에 유의하세요!
### 메뉴 상세뷰 관련
상세뷰에서는 수정 버튼을 클릭해 메뉴 정보를 변경하거나 삭제 버튼으로 메뉴를 삭제할 수 있습니다.
## 코드 간단 설명
Main.js가 프로그램의 중심이 되는 파일입니다. 헤더와 검색창 기능을 포함하고 있으며, 다른 컴포넌트들의 부모 컴포넌트로 다양한 함수로 메뉴 추가, 수정, 삭제 입력을 받고 관련 컴포넌트로 전달해줍니다. Menulist.js는 중앙의 메뉴 리스트 관련 컴포넌트로, 메뉴를 클릭하면 상세뷰 컴포넌트인 Detail.js를 활성화 시킵니다. Detail.js에서는 수정, 삭제 버튼이 있어 이를 클릭할시 Main.js의 함수가 실행되어 Menudelete.js, Menuchange.js가 홠성화되며 모달이 나타납니다. Menuadd.js도 비슷하게 Menulist.js의 + 버튼을 클릭하면 Main.js를 거쳐 활성화됩니다.
