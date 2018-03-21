<template>
  <div class="box info">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .box {
    background: #e3e3e3;
    padding: 10px;
    border: 1px solid #000;
    margin-bottom: 5px;
  }
</style>
