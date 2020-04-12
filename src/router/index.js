import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/manage/article/list',
    component: () => import(/* webpackChunkName: "articleList" */ '../views/manage/article/List.vue'),
  },
  {
    path: '/manage/article/add',
    component: () => import(/* webpackChunkName: "articleAdd" */ '../views/manage/article/Add.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
