<template>
  <div id="app">
    <h1>Hello VUE ROUTER</h1>
    <p>
      <!--路由链接-->
      <RouterLink to="/property">属性</RouterLink>  <!--字符串跳转-->
      <RouterLink :to="{path:'equipment'}">装备</RouterLink>  <!--对象跳转-->
      <RouterLink replace :to="{name:'skills'}">技能</RouterLink>  <!--具名跳转;添加repalce不可以用浏览器后退按钮，默认是push可以回退--> 
    </p>
    <div class="mission">
      <RouterView/> <!--路由出口，路由加载位置-->
    </div>
  </div>

  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>

  
</template>
<script setup lang="ts">

</script>

<style scoped>
  a{
    margin: 10px;
  }
  .mission{
    background-color: aquamarine;
    widows: 10%;
    height: 400px;
    border: 1cap;
    border-radius: 10px;
  }

</style>