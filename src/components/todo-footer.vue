<template>
  <!-- <footer class="footer" v-show="todos.length"> -->
  <footer class="footer">
    <span class="total-left">{{remaining.length}} item left</span>
    <ul class="filter-list">
      <li class="filter-item" @click="$emit('changeFilterType', 'all')" :class="{active: filterType === 'all'}">
        <a href="#/all">All</a>
      </li>
      <li class="filter-item" @click="$emit('changeFilterType', 'active')" :class="{active: filterType === 'active'}">
        <a href="#/active">Active</a>
      </li>
      <li class="filter-item" @click="$emit('changeFilterType', 'completed')" :class="{active: filterType === 'completed'}">
        <a href="#/completed">completed</a>
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
        default: () => []
      },
      filterType: {
        type: String,
        default: 'all'
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