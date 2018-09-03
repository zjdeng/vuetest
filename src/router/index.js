import Vue from 'vue'
import Router from 'vue-router'
import MedicalHistory from '@/view/MedicalHistory'
import Communication from '@/view/Communication'

Vue.use(Router)

export default new Router({
  linkActiveClass: '', // 每个主路由都会加的class
  linkExactActiveClass: 'active', // 选中路由才会加的class
  routes: [
    {
      path: '/',
      name: 'MedicalHistory',
      component: MedicalHistory
    },
    {
      path: '/Communication',
      name: 'Communication',
      component: Communication
    }
  ]
})
