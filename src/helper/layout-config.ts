import { PageLierType } from '@/helper/type'
import { reactive } from 'vue'
export const pageLis:PageLierType=[{
  id:0,
  name:'首页',
  path:'/'
},{
  id:1,
  name:'关于',
  path:'/about'
}]
export const routeMap=new Map([
['Home','用户管理'],['About','关于'],['UserAddition','用户添加'],['UserEditor','用户编辑']
])
export const thHeader=new Set(['姓名','年龄','性别','删除','编辑'])
export const tableBody=reactive([
  {id:1,
    name:'张三',
    age:18,
    sex:"女",},
  {id:2,
    name:'李四',
    age:15,
    sex:'男',
  }])
