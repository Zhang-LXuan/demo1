import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index/Index.vue'
import Login from '@/views/Login'
import Home from '@/views/r1/home.vue'
import Act from '@/views/r1/act.vue'
import Info from '@/views/r1/info.vue'
import Contact from '@/views/r1/contact.vue'
import Item from '@/views/r1/item.vue'

Vue.use(VueRouter)

const routes = [
  {
    //一级路由
    path:"/",
    redirect:'/home',
    name:'start',
    component:Index,
    children:[
      {
        //二级路由
        path:'home',
        name:'home',
        redirect:'/home/item/主板',
        component:Home,
        children:[
          {
            //三级路由
            path:'item/:name',
            component:Item,

          },
        ]
      },
      {
        path:'act',
        name:'act',
        component:Act,
      },
      {
        path:'info',
        name:'info',
        component:Info,
      },
      {
        name:'contact',
        path:'contact',
        component:Contact,
      },
      
    ]
  },
  //////////login////
  {
    path:'/login',
    name:"login",
    component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router
