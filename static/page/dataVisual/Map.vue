<template>
  <div class="map">
    <div id="container"></div>
    
  </div>
</template>

<style lang="scss" scoped>
.map{
  width:100%;
  height:100%;
  #container{
    width:100%;
    height:100%;
    position:static;
  }
}
</style>

<script>
export default {
  mounted() {
    var map = new AMap.Map("container", {
      resizeEnable: true
    });
    
  }
};
</script>
