<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="todo in todos">
        <TodoItem/>
      </li>
    </ul>
  </section>
</template>

<script>
import TodoItem from './todo-item';

  export default {
    components: {
      TodoItem
    },
    data: function () {
      return {
        todos: [
          {
            id: '1',
            value: 'aa'
          }
        ]
      }
    }
  };
</script>