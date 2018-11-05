<template>
  <div>
    <div>
      <input type="radio" class="toggle-complete">
      <label @dblclick="editTodo(todo)">{{todo.value}}</label>
      <button class="delete" @click="removeTodo(todo)">X</button>
    </div>
    <input
      class="hidden"
      type="text"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo: {
          value: '11'
        }
      }
    },
    watch: {},
    computed: {},
    methods: {
      editTodo() {},
      doneEdit() {},
      cancelEdit() {},
      removeTodo() {}
    }
  };
</script>

<style>
  .hidden {
    display: none;
  }
</style>