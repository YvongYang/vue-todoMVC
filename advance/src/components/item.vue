<style lang = "less">
@import '../common/style/list-items.less';
</style>

<template>
<div class="list-item editingClass editing">
  <label class="checkbox">
    <input type="checkbox" checked="item.checked">
  </label>
  <input type="text" placeholder="Please Input" v-model="item.text">
  <a class="delete-item">
    <i class="icon-trash"></i>
  </a>
</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>