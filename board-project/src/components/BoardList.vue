<template>
  <div>
    <table id="list">
      <thead>
        <tr>
          <th>글번호</th>
          <th>글제목</th>
          <th>조회수</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in list" v-bind:key="board.no"> <!--여기를 looping 돌면서..-->
          <td>{{ board.no }}</td>
          <td @click="showRead(board)">{{ board.title }}</td>
          <td>{{ board.view }}</td>
          <td><button @click="deleteBoard(board.no)">삭제</button></td>
        </tr>
      </tbody>
    </table>
    <button style="float : right;" @click="showWrite">글쓰기</button>
  </div>
</template>

<script>
export default {
  props: ['list'], // 부모 컴포넌트의 전달값을 받는 속성
  data () {
    return {

    }
  },
  methods : {
    showWrite(){
      console.log(this);
      // this.$parent.listView = false;
      // this.$parent.writeView = true; 이렇게 2줄로 만들면 추후 번거로워짐
      // 부모 컴포넌트 데이터를 변경
      this.$emit('show-write'); // 부모 컴포넌트의 이벤트를 실행하기 위한 호출(요청)
    },
    showRead(board) {
      // 상세화면 보여주기
      this.$emit('show-read', board);
    },
    deleteBoard(no){ // 파라메터 전달하면 전달받은 파라메터를 가지고 사용자정의 이벤트 추가..
      this.$emit('board-delete', no);
    }
  }
}
</script>
