<!--UserUpdateView.vue-->
<template>
  <div class="container">
    <h1>회원 정보 수정</h1>
    <div class="row">
      <table class="table">
        <tr>
          <!-- No. 랑 ID는 수정불가여야 함-->
          <th class="text-right table-primary">No.</th>
          <td class="text-center">
            <input class="form-control" type="number" v-model="userInfo.user_no" readOnly>
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
// import axios from 'axios'

export default {
  data() {
    return {
      userInfo : {}
    }
  },
  computed : {

  }
}
</script>