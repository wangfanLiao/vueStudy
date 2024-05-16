<template>
  <div id="app">

    <div class="mission">
      <p>
        <h1>力量</h1></br>
        <h1>敏捷</h1></br>
        <h1>智力</h1></br>
      </p>
    </div>
    {{ propertyRef.property.value }}
  </div>
  <div>
      <input ref="input" type="Number"></input>
      <button @click="addProperty">增加属性</button>
    </div>
</template>
<script setup lang="ts">
  import { ref,toRefs } from 'vue'
  import { propertyStore } from '../store/property' 
  import { storeToRefs } from 'pinia'
  const input = ref()
  const property = propertyStore()
  
  // const propertyRef = toRefs(property) //暴露太多pinia方法推荐使用StoreToRef
  // console.log(propertyRef);  

  const propertyRef = storeToRefs(property)

  

  function addProperty(){
    console.log(input.value.value);
    property.changeProperty(input.value.value)
    property.property.intelligence += input.value.value
    console.log(property.name);
    console.log(property.property);
    property.$patch({       //改变多个数据 
      name:'wlyStrong',
      property:{strength:500,agility:5000,intelligence:5000}
    })
    console.log(property.property);
    console.log(`property:${property.property},${property.name}`);
  }
  
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