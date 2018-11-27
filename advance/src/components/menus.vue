<style lang="less">
@import '../common/style/menu.less';
</style>

<template>
  <div class="list-todos">
    <a class="list-todo activeListClass list" v-for="todo in todos">
      <i class="icon-lock" v-if="todo.isLocked"></i>
      <span class="count-list">{{todo.count}}</span>
      {{todo.title}}
    </a>
    <a class="link-list-new">
      <i class="icon-plus"></i>
      新增
    </a>
  </div>
</template>

<script>
import { getTodoList, addTodo } from '../api/api'; 

export default {
  data() {
    return {
      todos: []
    };
  },
  created() {
    getTodoList().then(res => {
      const TODOS = res.data.todos;
      this.todos = TODOS;
      this.todoId = TODOS[0].id;
    });
  }
};
</script>