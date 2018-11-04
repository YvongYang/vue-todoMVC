<template>
  <footer>
    <span class="total-left">0 item left</span>
    <ul class="filter-list">
      <li class="filter-item">All</li>
      <li class="filter-item">Active</li>
      <li class="filter-item">completed</li>
    </ul>
    <button class="clear-completed">clear completed</button>
  </footer>
</template>

<script>
  export default {};
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