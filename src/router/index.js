import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/pages/Calculator'

Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    component: Calculator
  }]
})
