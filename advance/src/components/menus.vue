<style lang="less">
@import '../common/style/menu.less';
</style>

<template>
  <div class="list-todos">
    <a @click="goList(todo.id)" class="list-todo activeListClass list" :class="{'active': currentTodoId === todo.id}" v-for="todo in todos">
      <i class="icon-lock" v-if="todo.isLocked"></i>
      <span class="count-list" v-if="todo.count > 0">{{todo.count}}</span>
      {{todo.title}}
    </a>
    <a class="link-list-new" @click="addTodo">
      <i class="icon-plus"></i>
      新增
    </a>
  </div>
</template>

<script>
// import {addTodo} from '../api/api';
import {getTodo, addTodo} from '../vuex/actions'; 

export default {
  data() {
    return {
      currentTodoId: ''
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodoList;
    }
  },
  created() {
    this.$store.dispatch('getTodo').then(() => {
      // Dom 更新之后执行的操作
      this.$nextTick(() => {
        if (!this.todos || this.todos.length === 0) {
          return;
        }
        this.goList(this.todos[0].id);
      })
    })
    // getTodoList().then(res => {
    //   const TODOS = res.data.todos;
    //   this.todos = TODOS;
    //   this.currentTodoId = TODOS[0].id;
    // });
  },
  watch: {
    currentTodoId() {
      this.$router.push({name: 'TODO', params: {id: this.currentTodoId}});
    }
  },
  methods: {
    goList(id) {
      this.currentTodoId = id;
    },
    addTodo() {
      this.$store.dispatch('newTodo').then(() => {
        // Dom 更新之后执行的操作
        this.$nextTick(() => {
          if (!this.todos || this.todos.length === 0) {
            return;
          }
          this.goList(this.todos[this.todos.length -1].id);
        })
        // const TODOS = res.data.todos;
        // this.todos = TODOS;
        // this.currentTodoId = TODOS[TODOS.length - 1].id;
      });
    }
  }
};
</script>