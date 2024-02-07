<template>
  <div>
    <Header />
    <router-view :key="$route.fullPath" />
    <!--key 가 변경되면 새로운 컴포넌트를 불러옴. 라우트별로 고유적으로 가질만한게 fullPath.-->
  </div>
</template>
<script>
  import Header from './layouts/HeaderComponent.vue'

  export default {
    components : {
      Header
    }
  }
</script>
