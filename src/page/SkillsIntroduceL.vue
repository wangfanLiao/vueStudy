<template>
  <div id="app">
    <h1>龙吼</h1>
    <div>
      <span class="mission">
        发出远古霸主的吼叫，撕碎敌人，令敌人恐惧
      </span>
      <span>damage:{{query.damage}}</span></hr>
      <span>cd:{{query.cd}}</span>
    </div>
    
  </div>

</template>
<script setup lang="ts">
import { toRef } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
let query = toRef(route,"query")

</script>

<style scoped>
  .mission{
    background-color: gold;
    widows: 10%;
    height: 90%;
    border: 1cap;
    border-radius: 10px;
  }
  span{
    background-color: gold;
    border: 1cap;
    border-radius: 10px;
  }

</style>