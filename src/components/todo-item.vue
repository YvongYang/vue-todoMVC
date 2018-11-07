<template>
  <div>
    <div class="view">
      <input type="checkbox" class="toggle-complete" v-modal="todo.completed">
      <label @dblclick="editTodo(todo)">{{todo.value}}</label>
      <button class="delete" @click="removeTodo(todo)">X</button>
    </div>
    <input
      class="edit"
      type="text"
      v-modal="todo.title"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)">
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {}
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