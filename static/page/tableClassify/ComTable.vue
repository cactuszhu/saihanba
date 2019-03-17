<template>
<div>
  <div class="operation">
    <el-button type="primary" @click="addData">新增</el-button><el-button type="primary" @click="editData">修改</el-button>
  </div>
    <div class="leave-table">
            <table width="100%" cellpadding="0" cellspacing="0">
                <thead valign="bottom">
                    <tr>
                        <th width="100px">项目</th>
                        <th width="150px">1962年</th>
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
    
    <div class="block">
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="totalItems">
     </el-pagination>
     </div>
  
  <!-- 新增和修改 -->
  <addTable :addFlag="addFlag" :editTableData="editTableData" @addFather="addFather"></addTable>
  </div>
  </template>

  <style lang="scss" scoped>
  .operation{
    height:40px;
    margin-bottom:20px;
    button{
      float:left;
    }
  }
  </style>
  

<script>
import { mapGetters, mapActions } from "vuex";
import addTable from '@/components/addTable';
import axios from 'axios'

export default {
  components:{addTable},
  data(){
    return {
      currentPage:1,
      pageSize:4,
      totalItems:1,
      comTable:[],
      comData:[],
      addFlag:{flag:false},
      multipleSelection: [],
      editTableData:'',
      comInp:'',
      dataList:[],
    }
  },
  computed: mapGetters({
    tableData: "allTableData",
  }),
  watch:{
    tableData(val){
      this.comTable=val;
      this.comData=val;
      this.totalItems=val.length;
    },
    comInp(val){
      console.log('comInp值为',val);   
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    
    //前端分页
    handleSizeChange(val){
      this.pageSize = val;
      this.handleCurrentChange(this.currentPage);
    },
    handleCurrentChange(val){
      this.currentPage = val;
      this.currentChangePage(this.comTable)
    },
    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.comData = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.comData.push(list[from]);
        }
      }
    },
     getData(){
            var that = this;
            var ajaxUrl = "@/data/coverage.json";
            axios
              .get('@/data/coverage.json')
              .then(function(res) {
                  if(data.status == 1){
                    this.datalist = res.data;
                  }
              })
              .catch(function(error) {
                  console.log(error);
              });
        },
    //新增和修改
    addData(){
      this.addFlag.flag=true;
    },
    handleSelectionChange(val){
      this.multipleSelection=val;
    },
    editData(){
      if(this.multipleSelection.length!==1){
        this.$message.warning('修改请选择一条数据');
        return;
      };
      this.addFlag.flag=true;
      this.editTableData=this.multipleSelection;
    },
    //新增和修改传回值
    addFather(data){
      console.log(data)
      this.comData=this.comData.push(data);
      this.totalItems=this.comData.length;
      this.currentPage=1;
      this.pageSize=4;
    }
  }
};
</script>
