<template>
  <div class="container">
    <h1>todos</h1>
    <TodoInput :todos="todos"　v-on:addTodo="onAddTodo" />
    <TodoList :todos="todos" />
    <TodoFooter :todos="todos" />
  </div>
</template>

<script>
  import TodoInput from './todo-input';
  import TodoList from './todo-list';
  import TodoFooter from './todo-footer';

  import {getTodos} from '../utils/todos-util';

  export default {
    components: {
      TodoInput,
      TodoList,
      TodoFooter
    },
    data() {
      return {
        todos: getTodos()
      }
    },
    methods: {
      onAddTodo(value) {
        this.todos.push({
          id: this.todos.length + 1,
          title: value,
          completed: false
        });

        localStorage.setItem('TODOS', JSON.stringify(this.todos))
      }
    }
  };
</script>

<style>
  li {
    list-style: none;
  }
</style>