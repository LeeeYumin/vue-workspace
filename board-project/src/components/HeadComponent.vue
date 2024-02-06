<template>
  <div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
    <input type="text" v-model="myInput" placeholder="Title...">
    <span v-on:click="putText()" class="addBtn">Add</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        myInput: ''
      }
    },
    methods: {
      putText() {
        this.$emit('add-todo', this.myInput);
        this.myInput = '';
      }
    }
  }
</script>