
 import Vue from 'vue/dist/vue.esm'
 import App from '../app.vue'
 import router from './router'

 document.addEventListener('DOMContentLoaded', () => {
   const app = new Vue({
     el: '#sample-app',
     router: router,
     render: h => h(App)
   })
 })






//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
