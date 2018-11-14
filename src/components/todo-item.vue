<template>
  <div class="view">
    <input type="checkbox" class="toggle" v-model="todo.completed">
    <input
      v-if="isEditing"
      class="edit"
      type="text"
      v-model="todo.title"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)">
    <label v-else @dblclick="editTodo(todo)">{{todo.title}}</label>
    <button class="delete" @click="removeTodo(todo)">X</button>
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
      return {
        isEditing: false
      };
    },
    methods: {
     
      // TODO: props shouldn't be changed in children component, should move it to parent component.
      editTodo(todo) {
        this.isEditing = true;
        this.oldTodoTitle = todo.title;
      },
      doneEdit(newTodo) {
        this.isEditing = false;
        this.todo = newTodo;
      },
      cancelEdit() {
        this.isEditing = false;
        this.todo.title = this.oldTodoTitle;
      },
      removeTodo(todo) {
        this.$emit('removeTodo', todo);
      }
    }
  };
</script>

<style>
  
</style>