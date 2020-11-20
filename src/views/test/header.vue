<template>
  <div class="app-container">
    <slot v-bind:scope="scope" v-bind:user="user" name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        name: "zhangsan",
      },
      scope: {
        id: 1
      }
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>