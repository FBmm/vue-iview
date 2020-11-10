<template>
  <Card dis-hover>
    <p slot="title">资源占用</p>
    <div id="LiquidFill" style="height: 300px;"></div>
  </Card>
</template>

<script>
import echarts from "echarts";
import "echarts-liquidfill";
export default {
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(document.getElementById("LiquidFill"));
    this.chart.setOption(this.getOption());
  },
  methods: {
    getOption() {
      return {
        series: [
          {
            type: "liquidFill",
            name: "资源占用",
            radius: "80%",
            amplitude: "4%",
            color: ["#44a5ff"],
            silent: true,
            data: [
              {
                name: "资源占用",
                value: 0.6
              }
            ],
            outline: {
              show: true,
              borderDistance: 2,
              itemStyle: {
                color: "none",
                borderColor: "#1890ff",
                borderWidth: 2,
                shadowBlur: 0
              }
            },
            label: {
              show: true,
              color: "#333",
              insideColor: "#333",
              fontSize: 24
            },
            itemStyle: {
              shadowBlur: 0
            },
            backgroundStyle: {
              borderWidth: 0,
              color: "#fff"
            }
          }
        ]
      };
    }
  }
};
</script>

<style>
</style>