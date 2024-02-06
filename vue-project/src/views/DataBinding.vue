<template>
    <h3>Hello, {{ msg }}</h3>
    <div>{{ htmlStr }}</div>
    <div v-html="htmlStr"></div>
    <input type="text" v-model="vmodel" /> <!--1. 여기에 작성을 하면-->
    <p>{{ vmodel }}</p> <!--3. 출력..-->
    <textarea cols="30" rows="10" v-model="message"></textarea> 
</template>

<script>
export default {
    data(){
      return{
        msg: 'World',
        htmlStr : '<p style="color : red;">Hello</p>',
        vmodel : 'Nice', //.2. 바꾼 값으로 바로 출력됨
        message : '여러라인의 값을 \n 읽습니다.'
      }
    }
}
</script>
