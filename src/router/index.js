import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/view/Example'

Vue.use(Router)

export default new Router({
  linkActiveClass: '', // 每个主路由都会加的class
  linkExactActiveClass: 'active', // 选中路由才会加的class
  routes: [
    {
      path: '/',
      redirect: 'Example'
    },
    {
      path: '/Example',
      name: '',
      component: Example
    }
  ]
})
