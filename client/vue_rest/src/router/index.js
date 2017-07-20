import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        axios.post(`http://localhost:3000/auth`, {
          token: localStorage.getItem('awesome_secret_key')
        })
        .then(response => {
          console.log(response)
          next()
        })
        .catch(e => {
          next('/login')
          console.log(e)
        })
      }
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
