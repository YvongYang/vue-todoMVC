<template>
  <!-- <footer class="footer" v-show="todos.length"> -->
  <footer class="footer">
    <span class="total-left">{{remaining.length}} item left</span>
    <ul class="filter-list">
      <li class="filter-item">
        <a href="#/all">All</a>
      </li>
      <li class="filter-item">
        <a href="#/active">Active</a>
      </li>
      <li class="filter-item">
        <a href="#/active">completed</a>
      </li>
    </ul>
    <button class="clear-completed" v-show="remaining.length < todos.length">
      clear completed
    </button>
  </footer>
</template>

<script>
  export default {
    data: function() {
      let todoList = localStorage.getItem('TODOS') !== 'undefined' 
      ? JSON.parse(localStorage.getItem('TODOS'))
      : [];

      return {
        todos: todoList
      }
    },
    computed: {
      remaining() {
        return this.todos.filter(i => !i.completed)
      }
    }
  };
</script>

<style>
  .filter-list {
    display: inline-block;
  }
  
  .filter-item {
    display: inline-block;
    cursor: pointer;
  }
</style>