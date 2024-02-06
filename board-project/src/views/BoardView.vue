<template>
  <!--화면-->
  <div>
    <HeaderComponent />
    <BoardList v-if="listView" v-bind:list="boardList" @show-write="showWrite"
                    @board-delete="deleteBoard" @show-read="showRead"/> <!--components 의 내용을 여기서 보여줄거임. 자바스크립트영역. 목록보는 화면.-->
    <BoardWrite v-if="writeView" v-on:save-board="saveBoard" /> <!--등록하는 화면. save-board는 사용자정의 이벤트-->
    <BoardRead v-if="readView" v-bind:obj="board" @show-list="showList"/>
    <FooterComponent v-bind:data="htmlData">
      <template v-slot:footer><p>Since 2020</p></template>
      <template v-slot:header><h3>Header에 들어갈 내용</h3></template>
      <template v-slot:default><p>Hello, World</p></template> <!--default는 이름이 없음..-->
    </FooterComponent> <!--html 전달-->
  </div>
</template>

<script>
import BoardList from '../components/BoardList.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import BoardWrite from '../components/BoardWrite.vue'
import BoardRead from '../components/BoardRead.vue'

export default { // 템플릿 안에서 쓸 변수, 컴포넌트 정의
  data () {
    return {
      listView : true,
      writeView : false,
      readView : false,
      board : {}, // 상세화면에 사용할 데이터
      boardList: [
        { no: 1, title: 'Vue는 좋아요', content: '프레임워크입니다', view: 1 },
        { no: 2, title: '좋은 아침입니다...^^', content: '금요일이라서 좋다', view: 3 },
        { no: 3, title: '집에가고싶다', content: '잠도온다', view: 100 }
      ],
      htmlData : '<p>helloHouse</p>'
    }
  },
  components: {
    BoardList: BoardList, // 템플릿 안에 선언된 BoardList 태그 : 보여줘야 될 내용을 넣어주겠다는 BoardList.
    HeaderComponent, // 속성과 값이 같으면 HeaderComponent 만 써도 됨.
    FooterComponent,
    BoardWrite,
    BoardRead
  },
  methods: {
    showWrite() { // 등록화면을 보여주기
      this.listView = false;
      this.writeView = true;
    },
    showList(){ // 목록 보여주는 기능
      this.listView = true;
      this.writeView = false;
      this.readView = false;
    },
    showRead(board){ // 상세화면 보여주는 기능
      console.log(board); // 글번호 활용해서 boardList의 view 증가시켜주기..
      this.listView = false;
      this.writeView = false;
      this.readView = true;
      this.board = board;
    // 글번호의 조회 (view) 증가.
    // 글 번호의 인덱스를 찾아서 현재 조회수를 파악하고 증가하기.
    let idx = -1; // 변수 선언.. 해당 위치의 값을 새로운 값으로 변경하기 위해서.
                  // 0이어도 상관은 없음... -1은 임의의 값. 찾아도 없게 하려고 주는 초기값임.
    let viewCnt = 0;
    for(let i = 0; i < this.boardList.length; i++){
      if(this.boardList[i].no == board.no){
        idx =i;
        viewCnt = this.boardList[i].view;
        break;
      }
    }
    let brd = {no: board.no, title:board.title, content:board.content, view: ++viewCnt};
    this.boardList.splice(idx, 1, brd); // 새로운 값으로 변경
  },
    saveBoard(title, content) { // 신규글 등록. 등록만 되고 새로고침하면 사라짐..
      console.log(title, content);
      let idx = this.boardList.length - 1; // 마지막 데이터의 index값
      let no = parseInt(this.boardList[idx].no) + 1; // 새로운 데이터의 no값
      let board = {no, title, content, view: 0} // view는 처음이니까 0 (조회수)
      this.boardList.splice(this.boardList.length, 0, board);
      this.showList();
    },
    deleteBoard(no) { //글삭제
      this.boardList = this.boardList.filter(board => board.no == no ? false : true); // 반복된 변수를 받는 board ?
    }
  }
}
</script>
