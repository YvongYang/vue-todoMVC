<template>
  <div class="container">
    <h1>todos</h1>
    <TodoInput />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
  import TodoInput from './todo-input';
  import TodoList from './todo-list';
  import TodoFooter from './todo-footer';

  export default {
    components: {
      TodoInput,
      TodoList,
      TodoFooter
    }
  };
</script>

<style>
  li {
    list-style: none;
  }
</style>