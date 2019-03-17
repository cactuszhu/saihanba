<template>
  <div style="height:100%;width:100%;text-align:left;">
    <div ref="basicMapbox" style='width: 400px; height: 300px;'></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl'
export default {
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      mapboxgl.accessToken = 'pk.eyJ1Ijoiemh1cWlhbnl1IiwiYSI6ImNqdGF5NmtiMTBnMHgzeXA3bDByamUxYXoifQ.d1hpYBRUEzWIW15ngQbJ4w';
      var map = new mapboxgl.Map({
      container: this.$refs.basicMapbox,
      style: 'mapbox://styles/mapbox/streets-v9'
      });
      console.log(map)
    }
  },
  computed: {
    mapSize () {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      }
      return styleObj
    }
  }
}
</script>
<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
</style>