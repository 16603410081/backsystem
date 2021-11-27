import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[]=[
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/useraddition',
    name: 'UserAddition',
    component: () => import('../views/UserAddition.vue')
  },
  {
    path: '/usereditor',
    name: 'UserEditor',
    component: () => import('../views/UserEditor.vue')
  }


]

export default routes