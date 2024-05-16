<template>
  <input v-model="salaryInfo.userNamen">{{salaryInfo.userNamen}}</input>
  <input v-model="salaryInfo.salaryn">{{salaryInfo.salaryn}}</input>
  <button @click="showSalary">clickShow</button>


</template>

<!-- <script  lang="ts"> //组件命名，不写的话默认文件名
  export default {
    name:"Salary"
  }
</script> -->

<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
  } from 'vue'
import type { SalaryInfo } from "../types/MySalary"

  let userName =ref('wly')
  let salary =ref(1500000)
  function showSalary(){
    salary.value += 100000
    console.log(salary);
  }
  defineExpose({
      userName,salary
    })

  defineProps<{salaryInfo:SalaryInfo}>()

  console.log('set up');//组建的创建阶段
  //生命周期钩子
  onBeforeMount(()=>
    console.log('挂载之前')
  )
  onMounted(()=>
    console.log('挂载完毕')
  )
  onBeforeUpdate(()=>
  console.log('更新之前')
  )
  onUpdated(()=>
  console.log('更新完毕')
  )
  onBeforeUnmount(()=> 
  console.log("卸载前")
  )
  onUnmounted(()=>
  console.log("卸载完毕")
  )
  




  
</script>

<style scoped>

</style>