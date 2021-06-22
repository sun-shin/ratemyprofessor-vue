<template>
  <div class="home">
    <h1>RateMyInstructor</h1>
    <h3>Search, Find, and Rate Your Professors</h3>
    <a href="/professors" class="index-button">Search Professors</a>
      <a href="/login" class="new-button">Add New Professor</a>
  </div>
</template>

<style>
h1 {
  color:white;
  font-size: 80px;
  padding-top: 120px;
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
  position: relative;
  top: 200px;
  left: 450px;
}
.index-button:hover {
  background: rgb(44, 44, 44);
  position: relative;
  top: 200px;
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
  position: relative;
  top: 200px;
  right: 400px;
}
.new-button:hover {
  background: rgb(44, 44, 44);
  position: relative;
  top: 200px;
}
</style>

