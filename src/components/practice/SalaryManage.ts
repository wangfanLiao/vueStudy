import { ref, reactive, toRef, toRefs } from 'vue'

/* 简单绑定
export default function(){
  let userName = ref('wly')
  let salary = ref(15861568468464)
  function addSalary(){
    salary.value += 1000;
    console.log(salary);
  }
  return {
    userName,salary,addSalary
  }
}
*/
//引用类型绑定
export default function(){
  let perInfo = reactive({userName:'wly', salary:1585854145})
  //let salary = perInfo.salary  对象无双向绑定
  let salaryref = toRef(perInfo,'salary')  //对象有双向绑定
  let {userName, salary} = toRefs(perInfo) //或者解构赋值
  function addSalary(){
    salaryref.value += 1000
    console.log(salaryref);
    
  } 
  return {
    perInfo,salary,salaryref,userName,addSalary
  } 
}