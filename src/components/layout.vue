<template>
  <div class="container">
    <h1>todos</h1>
    <TodoInput 
      :todos="filterTodos" 
      v-on:addTodo="onAddTodo"
      v-on:toggleAll="onToggleAll"
      />
    <TodoList 
      :todos="filterTodos"
      v-on:editTodo="onEditTodo"
      v-on:cancelEditTodo="onCancelEditTodo"
      v-on:removeTodo="onRemoveTodo"
      />
    <TodoFooter 
      :todos="filterTodos"
      :filterType="filterType"
      v-on:changeFilterType="onChangeFilterType"
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
        todos: getTodos(),
        filterTodos: [],
        filterType: 'all'
      }
    },
    mounted() {
      this.filterType = window.location.hash.replace(/#\/?/, '');
      this.getFilterTodos();
    },
    watch: {
      filterType() {
        this.getFilterTodos();
      }
    },
    methods: {
      onChangeFilterType(type) {
        this.filterType = type;
      },
      getFilterTodos() {
        switch(this.filterType) {
          case 'all':
            this.filterTodos = this.todos;
            break;
          case 'active':
            this.filterTodos = this.todos.filter(i => !i.completed);
            break;
          case 'completed':
            this.filterTodos = this.todos.filter(i => i.completed);
            break;
          default:
            this.filterTodos = this.todos;
            break;
        }
      },
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
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    }
  };
</script>

<style>
  li {
    list-style: none;
  }
</style>