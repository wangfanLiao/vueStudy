<template>
  <h1>选项式api所有数据方法都放在对象里</h1>
  <div>
    姓名：<input v-model="userName"/>{{userName}} <br />
    薪水：<input v-model="salary" type="number"/>{{salary}}<br />
    <button v-on:click="addSalary">add</button>
    <button v-on:click="changeShowInfo">查看个人信息</button>
    <hr />
    <div class="perInfo" v-if="showInfo">
      <p>个人信息列表</p>
      <p>年龄<input v-model="perInfo.age" type="number"/></p>
      <p>性别<input v-model="perInfo.sex" type="radio" value="1">男</input>
      <input type="radio" value="0" v-model="perInfo.sex">女</input></p>
      <p>岗位<select v-model="perInfo.dapartment">
      <option value="dev">开发</option>
      <option value="test">测试</option>
      <option value="maintain">运维</option>
      </select></p>
      <p>技术: <span v-for="skill in perInfo.skills" :key="skill">{{ skill }}</span></p>
      <p>学习技能:<input type="text" v-model="newSkill">
      <input type="submit" v-on:click="addSkill"></p>
      <p>个人信息汇总：{{perInfo}}</p>
    </div>
  </div>
</template>

<script  lang="ts">
  export default{
    data(){
      return {
        userName:'wly',
        salary:188888888,
        perInfo:{
          age:0,
          sex:1,
          dapartment:'',
          skills:['java','vue','python']
        },
        newSkill:'',
        showInfo:true
      }
    },
    methods:{
      addSalary(){
        this.salary += 10000
      },
      addSkill(){
        if(this.newSkill){
          this.perInfo.skills.push(this.newSkill)
        }
      },
      changeShowInfo(){
        this.showInfo = !this.showInfo
      }
    }

  }

</script>

<style scoped>
    .perInfo{
      background-color:bisque;
      widows: 80%;
    } 
    .perInfo span{
      background-color: chartreuse;
      margin-left: 10px;
      border: 1px;
      border-radius: 5px;
    }
</style>
