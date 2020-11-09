<template>
  <Card dis-hover>
    <p slot="title">前端关键词</p>
    <div id="WordCloud" style="height: 300px;"></div>
  </Card>
</template>

<script>
import echarts from "echarts";
import 'echarts-wordcloud';
export default {
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(document.getElementById("WordCloud"));
    this.chart.setOption(this.getOption());
  },
  methods: {
    getOption() {
      let data = [];
      for (let i = 0; i < 5; i++) {
        const list = [
          {
            name: "vuex",
            value: 1898
          },
          {
            name: "vue-router",
            value: 1484
          },
          {
            name: "Express",
            value: 1112
          },
          {
            name: "Nodejs",
            value: 965
          },
          {
            name: "npm",
            value: 847
          },
          {
            name: "git",
            value: 582
          },
          {
            name: "javascript",
            value: 555
          },
          {
            name: "Typescript",
            value: 550
          },
          {
            name: "CSS世界",
            value: 462
          },
          {
            name: "js",
            value: 366
          },
          {
            name: "模块化",
            value: 360
          },
          {
            name: "scss",
            value: 282
          },
          {
            name: "echarts",
            value: 273
          },
          {
            name: "组件化",
            value: 265
          }
        ];
        data = data.concat(list);
      }
      return {
        tooltip: {},
        series: [
          {
            type: "wordCloud",
            gridSize: 2,
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            shape: "pentagon",
            width: 600,
            height: 400,
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: [
              {
                name: "Vue",
                value: 10000,
                textStyle: {
                  normal: {
                    color: "black"
                  },
                  emphasis: {
                    color: "red"
                  }
                }
              },
              {
                name: "React",
                value: 6181
              },
              {
                name: "HTML5",
                value: 4386
              },
              {
                name: "CSS3",
                value: 4055
              },
              {
                name: "Webpack",
                value: 2467
              },
              {
                name: "Angular",
                value: 2244
              }
            ].concat(data)
          }
        ]
      };
    }
  }
};
</script>

<style>
</style>