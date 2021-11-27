<template>
  <table class="c-table">
    <thead>
    <tr>
      <th v-for="msg of tableHeader" :key="msg">{{msg}}</th>
    </tr>
    </thead>
  <tbody>
    <tr v-for="bodyitem of tableBody" :key='bodyitem.id'> 
      <td>{{bodyitem.name}}</td>
      <td>{{bodyitem.age}}</td>
      <td>{{bodyitem.sex}}</td>
      <td class="deleteinfo ">
        <c-button @click="deleteinfo(bodyitem)">
          <c-icon class="icon-lajitong"> </c-icon>
        </c-button>
      </td>
      <td class="edit "> 
        <c-button @click="editinfochange(bodyitem.id)">
          <c-icon class="icon-bianji"></c-icon>
        </c-button>
        </td>
    </tr>
  </tbody>
  </table>

</template>

<script lang="ts">
import {PropType} from 'vue'
import { tableHeaderType,tableBodyType } from '@/helper/type'
import {editinfo,deleteinfo}from '@/helper/fn'
export default {
     props:{
       tableHeader:{
         type:Set as PropType<tableHeaderType>,
         default:()=>new Set()
       },
       tableBody:{
         type:Array as PropType<tableBodyType>,
         default:()=>[]
       }
     },
     setup(){
       const  editinfochange=editinfo()
       return {
         editinfochange,deleteinfo
       }
     }
}
</script>

<style scoped>
.c-table {
  width: 100%;
}
.c-table tr {
  height: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  justify-items: center;
  align-items: center;
  border-bottom: 2px solid #d0dfe6;
}

.c-table th {
  font-size: 1.2rem;
  font-weight: 500;
}
.edit{
  background-color: green;
}
.delet{
  background-color: yellow;
}
</style>