<template>
  <h1>标签绑定</h1>
  <div>
    姓名：<input ref="name" abc="sadafsfaf"/> <br />
    薪水：<input type="number"/><br />
    <button v-on:click="showRef">add</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  let name = ref()
  function showRef(){
    console.log(name)
    console.log(name.value) //value值绑定的是input标签，dom对象
    console.log(name.value.getAttribute("abc")); //对dom对象操作
    console.log(name.value.value) //标签的值
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
