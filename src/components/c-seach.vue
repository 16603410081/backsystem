<template>
  <section class="c-search">
    <c-icon class="icon-sousuo"></c-icon>
    <input 
    type="text" 
    :placeholder="placehplder" 
    v-model="msg"
    v-on:keydown.enter="sendmsg"
    >
    <c-button @click="sendmsg">
      <slot>
        搜索
      </slot>
    </c-button>
  </section>
</template>

<script lang='ts'>
import { ref } from '@vue/reactivity'
import {defineComponent} from 'vue'
export default defineComponent({
  props:{
    placehplder:{
         type:String,
         default:"请搜索"
    }
  },
   setup(props,ctx){
    const msg=ref('')
    const sendmsg=()=>{
      ctx.emit("get-message", msg);
    }
    return{
      msg,
      sendmsg
    }
   }
})
</script>

<style scoped>
.c-search {
  margin: 10px;
  display: flex;
  align-items: center;
  position: relative;
}

.c-search > input {
  padding: 10px 20px;
  height: 28px;
  width: 50%;
}

.c-search > .icon-sousuo {
  position: absolute;
  top: 5px;
  left: 3px;
}

.c-button {
  margin: 0 10px;
  height: 28px;
}
</style>