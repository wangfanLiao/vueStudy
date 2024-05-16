import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Equipment from './page/Equipment.vue'
import Property from './page/Property.vue'
import Skills from './page/Skills.vue'
import SkillsIntroduceL from "./page/SkillsIntroduceL.vue"
import SkillsIntroduceT from "./page/SkillsIntroduceT.vue"
import SkillsIntroduceS from "./page/SkillsIntroduceS.vue"
import SkillsIntroduceY from "./page/SkillsIntroduceY.vue"

//1.配置路由规则
const routes =[
  {path:"/",redirect:"/property"},
  {path:"/property",component:Property},
  {path:"/equipment",component:Equipment},
  {path:"/skills",component:Skills,name:"skills",
    children:[
      {path:"dargenRoar",component:SkillsIntroduceL},
      {path:"fireDevil",component:SkillsIntroduceT},
      /*params传参比较严格,？表示可以是空*/
      {path:"dargenSoul/:effect/:cd/:damage?",component:SkillsIntroduceS},
      {path:"dargonControl/:effect/:cd/:damage?",component:SkillsIntroduceY,name:"control"}
    ]
    }
]

//2.创建路由
const router = createRouter({
  history :createWebHistory(), //工作模式
  routes
})

//3.加载路由器
const app = createApp(App)
app.use(router)
app.mount("#app")
app.use(ElementPlus)
 

const pinia = createPinia()
app.use(pinia)