<template>
  <div class="home">
    <h1>RateMyInstructor</h1>
    <h3>Search, Find, and Rate Your Professors</h3>
    <a href="/professors" class="index-button">Search Professors</a>
    <!-- <span v-if="$parent.loggedin()"> -->
      <a href="/professor/new" class="new-button">Add New Professor</a>
    <!-- </span> -->
  </div>
</template>

<style>
h1 {
  color:white;
  font-size: 60px;
}
h3 {
  color: white;
  font-size: 40px;
  position: relative;
  bottom: -90px;
  padding-bottom: 20px;
  font-weight: 100;
}
.index-button {
  color: white;
  font-size: 35px;
  background: black;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 30px;
  padding: 8px;
  margin: 20px;
  position: absolute;
  top: 450px;
  left: 450px;
}
.index-button:hover {
  background: rgb(44, 44, 44);
  position: absolute;
  top: 450px;
}
.new-button {
  color: white;
  font-size: 35px;
  background: black;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 30px;
  padding: 8px;
  margin: 20px;
  position: absolute;
  top: 450px;
  right: 400px;
}
.new-button:hover {
  background: rgb(44, 44, 44);
  position: absolute;
  top: 450px;
}
</style>

