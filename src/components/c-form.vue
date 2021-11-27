<template>
    <main class="c-form">
    <section>
      <label for="name">姓名:</label>
      <input
        type="text"
        id="name"
        placeholder="请输入姓名"
        v-model="user.name"
      />
    </section>

    <section>
      <label for="gender">性别:</label>
      <span>
        <label for="sir">男</label>
        <input
          type="radio"
          name="gender"
          id="sir"
          value="男"
          checked
          v-model="user.gender"
        />
      </span>
      <span>
        <label for="lady">女</label>
        <input
          type="radio"
          name="gender"
          id="lady"
          value="女"
          v-model="user.gender"
        />
      </span>
    </section>
    <section>
      <label for="age">年龄:</label>
      <input type="number" id="age" v-model="user.age" />
    </section>
    <section>
      <c-button @click="userHandler">{{ buttonMessage }}</c-button>
    </section>
  </main>
</template>

<script>
import {reactive,ref} from 'vue'
import {buttonState,useQuit,getId} from '@/helper/fn'
import {tableBody} from '@/helper/layout-config'
export default {

setup(){
    
    const user = reactive({
      name: "",
      gender: "男",
      age: 0,
    });
    const quit=useQuit()
    const buttonMessage=buttonState()?'用户编辑':'新增用户'
    const id=getId()
    const userHandler=ref(()=>{
      if(!buttonMessage){
      const {length:newId}=tableBody
      tableBody.push({
        name:user.name,
        id:newId,
        age:user.age,
        sex:user.gender
      })
      }else{
        console.log(1111,id);
        console.log(tableBody[id-1]);
        tableBody[id-1]={
        age:user.age,
        sex:user.gender,
         name:user.name,
        }
      }
    quit()
    })
    const Body = tableBody.find((item)=>{
          return item.id=== id
        })
        user.name=Body.name
        user.age=Body.age
        user.sex=Body.age
    return{
      user,buttonMessage,userHandler
    }
},

}
</script>

<style>
.c-form {
  padding: 20px;
  border: 2px solid #ebebeb;
}
section {
  margin-top: 10px;
}

section > label,
section > span {
  margin-right: 10px;
}

section > span > label {
  margin-right: 5px;
}
</style>