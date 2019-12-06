<template functional>
  <div class="base-circle"
       :style="{ width: props.size, height: props.size }">
    {{props.text}}
  </div>
</template>

<script>
export default {
  name: 'BaseCircle',
  props: {
    size: String,
    text: Number
  }
}
</script>

<style>
  .base-circle {
    display: inline-block;
    background-color: #4CAF50;
    border-radius: 50%;
  }
</style>
