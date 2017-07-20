<template>
    <div class="col-sm-4 col-sm-offset-4">
      <h2>Test App</h2>
      <p>Login to app</p>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your username"
          v-model="credentials.username"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="credentials.password"
        >
      </div>
      <button class="btn btn-primary" @click="submit()">Login</button>
    </div>
  </template>

  <script>
 // import auth from '../auth'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)

  export default {
    data () {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit () {
        axios.post(`http://localhost:3000/login`, {
          data: this.credentials
        })
        .then(response => {
          if (response.data && response.data.token) {
            localStorage.setItem('awesome_secret_key', response.data.token) // TODO middleware for tokens
            window.location.href = 'http://localhost:8080/' // TODO use Vue
          }
        })
        .catch(e => {
          console.log(e)
        })
      }
    }
  }
  </script>