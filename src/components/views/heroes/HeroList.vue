<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <a class="btn btn-success" href="add.html">添加</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名：</th>
            <th>性别：</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items,index) in list" :key="items.id" >
            <td>{{index+1}}</td>
            <td>{{items.name}}</td>
            <td>{{items.gender}}</td>
            <td>
              <a href="edit.html">修改</a>
              &nbsp;&nbsp;
              <!-- <a href="javascript:window.confirm('Are you sure?')">删除</a> -->
             <a href="#" @click="del(items.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios';
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData(){
      axios
      .get(' http://localhost:3000/heroes')
      .then((res)=>{
        console.log(res)
        const {data,status}=res;
        if (status==200) {
          this.list=data
        }else{
          console.log("获取失败")
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  del(id){
    if (!comfirm('是否确认删除？')) {
      return;
    }
    axios.delete()
  }
};
</script>

<style>
</style>
