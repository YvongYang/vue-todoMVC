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
      v-on:removeTodo="onRemoveTodo"
      />
    <TodoFooter 
      :todos="filterTodos"
      :filterType="filterType"
      v-on:changeFilterType="onChangeFilterType"
      v-on:clearCompleted="onClearCompleted"
     />
  </div>
</template>

<script>
  import TodoInput from './todo-input';
  import TodoList from './todo-list';
  import TodoFooter from './todo-footer';

  import {getTodos, setTodos} from '../utils/todos-util';

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
      },
      todos() {
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

        setTodos(this.todos);
      },
      onToggleAll(toggle) {
        this.todos = this.todos.map(i => {
          i.completed = toggle;

          return i;
        });
      },
      onEditTodo(todo) {
        this.todos =  this.todos.map(i => {
          if (i.id === todo.id) {
            i = todo;
          }

          return i;
        });

        setTodos(this.todos);
      },
      onRemoveTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);

        setTodos(this.todos);
      },
      onClearCompleted() {
        this.todos = this.todos.map(i => {
          i.completed = false;

          return i;
        });

        setTodos(this.todos);
      }
    }
  };
</script>

<style>
  li {
    list-style: none;
  }
</style>