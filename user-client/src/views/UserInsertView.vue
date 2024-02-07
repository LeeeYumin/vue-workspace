<!--UserInsertView.vue-->
<template>
  <div class="container">
    <h1>회원 정보 등록</h1>
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">No.</th>
          <td class="text-center">
            <input class="form-control" type="number" v-model="userInfo.user_no" readonly>
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">Id</th>
          <td class="text-center">
            <input class="form-control" type="text" v-model="userInfo.user_id">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">Password</th>
          <td class="text-center">
            <input class="form-control" type="password" v-model="userInfo.user_pwd">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
            <input class="form-control" type="text" v-model="userInfo.user_name">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
            <input type="radio" value="M" v-model="userInfo.user_gender">남
            <input type="radio" value="F" v-model="userInfo.user_gender">여
            <!-- <input type="checked" true-value="예" false-value="아니오" v-model="chkVal"> -->
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">나이</th>
          <td class="text-center">
            <input class="form-control" type="number" v-model="userInfo.user_age" min="0" max="130">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">가입일자</th>
          <td class="text-center">
            <input class="form-control" type="date" v-model="userInfo.join_date"> <!--yyyy/MM/dd 인식-->
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info" @click="insertInfo()">저장</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      // chkVal : "아니오",
      userInfo: { // 객체 내부에 있는 필드를 디렉티브 v- 랑 연결..
        user_no: null, //공백 인식 못해서 null 처리가 나음
        user_id: "", //type이 text 라서 ""
        user_pwd: "",
        user_name: "",
        user_gender: null,
        user_age: null,
        join_date: null // 오늘 날짜가 바로 보이게 수정.. created()
      }
    }
  },
  created() { // 기본 세팅도 여기서 동작
    this.userInfo.join_date = this.getToday();
  },
  methods: {
    getToday(){
      let date = new Date();
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    },
    insertInfo() {
      // 1. 유효성 체크 (별도의 함수 만들어서 적용)
      if (!this.validation()) return; // if 문이 안돌았다면 진행.

      // 2. ajax
      // 2-1) 실제 보낼 데이터 선별
      let data = this.getSendData();

      // 2-2) axios 를 이용해서 ajax 실행
      axios
        .post('/api/users', data) // rest방식의 서버..
        .then(result => {
          // 3. 결과처리 는 then 안에서.
          let user_no = result.data.insertId;
          if(user_no == 0) {
            alert(`등록되지 않았습니다.\n메세지를 확인해주세요\n${result.data.message}`)
          }else{
            alert (`정상적으로 등록되었습니다.`);
            this.userInfo.user_no = user_no;
          }
        })
        .catch(err => console.log(err)); // axios 깨뜨림...

    },
    validation() { // 필수 값 (MySQL에 3개로 만들었음) 에 대한 체크. 개별 체크. 프로퍼티 직접 불러옴..
      if (this.userInfo.user_id == "") {
        alert('아이디가 입력되지 않았습니다');
        return false;
      }
      if (this.userInfo.user_pwd == "") {
        alert('비밀번호가 입력되지 않았습니다');
        return false;
      }
      if (this.userInfo.user_name == "") {
        alert('이름이 입력되지 않았습니다');
        return false;
      }
      return true;

    },
    getSendData() {
      let obj = this.userInfo
      let delData = ["user_no"];
      let newObj = {};

      let isTargeted = null;
      for (let field in obj) {
        isTargeted = false;
        for (let target of delData) {
          if (field == target) {
            isTargeted = true;
            break;
          }
        }
        if (!isTargeted) {
          newObj[field] = obj[field];
        }
      }
      let sendData = {
        "param" : newObj
      }
      return sendData;
    }
  }
}
</script>