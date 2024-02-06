<template>
  <div>
    <input type="text" v-model="todo">
    <button @click="addTodo">추가</button>
  </div>
  <div>
    <ul>
      <li v-for="todo in todoList" v-bind:key="todo.no">{{`${todo.no} - ${todo.text}`}} <!--{{todo.no + '/' + todo.text}}-->
      <button v-on:click="deleteTodo(todo.no)">삭제</button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        todo : '다음에 할일', //{no:3, text : '다음에 할일'}
        todoList : [{no:1, text : '할일1'}, {no:2, text : '할일2'}]
      }
    },
    methods : {
      addTodo(){
        let no, text;
        no = this.todoList[this.todoList.length -1].no + 1 ;
        text = this.todo;
        this.todoList.splice(this.todoList.length, 0, {no, text}); //(no-1, 0, {no, text}); 위치에, 0개의 값을, 이걸로 대체
        this.todo = '';
      },
      deleteTodo(no){
        //console.log('no:' , no) 모르겠으면 콘솔로 찍어보자
        this.todoList = this.todoList.filter(todo => todo.no == no ? false : true)
      }
    }
  }
</script>
