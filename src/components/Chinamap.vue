<template>
  <div class="echarts">
    <div :style="{height:'550px',width:'100%',margin:'auto'}" ref="myEchart" class="myEchart"></div>
  </div>
</template>
<script>
  import echarts from "echarts";
  import 'echarts/map/js/china.js' // 引入中国地图数据
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
        myChart.setOption({ 
          //backgroundColor: "#0b1225",
          title: {
                text: '旅客来源图',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
          tooltip : {
                trigger: 'item',
                
            
            },
          dataRange: {
            show: true,
            min: 0,
            max: 100,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
          },
          visualMap : {
                show : true,
                min : 0,
                max : 255,
                calculable : true,
                inRange : {
                    color : ['aqua', 'lime', 'yellow', 'orange', '#ff3333']
                },
                textStyle : {
                    color : '#12223b'
                }
            }, 
          geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            roam: true,
            layoutCenter : ['50%', '50%'],
			layoutSize : "130%",
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
            }
          },
          series: [
              {
                    "type": "lines", 
                    "zlevel": 2, 
                    "effect": {
                        "show": true, 
                        "period": 4, 
                        "trailLength": 0.02, 
                        "symbol": "arrow", 
                        "symbolSize": 5
                    }, 
                    "lineStyle": {
                        "normal": {
                            "width": 1, 
                            "opacity": 0.6, 
                            "curveness": 0.2
                        }
                    }, 
                    "tooltip": {
                        "trigger": "item"
                    }, 
                    "data": [
                         {
                            "fromName": "北京", 
                            "toName": "塞罕坝", 
                            "value": 88, 
                            "coords": [
                                
                                [
                                    "116.23", 
                                    "39.54"
                                ],
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                
                            ]
                        }, 
                         {
                            "fromName": "内蒙古", 
                            "toName": "塞罕坝", 
                            "value": 57, 
                            "coords": [
                                
                                [
                                    "111.65", 
                                "40.82",
                                ],
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                
                            ]
                        },
                        {
                            "fromName": "辽宁", 
                            "toName": "塞罕坝", 
                            "value": 31, 
                            "coords": [
                                
                                [
                                   "124.73", 
                                   "41.50", 
                                ],
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                
                            ]
                        }, 
                        {
                            "fromName": "天津", 
                            "toName": "塞罕坝", 
                            "value": 67, 
                            "coords": [
                                
                                [
                                    "117.23", 
                                    "31.9",
                                ],
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                
                            ]
                        }, 
                        {
                            "fromName": "江苏", 
                            "toName": "塞罕坝", 
                            "value": 19, 
                            "coords": [
                                
                                [
                                    "119.68", 
                                    "33.199"
                                ],
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                
                            ]
                        }, 
                        {
                            "fromName": "安徽", 
                             "toName": "塞罕坝",
                            "value": 17, 
                            "coords": [
                                
                                
                                [
                                    "117.229", 
                                    "31.917"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "上海", 
                            "toName": "塞罕坝",
                            "value": 25, 
                            "coords": [
                                
                                [
                                    "121.465", 
                                    "31.289"
                                ], 
                                
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "湖北", 
                            "toName": "塞罕坝", 
                            "value": 31, 
                            "coords": [
                                
                                 [
                                    "114.39", 
                                    "30.663"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "福建", 
                            "toName": "塞罕坝", 
                            "value": 12, 
                            "coords": [
                                
                                [
                                    "119.454", 
                                    "25.922"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "浙江", 
                            "toName": "塞罕坝", 
                            "value": 19, 
                            "coords": [  
                               
                                [
                                    "119.531", 
                                    "29.877"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "陕西", 
                            "toName": "塞罕坝", 
                            "value": 18, 
                            "coords": [
                                [
                                    "109.116", 
                                    "34.2"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "河南", 
                            "toName": "塞罕坝", 
                            "value": 15, 
                            "coords": [
                            
                                [
                                    "113.467", 
                                    "34.623"
                                ], [
                                     
                                    117.14,
                                    42.24,
                                ],

                            ]
                        }, 
                        {
                            "fromName": "山东", 
                            "toName": "塞罕坝", 
                            "value": 12, 
                            "coords": [
                                
                                [
                                    "116.972", 
                                    "36.737"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "广东", 
                            "toName": "塞罕坝", 
                            "value": 12, 
                            "coords": [
                                
                                [
                                    "113.511", 
                                    "23.22"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "四川", 
                            "toName": "塞罕坝", 
                            "value": 10, 
                            "coords": [
                                
                                [
                                    "103.953", 
                                    "30.762"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "江西", 
                            "toName": "塞罕坝", 
                            "value": 9, 
                            "coords": [
                                
                                [
                                    "116.005", 
                                    "28.663"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "重庆", 
                            "toName": "塞罕坝", 
                            "value": 8, 
                            "coords": [
                                
                                [
                                    "106.438", 
                                    "29.581"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "贵州",  
                            "toName": "塞罕坝",
                            "value": 4, 
                            "coords": [
                                [
                                    "106.71", 
                                    "26.564"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "山西", 
                             "toName": "塞罕坝",
                            "value": 4, 
                            "coords": [
                              
                                [
                                    "112.593", 
                                    "37.867"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "湖南", 
                              "toName": "塞罕坝",
                            "value": 4, 
                            "coords": [
                                [
                                    "113.082", 
                                    "28.257"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "吉林", 
                              "toName": "塞罕坝",
                            "value": 39, 
                            "coords": [
                                 [
                                    "125.815", 
                                    "44.258"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                        {
                            "fromName": "广西", 
                              "toName": "塞罕坝",
                            "value": 2, 
                            "coords": [
                                [
                                    "107.88", 
                                    "22.863"
                                ], 
                                [
                                     
                                    117.14,
                                    42.24,
                                ],
                            ]
                        }, 
                    ]
              },
              {     
                    "name": "来源省份",
                    "type": "effectScatter", 
                    "coordinateSystem": "geo", 
                    "zlevel": 2, 
                    "rippleEffect": {
                        "period": 4, 
                        "brushType": "stroke", 
                        "scale": 4
                    }, 
                    "tooltip": {
                        "trigger": "item"
                    }, 
                    "label": {
                        "normal": {
                            "show": true, 
                            "position": "left", 
                            "offset": [
                                -5, 
                                5
                            ], 
                            "formatter": "{b}"
                        }, 
                        "emphasis": {
                            "show": true
                        }
                    }, 
                    "hoverAnimation": true,
                    "symbol": "circle", 
                    "symbolSize": 5, 
                    "itemStyle": {
                        "normal": {
                            "show": false, 
                            "color": "#f00"
                        }
                    }, 
                    "data": [
                         
                        {
                            "name": "北京", 
                            "value": [
                                "116.23", 
                                "39.45",
                                88
                            ]
                        }, 
                        {
                            "name": "内蒙古", 
                            "value": [
                                "111.65", 
                                "40.82",
                                57
                            ]
                        },
                         {
                            "name": "天津", 
                            "value": [
                                "117.23", 
                                "31.9",
                                67
                            ]
                        }, 
                        {
                            "name": "辽宁", 
                            "value": [
                                  "124.73", 
                                   "41.50",
                                31
                            ]
                        }, 
                        {
                            "name": "江苏", 
                            "value": [
                               "119.68", 
                                    "33.199",
                                19
                            ]
                        }, 
                        {
                            "name": "安徽", 
                            "value": [
                                "117.229", 
                                "31.917", 
                                17
                            ]
                        }, 
                        {
                            "name": "上海", 
                            "value": [
                                "121.465", 
                                "31.289", 
                                25
                            ]
                        }, 
                        {
                            "name": "湖北", 
                            "value": [
                                "114.39", 
                                "30.663", 
                                31
                            ]
                        }, 
                        {
                            "name": "福建", 
                            "value": [
                                "119.454", 
                                "25.922", 
                                22
                            ]
                        }, 
                        {
                            "name": "浙江", 
                            "value": [
                                "119.531", 
                                "29.877", 
                                19
                            ]
                        }, 
                        {
                            "name": "陕西", 
                            "value": [
                                "109.116", 
                                "34.2", 
                                18
                            ]
                        }, 
                        {
                            "name": "河南", 
                            "value": [
                                "113.467", 
                                "34.623", 
                                15
                            ]
                        }, 
                        {
                            "name": "山东", 
                            "value": [
                                "116.972", 
                                "36.737", 
                                12
                            ]
                        }, 
                        {
                            "name": "广东", 
                            "value": [
                                "113.511", 
                                "23.22", 
                                12
                            ]
                        }, 
                        {
                            "name": "四川", 
                            "value": [
                                "103.953", 
                                "30.762", 
                                10
                            ]
                        }, 
                        {
                            "name": "江西", 
                            "value": [
                                "116.005", 
                                "28.663", 
                                9
                            ]
                        }, 
                        {
                            "name": "重庆", 
                            "value": [
                                "106.438", 
                                "29.581", 
                                8
                            ]
                        }, 
                        {
                            "name": "贵州", 
                            "value": [
                                "106.71", 
                                "26.564", 
                                4
                            ]
                        }, 
                        {
                            "name": "山西", 
                            "value": [
                                "112.593", 
                                "37.867", 
                                4
                            ]
                        }, 
                        {
                            "name": "湖南", 
                            "value": [
                                "113.082", 
                                "28.257", 
                                4
                            ]
                        }, 
                        {
                            "name": "吉林", 
                            "value": [
                                "125.815", 
                                "44.258", 
                                39
                            
                            ]
                        }, 
                        {
                            "name": "广西", 
                            "value": [
                                "107.88", 
                                "22.863", 
                                2
                            ]
                        }, 
                    ]
              },
              {
                "name": "目标地区",
                "type": "scatter", 
                "coordinateSystem": "geo", 
                "zlevel": 2, 
                "tooltip": {
                    "trigger": "item"
                }, 
                "label": {
                    "normal": {
                        "show": true, 
                        "position": "right", 
                        "color": "#00ffff", 
                        "formatter": "{b}", 
                        "textStyle": {
                            "color": "#00ffff"
                        }
                    }, 
                    "emphasis": {
                        "show": true
                    }
                }, 
                "symbol": "circle", 
                "symbolSize": 20, 
                "itemStyle": {
                    "normal": {
                        "show": true, 
                        "color": "#EE0000"
                    }
                }, 
                "data": [
                    {
                        "name": "塞罕坝", 
                        "value": [
                             
                                    117.14,
                                    42.24,
                        ]
                    }
                ]
            }
          ]
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.echarts{
//   background:url('@/assets/bg.jpg') no-repeat;
//   background-size:100% 100%;

  .myEchart{
  height:calc(100% - 120px);
    width:100%;
    transition:all 0.5s linear;
  }
   
}
  
  
</style>