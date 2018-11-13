<template>
  <div>
    <div class="view">
      <input type="checkbox" class="toggle" v-model="todo.completed">
      <label @dblclick="editTodo(todo)">{{todo.value}}</label>
      <button class="delete" @click="removeTodo(todo)">X</button>
    </div>
    <input
      class="edit"
      type="text"
      v-model="todo.title"
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
    methods: {
      editTodo() {

      },
      doneEdit() {},
      cancelEdit() {},
      removeTodo() {}
    }
  };
</script>

<style>
  
</style>