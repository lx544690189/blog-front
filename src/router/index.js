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
    path: '/articleDetail',
    component: () => import(/* webpackChunkName: "articleDetail" */ '../views/ArticleDetail.vue'),
  },
  {
    path: '/manage/article/list',
    component: () => import(/* webpackChunkName: "articleList" */ '../views/manage/article/List.vue'),
  },
  {
    path: '/manage/article/add',
    component: () => import(/* webpackChunkName: "articleAddOrEdit" */ '../views/manage/article/AddOrEdit.vue'),
  },
  {
    path: '/manage/article/edit',
    component: () => import(/* webpackChunkName: "articleAddOrEdit" */ '../views/manage/article/AddOrEdit.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
