<style lang="less">
@import '../common/style/menu.less';
</style>

<template>
  <div class="list-todos">
    <a class="list-todo activeListClass list" v-for="todo in todos">
      <i class="icon-lock" v-if="todo.isLocked"></i>
      <span class="count-list">{{todo.count}}</span>
      {{todo.title}}
    </a>
    <a class="link-list-new">
      <i class="icon-plus"></i>
      新增
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: '111',
          title: 'Grace',
          isLocked: true,
          count: 5,
          records: [{
            id: '112',
            text: 'Grace-yang',
            checked: false
          }]
        }
      ]
    };
  }
};
</script>