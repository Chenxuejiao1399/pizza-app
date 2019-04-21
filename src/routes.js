import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//配置路由
export const routes = [
    { 
      path: "/", name: "homeLink", components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    } 
  },
    { path: "/menu", name: "menuLink", component: Menu },
    {
      path: "/admin", name: "adminLink", component: Admin, 
      //beforeEnter: (to, from, next)=>{
        //路由独享守卫
        // if(to.path == '/login' || to.path == '/register'){
        //   next();
        // }else{
        //   alert("还未登录，请先登录！");
        //   next('/login');
        // }
      //}
    },
    {
      path: "/about", name: "aboutLink", redirect: "/about/Contact", component: About, children: [
        { path: "/about/contact", name: "contactLink", component: Contact },
        { path: "/history", name: "historyLink", component: History },
        { path: "/delivery", name: "deliveryLink", component: Delivery },
        { path: "/orderingGuide", name: "orderingGuideLink", component: OrderingGuide },
      ]
    },
    { path: "/login", name: "loginLink", component: Login },
    { path: "/register", name: "registerLink", component: Register },
    { path: "*", redirect: '/' }  //如果地址输入有误，找不到对应的路由，则跳转到首页
  ]

//全局守卫   在未登录状态下提示登录,不允许跳转页面
/*
router.beforeEach((to,from,next) =>{
  //判断store,gettes,isLogin ===false
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    alert("还未登录，请先登录！");
    next('/login');
  }
})
*/

//后置钩子
// router.afterEach((to,from) =>{
//   alert("after each");
// })