<template functional>
  <div class="base-triangle"
       :style="{borderWidth: props.size}">
    <span class="base-triangle__text">{{props.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseTriangle',
  props: {
    size: String,
    text: Number
  }
}
</script>

<style>
.base-triangle {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #FFC107;
  display: inline-block;
  height: 0;
  position: relative;
  width: 0;
}
.base-triangle__text {
}
</style>
