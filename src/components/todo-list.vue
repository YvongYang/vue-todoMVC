<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="todo in todos">
        <TodoItem :todo="todo"/>
      </li>
    </ul>
  </section>
</template>

<script>
import TodoItem from './todo-item';

  export default {
    components: {
      TodoItem
    },
    data: function () {
      let todoList = localStorage.getItem('TODOS') !== 'undefined' 
        ? JSON.parse(localStorage.getItem('TODOS'))
        : [];

      return {
        todos: todoList
      }
    }
  };
</script>