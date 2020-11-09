<template>
  <div class="app-container home-container">
    <PageViewChart />
    <div class="two-layout">
      <PageViewChart1 />
      <PageViewChart2 />
    </div>
    <div class="three-layout">
      <WordCloud />
    </div>
  </div>
</template>

<script>
import PageViewChart from "./charts/PageView"
import PageViewChart1 from "./charts/PageView1"
import PageViewChart2 from "./charts/PageView2"
import WordCloud from "./charts/WordCloud"
export default {
  components: { PageViewChart, PageViewChart1, PageViewChart2, WordCloud }
}
</script>

<style lang="scss" scoped>
.two-layout {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 24px;
}
.three-layout {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
}
</style>