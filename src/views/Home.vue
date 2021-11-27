<template>
  <div class="home">
    <c-search @get-message='getmessage'></c-search>
    <c-button class="cButton" @click="usetoPageadd('/useraddition')">添加用户</c-button>
    <c-table :tableHeader="thHeader" :tableBody='tableBodyinfo' ></c-table>
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue';
import cTable from '@/components/c-table.vue'
import cSearch from '@/components/c-seach.vue'
import {thHeader,tableBody} from '@/helper/layout-config'
import {usetoPage} from '@/helper/fn'
export default defineComponent({
  components:{
  cTable,cSearch
},
setup(){
  let tableBodyinfo=ref(tableBody)
  const getmessage=(msg:any)=>{
   tableBodyinfo.value=tableBody.filter((item)=>{
         return item.name.includes(msg.value)
   })
  }
  const usetoPageadd=usetoPage()

  return {
    thHeader,
    tableBodyinfo,
    getmessage,
    usetoPageadd
  }
}
});

</script>
<style scoped>
.cButton{
margin-left: 10px;
}
</style>
