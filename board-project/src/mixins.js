// mixins.js

export default {
  // 컴포넌트 공통 기능
  methods : {
    $getToday(format){ // 충돌방지 $... 'yyyy/DD/dd'
      let today = new Date();
      let year = today.getFullYear();
      let month = ('0' + (today.getMonth() + 1)).slice(-2);
      let day = ('0' + today.getDate()).slice(-2);

      let result = format.replace('yyyy', year)
                          .replace('MM', month)
                          .replace('dd', day);
      return result;
      }
  },
  // 각 라이프사이클 훅에 공통 기능
  created() {
    console.log("Component Created");
    },
    mounted() {
    console.log("DOM mounted");
    }
}