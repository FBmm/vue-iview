<template>
  <div class="two-cols-layout">
      <div class="two-cols-layout__left">
          <slot name="left"></slot>
      </div>
      <div class="two-cols-layout__right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.two-cols-layout {
    display: flex;
}
.two-cols-layout__left {
    width: 200px;
}
.two-cols-layout__right {
    flex: 1;
}
</style>