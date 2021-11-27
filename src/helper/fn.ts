import { useRouter,useRoute } from 'vue-router'
import {tableBodyType} from './type'
import { computed } from 'vue'
import {tableBody} from './layout-config'
export const usetoPage=()=>{
  const router = useRouter()
  return (path:string)=>router.push(path)
}
export const useQuit=(delta: number = -1)=>{
  const router = useRouter()
  return ()=>router.go(delta)
}
export const useIsShowQuit=(delta: number = -1)=>{
  const route= useRoute()
  return computed(()=>route.name !=='Home')
}
export const routerMaping=(delta: number = -1)=>{
  const route= useRoute()
  return computed(()=>route.name !=='Home')
}
export const routerNameMapping=(routeMap:Map<string,string>)=>{
  const route = useRoute()
  return computed(() => routeMap.get(
    route.name as string
))
}
export const editinfo=()=>{
  const router = useRouter()
  return (id:number)=>router.push(
   {
    //  path:'/usereditor',
    //  query:{
    //    id:id
    //  }，
    // params传参数只能用name
    name: 'UserEditor',
    params:{
      id:id
    }
   }
    ) 
}
export const deleteinfo=(item:any)=>{
  const index=tableBody.findIndex((it)=>{
    return it.id===item.id
 })
 tableBody.splice(index,1)
}
export const buttonState=()=>{
  const route= useRoute()
  // console.log(computed(()=>route.name !=='UserEditor'));
  return computed(()=>route.name !=='UserEditor')
}
export const getId=()=>{
  const route= useRoute()
  console.log(route);
  return Number(route.params.id)
}