<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="todo in todos" :class="{completed: todo.completed}" :key="todo.id">
        <TodoItem :todo="todo" v-on:removeTodo="$emit('removeTodo', todo)" />
      </li>
    </ul>
  </section>
</template>

<script>
import TodoItem from './todo-item';

  export default {
    props: {
      todos: {
        type: Array,
        default: () => [{
          todo: {}
        }]
      }
    },
    watch: {
      todos() {
        /* eslint-disable */
        console.log('Props has changed');
        /* eslint-enable */
      }
    },
    components: {
      TodoItem
    }
  };
</script>