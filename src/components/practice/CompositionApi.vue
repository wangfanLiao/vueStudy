<template>
  <div>
    姓名：<input v-model="userName"/>{{userName}} <br />
    薪水：<input v-model="salary" type="number"/>{{salary}}<br />
    <button v-on:click="addSalary">add</button>
  </div>
</template>

<script setup lang="ts">
import SalaryManage from "./SalaryManage"
let {perInfo,salary,userName,salaryref,addSalary} = SalaryManage()

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
