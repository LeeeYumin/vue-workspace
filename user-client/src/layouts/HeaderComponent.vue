<template>
  <nav class="nav">
  <router-link class="nav-link active" aria-current="page" to="#">전체조회</router-link>
  <!--<router-link class="nav-link" to="/UserInsert">등록</router-link>-->
  <router-link class="nav-link" to="/userForm">등록</router-link>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a> <!--Disabled 는 router X-->
  </nav>
</template>