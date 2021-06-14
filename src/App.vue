<template>
  <div id="app">
    <div id="background">
      <img src="/img/chalkboard.jpeg" class="stretch">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/professors">Professors</router-link> |
      <span v-if="!loggedIn()">
        <router-link to="/signup">Signup</router-link> |
      </span>
      <span v-if="!loggedIn()">
        <router-link to="/login">Login</router-link> |
      </span>
      <span v-if="loggedIn()">
        <router-link to="/logout">Sign Out</router-link>
      </span>
    </div>
    <div
    class="guestCredentials" 
    v-if="!loggedIn()"
    >
      <p>Email: guest@email.com</p>
      <p>Password: guestpass </p>
    </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {};
  },
  methods: {
    loggedIn: function() {
      return localStorage.getItem("jwt");
    },
    // getUserId: function() {
    //   return localStorage.getItem("user_id");
    // },
    logout: function() {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#background {
  width: 100%; 
  height: 100%; 
  position: fixed; 
  left: 0px; 
  top: 0px; 
  z-index: -1; 
}
.stretch {
  width:100%;
  height:100%;
}
#nav {
  padding: 10px;
  background: black;
  border-radius: 20px;
}
#nav a {
  font-weight: bold;
  color: white;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.guestCredentials {
  color:white;
  float: left;
  text-align: left;
  padding-top: 10px;
  padding-left: 10px;
}
</style>



