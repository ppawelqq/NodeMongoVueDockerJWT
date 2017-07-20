<template>
  <div id="app">
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        LEFT MENU
      </nav>
      <main id="panel">
        <button @click="logout()">Logout</button>
      </main>
    </Slideout>
    <input type="text" placeholder="Enter your username">
  </div>
</template>
 
<script>
  import Slideout from 'vue-slideout'
  
  export default {
    name: 'app',
    components: {
      Slideout
    },
    methods: {
      open: function () {
        console.log('slideoutOpen')
      },
      logout: function () {
        localStorage.removeItem('awesome_secret_key') // TODO middleware for tokens
        window.location.href = 'http://localhost:8080/login' // TODO use Vue
      }
    }
  }
</script>
 
<style>
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  .slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
    overflow-y: none;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    background-color: #404040;
    color: rgb(173, 179, 184);
  }
  
  .slideout-menu-left {
    left: 0;
  }
  
  .slideout-menu-right {
    right: 0;
  }
  
  .slideout-panel {
    background-color: Rgb(53, 186, 246);
    color: white;
    margin-top: 0;
    position: fixed;
    z-index: 1;
    /*will-change: transform;*/
    height: 50px;
    width: 100%
  }
  
  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
  }
  
  .slideout-open .slideout-menu {
    display: block;
  }
</style>