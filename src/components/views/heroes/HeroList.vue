<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <!-- <a class="btn btn-success" href="/herosAdd">添加</a> -->
    <router-link class="btn btn-success" :to="{name:'heroesadd'}">添加</router-link>
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
          <tr v-for="(item) in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <router-link :to="'/heroes/edit/'+ item.id">编辑</router-link>
              &nbsp;&nbsp;
              <!-- <a href="javascript:window.confirm('Are you sure?')">删除</a> -->
              <a href="javascript:" @click="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
     this.axios
        .get("heroes")
        .then(res => {
          console.log(res);
          const { data, status } = res;
          if (status == 200) {
            this.list = data;
          } else {
            console.log("获取失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     del(id) {
    if (!confirm("是否确认删除？")) {
      return false;
    }
    this.axios
      .delete(`heroes/${id}`)
      .then(res => {
        const { status } = res;
        if (status == 200) {
          this.loadData();
        } else {
          console.log("删除失败");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  },
 
};
</script>

<style>
</style>
