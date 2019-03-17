<!-- 柱状图 -->
<style lang="scss" >
.columnChart{
   height:1000px;
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
<div class="columnChart">
  <div class="main" ref="myEchart"></div>
</div>

</template>

<script>
import echarts from 'echarts'
import wordCloud from 'echarts-wordcloud'

export default {
  data() {
    return {
      legendArr: [],
      color: this.$store.state.color,
      myChart: {},
      name: '词云'
    }
  },
  methods: {
   
     initEchartsColumn() {
       let myChart = echarts.init(this.$refs.myEchart);
       window.onresize = myChart.resize;
       myChart.setOption({ 
          title: {
                text: '塞罕坝旅游关键词',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
          tooltip : {
                trigger: 'item',
            },
             legend: {
              show: false,
              
            },
            toolbox: {
              show: true
            },
     
      series: [
        {
        type: 'wordCloud',
        gridSize: 2,
        roam: true,
        sizeRange: [12, 50],
        //size: ['80%', '80%'],
        rotationRange: [-90, 90],
        shape:'smooth',
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255)
                        ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {
                name: '塞罕坝国家森林公园',
                value: 407,
            }, {
                name: '摄影',
                value: 184
            }, {
                name: '骑马',
                value: 101
            }, {
                name: '草原越野车',
                value: 47
            }, {
                name: '烤羊腿',
                value: 32
            }, {
                name: '蘑菇',
                value: 30
            }, {
                name: '射箭',
                value: 21
            }, {
                name: '手把羊肉',
                value: 18
            }, {
                name: '北山大扁杏',
                value: 15
            }, {
                name: '乌兰布统',
                value: 21
            }, {
                name: '篝火晚会',
                value: 847
            }, {
                name: '美林山庄',
                value: 45
            }, {
                name: '漂流',
                value: 85
            }, {
                name: '风电',
                value: 55
            }, {
                name: '还珠格格',
                value: 23
            }, {
                name: '自驾游',
                value: 366
            }, {
                name: '御道口',
                value: 3
            }, {
                name: '敖包',
                value: 28
            }, {
                name: '京北',
                value: 27
            }, {
                name: '白桦林 ',
                value: 18
            }, {
                name: '油菜花',
                value: 3
            }]
    }
      ]
        })
    }
  },
 
  mounted() {
     this.initEchartsColumn();
  }
}

</script>
