
<style lang="scss" >
.lineChart{
   height:600px;
  // background:url('../../assets/bg.jpg') no-repeat;
  // background-size:100% 100%;
  color:white;
  .main{
    width:100%;
    height:calc(100% - 100px);
    margin-top:15px;
    }
    
}
 
</style>

<template>
<div class="lineChart">
  <div class="main" ref="myEchart"></div>
</div>

</template>

<script>
import echarts from 'echarts'
export default {
  
  data() {
    return {
      
    }
  },
  methods: {
    
      initEchartsLine() {
       let myChart = echarts.init(this.$refs.myEchart);
       window.onresize = myChart.resize;
       myChart.setOption({ 
          title: {
                text: '森林覆盖率变化图',
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
              show: true
            },
       calculable: true,
       xAxis: [{
        name: '年份',
        type: 'category',
        axisLine: {
          show: true
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
        name: '百分比',
        type: 'value',
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.69)'
        }
      }],
      series: [{
        //name: '标签1',
        type: 'line',
        //stack: '总量',
        data: [11.4, 48.4, 56.7, 73.4, 80.0]
      },]
        })
    }
  },
 
  mounted() {
     this.initEchartsLine();
  }
}

</script>
