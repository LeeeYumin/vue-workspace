<template>
  <table id="list">
    <tr>
      <td style="width:50px">글제목</td>
      <td>{{ obj.title }}</td>
    </tr>
    <tr style = "height:200px">
      <td colspan="2">{{ obj.content }}</td>
    </tr>
  </table>
  <button style="float:right;" @click="showList">목록으로</button> <!-- v-on:click 이랑 같음-->
</template>

<script>
export default {
  props: ['obj'],
  data () {
    return {

    }
  },
  methods : {
    showList(){
      this.$emit('showList')
    }

  }
}
</script>
