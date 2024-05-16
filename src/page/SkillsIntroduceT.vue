<template>
 
  <div id="app">
    <h1>透体圣光</h1>
    <div>
      <span class="mission">
        召唤圣光照耀敌人，洗涤焚尽邪恶！
      </span>
      <span>
        damage:{{query.damage}}
      </span>
      <span>
        cd:{{query.cd}}
      </span>
    </div>
    
  </div>
</template>
<script setup lang="ts">
import { toRef } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const query = toRef(route,"query")

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