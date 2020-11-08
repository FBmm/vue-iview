<template>
  <Card dis-hover>
    <p slot="title">访问量</p>
    <div id="main" style="height: 300px;"></div>
</Card>
</template>

<script>
import echarts from "echarts"
import random from "lodash/random"
export default {
    data() {
        return {
            chart: null,
        };
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        this.chart = echarts.init(document.getElementById('main'));
        this.chart.setOption(this.getOption())
    },
    methods: {
        getOption() {
            return {
                color: ['#44a5ff'],
                tooltip: {},
                grid: {
                    borderColor: '#f1f1f1' ,
                },
                yAxis: {
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f1f1f1',
                        },
                    }
                },
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#dedede',
                        },
                    },
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLabel: {
                        color: '#8c8c8c'
                    },
                    data: function() {
                        const data = []
                        for (let i = 1; i <= 12; i++) {
                            data.push(i + '月')
                        }
                        return data
                    }()
                },
                series: [{
                    name: '访问量',
                    type: 'bar',
                    barMaxWidth: '24',
                    data: function() {
                        const data = []
                        for (let i = 1; i <= 12; i++) {
                            data.push(random(0, 10000))
                        }
                        return data
                    }()
                }]
            }
        }
    }
}
</script>

<style>

</style>