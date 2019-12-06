<template functional>
  <div class="rectangle"
       v-bind="data.attrs"
       :style="{ width: props.width, height: props.height }">
  </div>
</template>

<script>
export default {
  name: 'BaseRectangle',
  props: {
    width: String,
    height: String
  }
}
</script>

<style scoped>
  .rectangle {
    display: inline-block;
    background-color: #f44336;
  }
</style>
