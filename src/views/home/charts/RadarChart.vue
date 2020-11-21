<template>
  <Card dis-hover>
    <p slot="title">热门搜索</p>
    <div id="main2" style="height: 300px;"></div>
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
        this.chart = echarts.init(document.getElementById('main2'));
        this.chart.setOption(this.getOption())
    },
    methods: {
        getOption() {
            return {
                tooltip: {},
                color: ['#44a5ff','#5ad8a6','#facc14'],
                radar: {
                    // shape: 'circle',
                    splitArea: {
                        show: false,
                    },
                    splitNumber: 2,
                    axisLine: {
                        lineStyle: {
                            color: '#f1f1f1',
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f1f1f1',
                        },
                    },
                    name: {
                        textStyle: {
                            color: '#999',
                        }
                    },
                    indicator: [
                        { name: '热度', max: 10000},
                        { name: '引用', max: 10000},
                        { name: '口碑', max: 10000},
                        { name: '产量', max: 10000},
                        { name: '贡献', max: 10000},
                    ]
                },
                series: [{
                    type: 'radar',
                    data: [
                        {
                            value: function() {
                                const data = []
                                for (let i = 1; i <= 5; i++) {
                                    data.push(random(0, 10000))
                                }
                                return data
                            }(),
                            name: 'Typescript'
                        },
                        {
                            value: function() {
                                const data = []
                                for (let i = 1; i <= 5; i++) {
                                    data.push(random(0, 10000))
                                }
                                return data
                            }(),
                            name: 'Vue'
                        },
                        {
                            value: function() {
                                const data = []
                                for (let i = 1; i <= 5; i++) {
                                    data.push(random(0, 10000))
                                }
                                return data
                            }(),
                            name: 'Angular'
                        }
                    ]
                }]
            }
        }
    }
}
</script>

<style>

</style>