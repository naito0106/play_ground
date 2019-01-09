import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'
import Home from '../router-view/home.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/game',
      name: 'game',
      component: {
        template: '<div>Game画面だよ</div>'
      }
    }
    ]
})

export default router