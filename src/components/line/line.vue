<!-- 层叠柱状图 -->
<style lang="scss" >
.line{
  height:1000px;
  
  .main{
    width:100%;
    height:calc(100% - 100px);
    margin-top: 15px;
    }
    }
</style>

<template>
<div class="line">

  <div class="main" ref="myEchart"></div>
</div>

</template>

<script>
import echarts from 'echarts'
import header from '@/components/header/header'
import filter from '@/components/filter/filter'

export default {
  data() {
    return {
      legendArr: [],
      color: this.$store.state.color, 
      myChart: {},
      name: '折线图'
    }
  },
  methods: {
    initEchartsLine() {
       let myChart = echarts.init(this.$refs.myEchart);
       window.onresize = myChart.resize;
       myChart.setOption({ 
          title: {
                text: '旅客来源图',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
          tooltip : {
                trigger: 'axis',
            },
             legend: {
              show: false
            },
            toolbox: {
              show: false
            },
       calculable: true,
       xAxis: [{
        name: '产品',
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
        name: '标签1',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      }, {
        name: '标签2',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      }, {
        name: '标签3',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      }, {
        name: '标签4',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      }, {
        name: '标签5',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }]
        })
    }
  },
  components: {
    'v-header': header,
    'v-filter': filter
  },
  mounted() {
    this.initEchartsLine();
    
  }
}

</script>

