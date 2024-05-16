<template>
 
  <div id="app">
    <h1>龙魂意志</h1>
    <div>
      <span class="mission">
        变成远古霸主
      </span>
      <span>
        power:{{params.effect}}
      </span>
      <span>
        damage:{{params.damage}}
      </span>
      <span>
        cd:{{params.cd}}
      </span>
    </div>
    
  </div>
</template>
<script setup lang="ts">
import { toRef } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const params = toRef(route,"params")

</script>

<style scoped>
  .mission{
    background-color: darkorange;
    widows: 10%;
    height: 90%;
    border: 1cap;
    border-radius: 10px;
  }
  span{
    background-color: darkorange;
    border: 1cap;
    border-radius: 10px;
  }

</style>