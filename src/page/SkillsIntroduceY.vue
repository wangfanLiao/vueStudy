<template>
  <div id="app">
    <h1>意志屈服</h1>
    <div>
      <span class="mission">
        远古霸主屈服于你的意志
      </span>
      <span>damage:{{params.damage}}</span></hr>
      <span>cd:{{params.cd}}</span>
    </div>
    
  </div>

</template>
<script setup lang="ts">
import { toRef } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
let params = toRef(route,"params")

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