<template functional>
  <div class="base-square"
       :style="{ width: props.size, height: props.size }">
    {{props.text}}
  </div>
</template>

<script>
export default {
  name: 'BaseSquare',
  props: {
    size: String,
    text: Number
  }
}
</script>

<style>
  .base-square {
    display: inline-block;
    background-color: #00BCD4;
  }
</style>
