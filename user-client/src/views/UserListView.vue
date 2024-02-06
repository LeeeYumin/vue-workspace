<!--UserListView.vue-->
<template>
  <div class="container">
    <h1>전체 회원 조회</h1>
    <table class="table"></table>
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key ="idx" v-for="(user, idx) in userList"
          @click="goToUserInfo(user.user_id)"> <!--@click = v-on:click-->
        <!-- in 중심으로 오른쪽은 배열타입 왼쪽은 임시변수. user 말고 temp도 가능..-->
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_name }}</td>
          <td v-text="user.user_gender" /> <!--{{ userList.user_gender }}-->
          <td v-text="user.join_date" />
        </tr>
      </tbody>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){ // 정의
    return {
      userList : [] // 객체, 배열, 문자, 숫자 정도는 구분. 그것도 아니면 null...
    }
  },
  computed : { // 자동으로 몇 개 '값' 생성 (근간이 있는 데이터 중? 새로운 값을 만들어 냄. 어딘가에든 쓰임.)
    count(){
      return this.userList.length;
    }
  },
  // watch : { //  '프로세스'. 이미 있는 데이터 중에 변경됨을 감시. 값이 아니어서 return 없음. template X.
  //   userList(newQuestion, oldQuestion){ // (새로운 값, 기존 값)
  //     console.log('이전 : ', oldQuestion);
  //     alert('데이터가 변경되었습니다.');
  //     console.log('이후 : ', newQuestion);
  //   }
  // },
  created(){
    this.getUserList(); // 비동기 작업

  },
  methods : {
    async getUserList() {
      // 동기 작업
      let result = await axios.get('/api/users') // then OR await 사용
                              .catch(err => console.log(err)); // 에러 날 경우 처리
      let list = result.data;
      this.userList = list;
    },
    goToUserInfo(userId){
      this.$router.push({name : 'userInfo', query : {"userId" : userId}}); // 등록된 라우터에 요청.
                // 라우터에 푸쉬. 컴포넌트에서 사용함. {필드명(키값) : 매개변수}
    }
  }
}
</script>