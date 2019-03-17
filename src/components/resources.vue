
<style lang="scss" >
.multipleColumn{
  height:1000px;
  
  .main{
    width:100%;
    height:calc(100% - 100px);
    margin-top:15px;
    }
    
}
  
</style>


<template>
<div class="multipleColumn">

  <div class="main" ref="myEchart"></div>
</div>

</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      legendArr: [],
      color: this.$store.state.color,
      styleArr: [],
      myChart: {},
      name: '森林资源消长变化统计图'
    }
  },
  methods: {
    // _init() {
    //   this.legendArr = this.myChart.getOption().series
    //   this.legendArr.forEach((data) => {
    //     data.selected = true;
    //   })
    //   this.$root.charts.push(this.myChart)
    //   window.addEventListener('resize', function() {
    //     this.myChart.resize()
    //   }.bind(this))
    // }
    initEchartsColumn() {
       let myChart = echarts.init(this.$refs.myEchart);
       window.onresize = myChart.resize;
       myChart.setOption({ 
          title: {
                text: '森林资源消长变化统计图',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
          tooltip : {
                trigger: 'axis',
            },
             legend: {
              show: true,
              x: 'right', // 'center' | 'left' | {number},
              y: 'bottom', // 'center' | 'bottom' | {number}

            },
            toolbox: {
              show: true
            },
       calculable: true,
        xAxis: [{
        name: '年份',
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.69)'
        },
        axisLabel: {
          textStyle: {
            color: 'white'
          }
        },
        data: ['1962', '1982', '1989', '2002', '2017']
      }],
      yAxis: [{
        axisLine: {
          show: false
        },
        nameLocation: 'end',
        nameGap: 20,
        nameRotate: 0,
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: ['rgba(230, 230, 230, 0.2)']
          }
        },
        axisLabel: {
          textStyle: {
            color: 'white',
            fontSize: 14
          }
        },
        name: '数量',
        type: 'value',
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.69)'
        }
      }],
      series: [{
        name: '总面积（万公顷）',
        stack: 'stack1',
        type: 'bar',
        data: [10.5, 10.2, 9.39, 9.50, 9.33],
        barWidth: 16,
        barGap: 0
      }, {
        name: '林分面积（万公顷）',
        stack: 'stack2',
        type: 'bar',
        data: [1.3, 4.7, 5.3, 7.0, 7.5],
        barWidth: 16,
        barGap: 0
      }, {
        name: '人工林面积（万公顷）',
        stack: 'stack1',
        type: 'bar',
        data: [0, 2.9, 3.6,5.4,5.9],
        barWidth: 16,
        barGap: 0
      }, {
        name: '年生长量（万公顷）',
        stack: 'stack2',
        type: 'bar',
        data: [1.8, 12.5, 24.4, 62.1, ],
        barWidth: 16,
        barGap: 0
      }, {
        name: '森林覆盖率（%）',
        stack: 'stack3',
        type: 'bar',
        data: [11.4, 48.4, 56.7, 73.4, 80.0],
        barWidth: 16,
        barGap: 0
      }]
        })
    }
  },
  
  mounted() {
   this.initEchartsColumn();
  }
}

</script>
