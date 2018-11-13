<template>
  <section class="main">
    <ul class="todo-list">
      <li :class="{completed: todo.complete}" v-for="todo in todos">
        <TodoItem :todo="todo"/>
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
        default: []
      }
    },
    components: {
      TodoItem
    }
  };
</script>