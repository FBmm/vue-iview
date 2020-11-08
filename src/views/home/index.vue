<template>
  <div class="app-container home-container">
    <PageViewChart />
    <div class="two-layout">
      <PageViewChart1 />
      <PageViewChart2 />
    </div>
  </div>
</template>

<script>
import PageViewChart from "./charts/PageView"
import PageViewChart1 from "./charts/PageView1"
import PageViewChart2 from "./charts/PageView2"
export default {
  components: { PageViewChart, PageViewChart1, PageViewChart2 }
}
</script>

<style lang="scss" scoped>
.two-layout {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 24px;
}
</style>