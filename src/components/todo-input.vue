<template>
  <section class="header">
    <input
      class="toggle-all"
      type="checkbox"
      @click="toggleAll"
    >
    <input class="new-todo"
      autofocus 
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo">
  </section>
</template>

<script>
  export default {
    data() {
      return {
        newTodo: ''
      };
    },

    methods: {
      addTodo() {},
      toggleAll() {}
    }
  };
</script>