<template>
  <div>
    <button v-on:click="increaseCounter">Add 1</button>
    <p>Counter is : {{ counter }}</p>
    <button v-on:click="increaseCounter2(3)">Increase</button> <!-- (3)이 매개값-->
    <button v-on:click="one(), two()">다중호출</button>

    <select v-model="city" @change="changeSelect">
      <option value="1">서울</option>
      <option value="2">부산</option>
      <option value="3">제주</option>
    </select>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        counter : 5,
        city : '1'
      }
    },
    methods : { //이벤트는 여기에 넣는다. 메소드는 여러개.. 객체타입..
      increaseCounter(){
        console.log('increaseCounter')
        this.counter = this.counter + parseInt(this.city);
      },
      increaseCounter2 (num){
        this.counter = this.counter + num;
      },
      one(){
        alert('one')
      },
      two() {
        alert('two')
      },
      changeSelect(){
        alert(this.city)
      }
    },
    beforeUpdate(){
      // 변경 전에 필요한 처리를 구현
      console.log('beforeUpdate')
    },
    updated(){
      // 변경 후에 필요한 처리를 구현
      console.log('updated')
    }
  }
  </script>
