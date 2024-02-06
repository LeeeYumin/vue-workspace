<!--UserInfoView.vue-->
<template>
  <div class = "container">
    <h1>회원 정보 조회</h1>
    <div class="row">
      <table class="table">
        <tr> <!-- v-if="user"-->
          <th class="text-right table-primary">No.</th>
          <td class="text-center">{{ userInfo.user_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">Id</th>
          <td class="text-center">{{ userInfo.user_id }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">Password</th>
          <td class="text-center">{{ userInfo.user_pwd }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">{{ userInfo.user_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">{{ userGender }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">나이</th>
          <td class="text-center">{{ userInfo.user_age }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">가입일자</th>
          <td class="text-center">{{ joinDate }}</td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info col-4" @click="goToUpdate(userInfo.user_id)">수정</button>
      <Router-link to="/" class="btn btn-success col-4">목록</Router-link>
      <button class="btn btn-warning col-4" @click="deleteInfo(userInfo.user_id)">삭제</button> <!--axios 로 동작-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      userInfo : {}
    }
  },
  computed : { // 수정할 수 없는 값으로 인식.
    // 성별 null, M , F.
      userGender(){
        let result = null;
        if(this.userInfo.user_gender == "M"){
          result = "남"
        } else if (this.userInfo.user_gender == "F"){
          result = "여";
        }
        return result;
      },

    // 가입날짜 : 년 월 일
      joinDate(){
        let result = null;
        if (this.userInfo.join_date != null){
          let date = new Date(this.userInfo.join_date);
          let year = date.getFullYear();
          let month = ('0' + (date.getMonth() + 1)).slice(-2);
          let day = ('0' + (date.getDate())).slice(-2);

          result = `${year}년 ${month}월 ${day}일`;
        }
        return result;
      }
  },
  created(){
    let searchNo = this.$route.query.userId;
    // console.log(searchNo);
    this.getUserInfo(searchNo);
  },
  methods : {
    async getUserInfo(userId){
      // http://localhost:3000/users/admin 가
      // 1) /api/users/admin 로 바뀜. + userId;
      // 2) `/api/users/${userId}`; 도 됨.
      let result = await axios.get(`/api/users/${userId}`)
                              .catch(err => console.log(err));
      let info = result.data;
      this.userInfo = info;
    },
    goToUpdate(userId){
      // 수정폼 컴포넌트 호출
      console.log(userId);
    },
    deleteInfo(userId){
      // 서버에 해당 데이터를 삭제
      console.log(userId);
    }
  }
}

</script>