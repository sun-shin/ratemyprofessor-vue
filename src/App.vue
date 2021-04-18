<template>
  <div id="app">
    <!-- <div id="background">
      <img src="/img/chalkboard.jpeg" class="stretch">
    </div> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/professors">Professors</router-link> |
      <router-link to="/professor/new">Add Professor</router-link> |
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

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
</style>