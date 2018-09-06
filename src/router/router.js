/**
 * 路由模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入主页模块
import Home from '../pages/Home/Home.vue'
// 引入
import Order from '../pages/Order/Order.vue'
// 引入个人主页模块
import Person from '../pages/Person/Person.vue'
// 引入搜索模块
import Search from '../pages/Search/Search.vue' 
// 引入注册界面模块
import Login from '../pages/Login/Login.vue'

// 使用vue-router插件
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path:'/home',
            component:Home,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/Search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/person',
            component:Person,
            meta:{
                showFooter:true
            }
        },
        // 默认指向
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/login',
            component:Login
        }
    ]
});