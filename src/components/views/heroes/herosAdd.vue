<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="textname">姓名</label>
            <input  v-model="formData.name" type="text" class="form-control" id="textname" placeholder="姓名">
          </div>
          <div class="form-group">
            <label for="sex" >性别</label>
            <select class="form-control"  v-model="formData.gender">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
          </div>
          <button class="btn btn-success" @click.prevent="add">提交</button>
        </form>
      </div>
</template>

<script>
import axios from 'axios'
export default {
data() {
    return {
        // 绑定文本框
        formData:{
            name:"",
            gender:"男"
        }
    }
},
methods: {
    add(){
        this.axios.post(`http://localhost:3000/heroes`,this.formData)
        .then((res)=>{
            const status=res.status
            if (status==201) {
                this.$router.push({name:'heroes'})
            }else{
                console.log("添加失败");
            }
        }).catch((err)=>{
           console.log(err) 
        })
    }
},
}
</script>

<style>

</style>
