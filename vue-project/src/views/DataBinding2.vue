<template>
  <select v-model="city">
    <option value="02">서울</option>
    <option value="03">부산</option>
    <option value="04">제주</option>
  </select>
  <p>{{ city }}</p>
  <label>선택: <input type="checkbox" true-value="yes" false-value="no" v-model="checked"></label>
  <p>선택값:{{ checked }}</p>

  <!-- v-model 속성 체크되면 value값 반환?? -->
  <label><input type="checkbox" v-model="checkItems" value="01">서울</label>
  <label><input type="checkbox" v-model="checkItems" value="02">부산</label>
  <label><input type="checkbox" v-model="checkItems" value="03">제주</label>
  <label><input type="checkbox" v-model="checkItems" value="04">대전</label>
  <p>선택값: {{ orderItems }}</p>
</template>

<script>
export default{
  data(){
    return {
      city: "04",
      checked: "yes",
      // 배열로 선언 => value 값 담을 수 있음
      // 배열 없이 변수로 선언시 T/F 만 가능
      // //변수 타입 : 배열. 바인딩은 배열로 가져오고 변수는 '' 로 가져옴.
      checkItems: ["01"]
    }
  }
}

</script>