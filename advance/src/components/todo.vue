<style lang = "less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>

<template>
  <div class="page lists-show">
    <nav>
      <h1 class="title-page">
        <span class="title-wrapper">{{todo.title}}</span> 
        <span class="count-list">{{todo.count}}</span>
      </h1>
      <div class="nav-group right">
        <a class="nav-item">
          <span class="icon-lock" v-if="todo.isLocked"></span>
          <span class="icon-unlock" v-else></span>
        </a>
        <a class="nav-item">
          <span class="icon-trash"></span>
        </a>
      </div>
      <div class="form todo-new input-symbol">
        <input type="text" placeholder='请输入' v-model="text" @keyup.enter="onAdd" :disabled="todo.locked" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <div v-for="item in todo.records">
        <item :item="item"></item>
      </div>
    </div>
  </div>
</template>

<script>
import item from './item';

export default {
  components: {
    item
  },
  data() {
    return {
      todo: {
        id: '111',
        title: 'Grace',
        isLocked: true,
        count: 5,
        records: [{
          id: '112',
          text: 'Grace-yang',
          checked: false
        }]
      },
      text: ''
    }
  },
  method: {
    onAdd() {
      this.todo.records.push({
        text: this.text,
        checked: false
      });

      this.text = '';
    }
  }
};
</script>