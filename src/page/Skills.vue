<template>
  <h6>路由传递参数,两种传参方式query和params</h6>
  <ul class="skills">
    <li><RouterLink to="/skills/dargenRoar?damage=99999&cd=10s">龙吼</RouterLink></li>
    <li><RouterLink :to="{
      path:'/skills/fireDevil',
      query:{
        damage:'999999*99999999',
        cd:'10s'
      }}">透体圣光</RouterLink></li>
    <!--params传参比较严格-->
    <li><RouterLink to="/skills/dargenSoul/getdargenSoul/60s">龙魂意志</RouterLink></li>
    <!--params对象传参需要用name-->
    <li><RouterLink :to="{
      name:'control',
      params:{
        effect:'fsfs',
        cd:'10s',
        damage:9999
      }

    }">意志屈服</RouterLink></li>
  </ul>
  <div>
      <span>
        <RouterView></RouterView>
      </span>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>
  .skills{
    background-color: aquamarine;
    widows: 10%;
    height: 400px;
    border: 1cap;
    border-radius: 10px;
  }

</style>