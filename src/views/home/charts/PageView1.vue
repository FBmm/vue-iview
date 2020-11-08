<template>
  <Card dis-hover>
    <p slot="title">各类占比</p>
    <div id="main1" style="height: 300px;"></div>
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
        this.chart = echarts.init(document.getElementById('main1'));
        this.chart.setOption(this.getOption())
    },
    methods: {
        getOption() {
            return {
                color: ['#44a5ff','#5ad8a6'],
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
                        for (let i = 0; i < 12; i++) {
                            let h = 6 + i * 2
                            if (h >= 24) {
                                h = h -24;
                            }
                            data.push(`${h}:00`)
                        }
                        return data
                    }()
                },
                series: [{
                    name: '客流量',
                    type: 'line',
                    data: function() {
                        const data = []
                        for (let i = 1; i <= 12; i++) {
                            data.push(random(0, 10000))
                        }
                        return data
                    }()
                }, {
                    name: '支付笔数',
                    type: 'line',
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