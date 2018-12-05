<style lang = "less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>

<template>
  <div class="page lists-show">
    <nav>
      <div class="form list-edit-form" v-show="isEditing">
        <!-- 当用户点击标题进入修改状态，就显示当前内容可以修改 -->
        <input type="text" v-model="todo.title" @keyup.enter="updateTitle" :disabled="todo.isLocked">
        <div class="nav-group right">
          <a class="nav-item" @click="isEditing = false">
            <span class="icon-close">
            </span>
          </a>
        </div>
      </div>
      <h1 class="title-page" v-show="!isEditing" @click="isEditing = true">
        <span class="title-wrapper">{{todo.title}}</span> 
        <span class="count-list">{{todo.count}}</span>
      </h1>
      <div class="nav-group right" v-show="!isEditing">
        <a class="nav-item" @click="onLock">
          <span class="icon-lock" v-if="todo.isLocked"></span>
          <span class="icon-unlock" v-else></span>
        </a>
        <a class="nav-item" :click="onDelete">
          <span class="icon-trash"></span>
        </a>
      </div>
      <div class="form todo-new input-symbol">
        <input type="text" placeholder='请输入' v-model="text" @keyup.enter="onAdd" :disabled="todo.locked" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <div v-for="(item, index) in todo.records">
        <item :item="item" :id="todo.id" :isLocked="todo.isLocked" :index="index"></item>
      </div>
    </div>
  </div>
</template>

<script>
import item from './item';
import {getTodo, addRecord} from '../api/api';

export default {
  components: {
    item
  },
  data() {
    return {
      todo: {
      },
      text: '',
      isEditing: false
    }
  },
  watch: {
    '$route.params.id'() {
      // 监听$route.params.id的变化，如果这个id即代表用户点击了其他的待办项需要重新请求数据。
      this.init();
    }
  },
  created() {
    this.init();
  },
  methods: {
    onAdd() {
      const text = this.text;
      const id = this.$route.params.id;

      addRecord(text, id).then((res) => {
        this.todo = res.data.todo;
      });

      this.text = '';
    },
    init() {
      const id = this.$route.params.id
    
      getTodo(id).then(res => {
        this.todo = res.data.todo;
      });
    },
    updateTodo() {
      //TODO:
      // editTodo(this.todo)
    },
    updateTitle() {
      this.updateTodo();
      this.isEditing = false;
    },
    onLock() {
      this.todo.locked = !this.todo.locked;
      this.updateTodo();
    },
    onDelete() {
      //TODO:
      //deleteTodo()
    }
  }
};
</script>