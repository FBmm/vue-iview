<template>
  <Card dis-hover>
    <p slot="title">性能分析</p>
    <div id="guage" style="height: 300px;"></div>
  </Card>
</template>

<script>
import echarts from "echarts";
import random from "lodash/random"
export default {
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(document.getElementById("guage"));
    this.chart.setOption(this.getOption());
    setInterval(() => {
        this.chart.setOption(this.getOption());
    },2000);
  },
  methods: {
    getOption() {
      const value = random(0, 100)
      return {
        color: ["#44a5ff"],
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            axisLine: {
                lineStyle: {
                    width: 15,
                    color: [[1, value < 60 ? '#44a5ff' : '#ea6c5c']]
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
                width: 2,
                length: '70%',
            },
            splitNumber: 1,
            title: {
                fontSize: 12,
                offsetCenter: [0, '30%'] ,
            },
            detail: { 
                formatter: "{value}%",
                fontSize: 20,
                offsetCenter: [0, '60%']
            },
            data: [{ value: value, name: "CPU占用率" }]
          }
        ]
      };
    }
  }
};
</script>

<style>
</style>