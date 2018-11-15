<template>
  <!-- <footer class="footer" v-show="todos.length"> -->
  <footer class="footer">
    <span class="total-left">{{remaining.length}} item left</span>
    <ul class="filter-list">
      <li class="filter-item" :click="filterTodos()" :class="{active: filterType === 'all'}">
        <a href="#/all">All</a>
      </li>
      <li class="filter-item" :click="filterTodos()" :class="{active: filterType === 'active'}">
        <a href="#/active">Active</a>
      </li>
      <li class="filter-item" :click="filterTodos()" :class="{active: filterType === 'completed'}">
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
   props: {
      todos: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        filterType: this.getFilterType() || 'all'
      };
    },
    computed: {
      remaining() {
        return this.todos.filter(i => !i.completed)
      }
    },
    methods: {
      filterTodos() {
        let filterTodos = null;

        switch(this.filterType) {
          case 'all':
            filterTodos = this.todos;
            break;
          case 'active':
            filterTodos = this.todos.filter(i => !i.completed);
            break;
          case 'completed':
            filterTodos = this.todos.filter(i => i.completed);
            break;
          default:
            filterTodos = this.todos;
            break;

          this.filterType = type;
          this.emit('filterTodos', filterTodos);
        }
      },
      getFilterType() {
        return window.location.hash.replace(/#\/?/, '');
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