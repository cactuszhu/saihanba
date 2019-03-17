<template>
  <div class="echarts">
    <div :style="{height:'550px',width:'100%',margin:'auto'}" ref="myEchart" class="myEchart"></div>
  </div>
</template>

<script>
  import echarts from "echarts";
  
  import 'echarts/map/js/province/hebei.js' //hebei
  export default {
    props: ["renderData"],
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.initEchartMap();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
  
    methods: {
      initEchartMap() {
        //console.log(this.renderData)
        //这里我们用固定的数据，真正使用时，用父组件传递来的数据替换series即可
        let myChart = echarts.init(this.$refs.myEchart);
        window.onresize = myChart.resize;
  
        var data = [{
            name: '北曼甸',
            value: 18.163
          },
          {
            name: '大唤起',
            value: 13.910
          },
          {
            name: '千层板',
            value: 16.019
          },
          {
            name: '第三乡',
            value: 11.440
          },
          {
            name: '三道河口',
            value: 9.894
          },
          {
            name: '阴河',
            value: 18.050
          },
        ];
        var geoCoordMap = {
          '北曼甸': [117.607594, 42.543645],
          '大唤起': [117.41241, 42.100348],
          '千层板': [117.261208, 42.414387],
          '第三乡': [117.518195, 42.316096],
          '三道河口': [116.98877, 42.422734],
          '阴河': [117.533933, 42.39179],
        }
        var areaData = [{
            "name": "北曼甸",
            "value": [117.607594, 42.543645, 18.163],
  
          },
          {
            "name": "大唤起",
            "value": [117.41241, 42.100348, 13.910],
  
          },
          {
            "name": "千层板",
            "value": [117.261208, 42.414387, 16.019],
  
          },
          {
            "name": "第三乡",
            "value": [117.518195, 42.316096, 11.440],
  
          },
          {
            "name": "三道河口",
            "value": [116.98877, 42.422734, 9.894],
  
          },
          {
            "name": "阴河",
            "value": [117.533933, 42.39179, 18.050],
  
          },
        ];
        var maxSize4Pin = 100,
          minSize4Pin = 20;
        var convertData = function(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };
        myChart.setOption({
          //backgroundColor: "#0b1225",
          title: {
            text: '2017年各林场林地面积',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
              if (typeof(params.value)[2] == "undefined") {
                return params.name + ' : ' + params.value;
              } else {
                return params.name + ' : ' + params.value[2];
              }
            }
          },
  
          visualMap: {
            show: true,
            min: 9,
            max: 20,
            calculable: true,
            inRange: {
              color: ['aqua', 'lime', 'yellow', 'orange']
            },
            textStyle: {
              color: '#12223b'
            }
          },
          geo: {
            map: '河北',
            roam: true,
            center: [117.261208, 42.414387],
            layoutSize: "200%",
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              },
            },
            itemStyle: {
              normal: {
                color: '#3c4247',
                opacity: 0.6,
                borderColor: 'rgba(255, 255, 255, 0.35)'
              },
              emphasis: {
                color: '#2a333d'
              }
            },
          },
          series: [{
              name: "林地面积",
              type: "effectScatter",
              coordinateSystem: "geo",
              label: {
                normal: {
                  "show": true,
                  "position": "left",
                  "formatter": "{b}"
                },
                emphasis: {
                  show: true,
                  position: "left",
                  formatter: "{b}",
                }
              },
              itemStyle: {
                normal: {
                  color: "#46bee9"
                }
              },
              data: convertData(data),
            },
            {
              name: '点',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin',
              symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (20 - 9);
                var b = minSize4Pin - a * 9;
                b = maxSize4Pin - a * 20;
                return a * val[2] + b;
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 9,
                  },
                  "show": true,
                  //"position": "left", 
                  formatter: function(params) {
                    if (typeof(params.value)[2] == "undefined") {
                      return params.value;
                    } else {
                      return params.value[2];
                    }
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#F62157', //标志颜色
                }
              },
              zlevel: 6,
              data: convertData(data),
            },
          ]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .echarts {
    //   background:url('@/assets/bg.jpg') no-repeat;
    //   background-size:100% 100%;
    .myEchart {
      height: calc(100% - 120px);
      width: 100%;
      transition: all 0.5s linear;
    }
  }
</style>