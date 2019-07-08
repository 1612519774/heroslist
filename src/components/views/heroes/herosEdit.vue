<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="textname">姓名</label>
        <input
          v-model="formData.name"
          type="text"
          class="form-control"
          id="textname"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <button class="btn btn-success" @click.prevent="update">修改</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      // 绑定文本框
      formData: {
        name: "",
        gender: "男"
      }
    };
  },
  mounted() {
    this.loadDataById();
  },
  methods: {
    loadDataById() {
      axios
        .get(`http://localhost:3000/heroes/${this.id}`)
        .then((res) => {
          const { data, status } = res;
          if (status == 200) {
            this.formData = data;
          } else {
            console.log("添加失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    update() {
      // 发送请求
      axios
        .put(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then(response => {
          const status = response.status;
          if (status === 200) {
            // 修改成功
            // 跳转回列表组件
            this.$router.push({ name: "heroes" });
          } else {
            // 修改失败
            alert("修改失败");
          }
        });
    }
  }
};
</script>

<style>
</style>
