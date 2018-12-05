<style lang = "less">
@import '../common/style/list-items.less';
</style>

<template>
<div class="list-item editingClass editing" :class="{checked: item.checked}">
  <label class="checkbox">
    <input type="checkbox" v-model="item.checked" name="checked" @change="onChange" :disabled="isLocked">
    <span class="checkbox-custom"></span>
  </label>
  <input type="text" placeholder="Please Input" v-model="item.text" :disabled="item.checked || isLocked" :keyup:enter="onChange">
  <a class="delete-item" v-if="item.checked && !isLocked" @click="onDelete">
    <i class="icon-trash"></i>
  </a>
</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          text: '',
          checked: false
        }
      }
    },
    index: {},
    id: {},
    isLocked: {}
  },
  methods: {
    onChange() {
      //TODO: request api
      // editRecord()
    },
    onDelete() {
      //TODO:
      // deleteRecord()
    }
  }
};
</script>