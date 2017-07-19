<template>
<form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="form">
  <fieldset>
    <legend>REST APP VUE NODEJS</legend>

    <label for="username">Username</label>
    <input id="username" type="text" placeholder="Username"><br>
    <br>
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password"><br>
    <br>
    <button type="submit" class="pure-button pure-button-primary">Login</button>
    <p v-if="submitData">{{submitData|json}}</p>
  </fieldset>
</form>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
