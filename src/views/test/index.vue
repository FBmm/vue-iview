<template>
  <div class="app-container">
    <h4>{{name}}</h4>
    <Header>
      <template #content="scopeData">{{content}}{{scopeData}}</template>
      <template #footer>底部</template>
    </Header>
    <Button type="error" @click="onClick">这是一个按钮</Button>
  </div>
</template>

<script>
import Header from "./header"
import { debounce } from "lodash" // eslint-disable-line
import { throttle } from "lodash" // eslint-disable-line
import { throttle as th, debounce as de } from "throttle-debounce" // eslint-disable-line
export default {
  name: "test",
  components: { Header },
  data() {
    return {
      name: "测试",
      content: "内容",
      count: 0,
    }
  },
  mounted() {
    console.log(this)
    this.fn = debounce(this.print, 1000, {
      leading: false,
      trailing: true,
    })
    // this.fn = de(1000, false, this.print)
  },
  methods: {
    print(a) {
      console.log(a)
    },
    onClick() {
      this.count++
      this.fn(this.count)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>