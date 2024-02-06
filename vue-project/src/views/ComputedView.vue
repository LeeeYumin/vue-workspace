<template>
  <div>
    <h1>{{ `${lastName}/ ${firstName}` }}</h1>
    <h1>{{ `${fullName}` }}</h1> <!--둘 중 하나라도 값이 바뀌면 화면refresh-->
  </div>
  <input type="text" v-model="firstName">
</template>

<script>
export default {
  data(){
    return {
      firstName : 'kildong',
      lastName : 'Hong'
    }
  },
  computed : { //복합 데이터 처리
    fullName(){
      return `${this.lastName} / ${this.firstName}`
    }
  },
  watch : { //데이터 변경 이전, 이후 데이터 처리
    firstName(curr, bef){ //curr바뀌기전, bef바뀐후
      console.log(curr, bef)
    }
  }
}
</script>