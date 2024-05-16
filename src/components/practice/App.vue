<template>
  <MySalary ref="salary" :salaryInfo="salaeyInfoNew"></MySalary>
  <button @click="showInfo">show</button></br>
  <button @click="addSalaryInfo">add</button></br>
  <div v-html="innerHtml"></div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import MySalary from './components/MySalary.vue'
  let salary =ref()
  let innerHtml =ref("")
  let salaeyInfoNew = reactive({
    userNamen:"wlyn",
    salaryn:15000000000000
  })
  function showInfo(){
    console.log(salary); //ref Object
    console.log(salary.value);//proxy Object
    console.log(innerHtml);
    innerHtml.value = salary.value.userName
  }
  function addSalaryInfo(){
    salaeyInfoNew.salaryn += 1000
  }
</script>

<style scoped>

</style>