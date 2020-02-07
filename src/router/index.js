import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StockList from '../views/StockList'
import Team from '../views/Team'
import SalesManage from '../components/SalesManage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/stocklist',
    name: 'stocklist',
    component: StockList
  },
  {
    path: '/sales',
    name: 'sales',
    component: SalesManage
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
