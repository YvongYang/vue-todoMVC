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
      v-model.trim="newTodo"
      @keyup.enter="addTodo">
  </section>
</template>

<script>
  export default {
    props: {
      todos: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        newTodo: ''
      };
    },

    methods: {
      addTodo() {
        const value = this.newTodo;
        
        if (!value) {
          return;
        }

        this.$emit('addTodo', value);
      },
      toggleAll() {
        this.$emit('toggleAll');
      }
    }
  };
</script>