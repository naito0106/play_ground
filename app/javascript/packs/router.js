import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'
import Home from '../router-view/home.vue'
import ZipCode from '../router-view/zip-code.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/game/:gameId',
      name: 'game',
      component: {
        template: '<div>Game({{ $route.params.gameId }})画面だよ</div>'
      }
    },
    {
      path: '/zip-code',
      name: 'zip-code',
      component: ZipCode
    }
    ]
})

export default router