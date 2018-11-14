<template>
  <div class="container">
    <h1>todos</h1>
    <TodoInput 
      :todos="todos" 
      v-on:addTodo="onAddTodo"
      v-on:toggleAll="onToggleAll"
      />
    <TodoList 
      :todos="todos"
      v-on:editTodo="onEditTodo"
      v-on:cancelEditTodo="onCancelEditTodo"
      v-on:removeTodo="onRemoveTodo"
      />
    <TodoFooter 
      :todos="todos"
     />
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
      },
      onToggleAll() {
        this.todos = this.todos.map(i => {
          i.completed = !i.completed;

          return i;
        });
      },
      onEditTodo() {},
      onCancelEditTodo() {},
      onRemoveTodo(todo) {
        // TODO:
        this.todos.splice(this.todos.indexOf(todo), 1);
      },
    }
  };
</script>

<style>
  li {
    list-style: none;
  }
</style>