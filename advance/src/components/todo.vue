<style lang = "less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>

<template>
  <div class="page lists-show">
    <nav>
      <h1 class="title-page">
        <span class="title-wrapper">Amy</span> 
        <span class="count-list">1</span>
      </h1>
      <div class="nav-group right">
        <a class="nav-item">
          <span class="icon-lock"></span>
        </a>
        <a class="nav-item">
          <span class="icon-lock"></span>
        </a>
      </div>
      <div class="form todo-new input-symbol">
        <input type="text" placeholder='请输入' />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <item></item>
    </div>
  </div>
</template>

<script>
import item from './item';

export default {
  components: {
    item
  }
};
</script>