<template>
  <div class="app-container home-container">
    <BarChart />
    <div class="two-layout">
      <LineChart />
      <Guage />
    </div>
    <div class="two-layout">
      <div class="two-layout__left">
        <WordCloud />
        <LiquidFill />
      </div>
      <RadarChart />
    </div>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart"
import LineChart from "./charts/LineChart"
import RadarChart from "./charts/RadarChart"
import WordCloud from "./charts/WordCloud"
import LiquidFill from "./charts/LiquidFill"
import Guage from "./charts/Guage"
export default {
  components: { BarChart, LineChart, RadarChart, WordCloud, LiquidFill, Guage }
}
</script>

<style lang="scss" scoped>
.two-layout {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 24px;
}
.two-layout__left {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
}
</style>