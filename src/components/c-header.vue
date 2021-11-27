<template>
   <header class="c-header">
     <h1>
       <slot>标题</slot>
     </h1>
     <nav>
       <ul>
         <li v-for="pageLi of pageLis" :key="pageLi.id">
           <c-button @click="toPage(pageLi.path)">{{pageLi.name}}</c-button>
         </li>
       </ul>
     </nav>
    
   </header>
  
</template>

<script lang='ts'>
 import { PropType } from 'vue'
 import {PageLierType} from '@/helper/type'
 import { usetoPage } from '@/helper/fn'

export default {
props:{
  pageLis:{
    type : Array as PropType<PageLierType>,
    default:()=>[]
   }
  },
  setup(){
  const toPage=usetoPage()
    return {
       toPage
      }
    }
}
</script>

<style scoped>
.c-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  color: aliceblue;
  background-color: #00818a;
  box-shadow: 0 0 0.5em #475f77;
  padding: 0.5em 1em;
}
.c-header > h1 {
  font-size: 1.5rem;
  font-weight: 500;
}
.c-header > nav > ul {
  display: flex;
}
.c-header > nav > ul > * + * {
  margin-left: 15px;
}
</style>