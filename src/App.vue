<template>
  <c-header :pageLis="pageLis">用户管理</c-header>
  <c-content>
    <c-page-header :isShowQuit="isShowQuit">{{routeName}}</c-page-header>

     <router-view/>
  </c-content>
</template>

<style>
@import url("./css/style.css");
@import url("./css/icon/iconfont.css");
</style>

<script lang="ts">
import cHeader from '@/components/c-header.vue'
import cContent from '@/components/c-content.vue'
import cPageHeader from '@/components/c-page-header.vue'
import { pageLis,routeMap } from '@/helper/layout-config'
import {useIsShowQuit,routerNameMapping} from '@/helper/fn'
export default {
components:{
  cHeader,cContent,cPageHeader
},
setup(){
  const routeName=routerNameMapping(routeMap)
  const isShowQuit =useIsShowQuit()
  return {
    pageLis,isShowQuit,routeName
  }
}
}
</script>


