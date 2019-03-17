<template>

 <div class="container">
    <div class="dataintable">
            <table width="100%" cellpadding="0" cellspacing="0">
                <thead valign="bottom">
                    <tr>
                        <th>项目</th>
                        <th>1962年</th>
                        <th>1982年</th>
                        <th>1989年</th>
                        <th>2002年</th>
                        <th>2017年</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in dataList">
                        <td>{{item.name}}</td>
                        <td>{{item.data_1962}}</td>
                        <td>{{item.data_1982}}</td>
                        <td>{{item.data_1989}}</td>
                        <td>{{item.data_2002}}</td>
                        <td>{{item.data_2017}}</td>
                    </tr>
                </tbody>
            </table>
    </div>
    <div class="button-container">
    <button v-on:click="showToggle">新增</button>
    </div>
    <div v-show="isShow" class="adddata">
    <div class="title1">新增数据</div>
    <button type="button" class="close" title="close it" v-on:click="showToggle">
      &times;
	  </button>
    <select>
  <option value ="1">森林覆盖率</option>
  <option value ="2">森林总面积</option>
  <option value="3">林分面积</option>
  <option value="4">人工林面积</option>
 </select><br/>
     <span>年份：</span> <input type="text" name="year" /><br/>
     <span>数据 ：</span><input type="text" name="num" /><br/>
      <input class="sub" type="submit" value="提交" />
    </div>
</div>
  </template>

<style lang="scss" scoped>
.button-container{
  text-align:right;
  button{
  width:100px;
  margin:10px;
  height:30px;
  color:white;
  background:#666666;
  border:none;
  border-radius:5px;
  font-size:17px;
  }
}
 .adddata{
    //display:none;
    text-align:left;
    border:1px solid #ccc;
    width:400px;
    height:250px;
    position:absolute;
    top:260px;
    left:550px;
    z-index:10;
    background:#fff;
   .title1{
     text-align:center;
     margin:20px 0;
   }
   .close{
     position:absolute;
     left:350px;
     top:10px;
     border:none;
     font-size:30px;
   }
   select {
     width:100px;
     height:30px;
     text-align:left;
     margin-left:30px;
   }
   span {
     margin-left:30px;
   }
   input {
     margin-left:20px;
     margin-top:15px;
   }
   .sub{
    width:100px;
    margin:10px;
    height:30px;
    color:white;
    background:#666666;
    border:none;
    border-radius:5px;
    font-size:17px;
    position:relative;
    left:250px;

   }

 }
 table {
  margin-top:15px;
  border-collapse:collapse;
  border:1px solid #aaa;
}
table th {
  vertical-align:baseline;
  padding:5px 15px 5px 6px;
  background-color:#3F3F3F;
  border:1px solid #3F3F3F;
  text-align:center;
  color:#fff;
}
table td {
  vertical-align:text-top;
  padding:6px 15px 6px 6px;
  border:1px solid #aaa;
}
table tr:nth-child(odd) {
  background-color:#F5F5F5;
}
table tr:nth-child(even) {
  background-color:#fff;
}
</style>
  

<script>


export default {
  created() {
    this.getData();
   console.log(this.dataList.data)
  },

  data(){
    return {
      dataList:{},
      isShow:false,
      tableName:1,
    }
  },
  
  watch:{
   
  },
  mounted() {
    
   
  },
  methods:{
     getData(){
            var that = this;
            this.$ajax({
                type: 'get',
                url: '/static/data/coverage.json',
                data: {
                   tableName: this.tableName,
                },
                success: function(response){
                    if(response.status == 1){
                       that.dataList=response.data;
                       console.log(that.dataList);
                        }
                    }
            })
        },
     showToggle:function(){
				this.isShow = !this.isShow;
			}

  }
  
};
</script>
