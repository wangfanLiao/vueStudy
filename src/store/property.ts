import { defineStore } from 'pinia'

export const propertyStore = defineStore("propertyStore",{
  actions:{
    changeProperty(value:number){
      console.log('get stronging....');
      
      if(value){
        this.property.agility += value
        this.property.intelligence += value
        this.property.strength += value
      }
    }
  },
  getters:{
    getProperty():Object{
      return this.property
    }
  },
  state(){
    return {
      property:{
        strength:100,
        agility:100,
        intelligence:100
      },
      name:'wly'
    }
  }
})