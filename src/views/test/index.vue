<template>
  <div class="app-container">
    <h4>{{name}}</h4>
    <Header>
      <template #content="scopeData">{{content}}{{scopeData}}</template>
      <template #footer>底部</template>
    </Header>
  </div>
</template>

<script>
import Header from "./header"
export default {
  name: "test",
  components: { Header },
  data() {
    return {
      name: "测试",
      content: "内容"
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>

</style>