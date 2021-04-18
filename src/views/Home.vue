<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>Search, Find, and Rate Your Professors.</h3>
     <img
      src="https://cdn.shopify.com/s/files/1/0917/4492/products/ARLO-4550_gold_G_600x.jpg?v=1537926211"
      alt=""
    />
    <a href="/professors" class="index-button">Search Professors</a>
    <a href="/professor/new" class="new-button">Add New Professor</a>
  </div>
</template>

<style>
h1 {
  color:white;
}
h3 {
  color: white;
  font-size: 30px;
  position: relative;
  bottom: -40px;
  padding-bottom: 20px;
  font-weight: 100;
}
img {
  margin: 0 auto;
  position: relative;
  right: 1px;
  width: 20%;
}
.index-button {
  color: white;
  font-size: 25px;
  background: black;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 30px;
  padding: 8px;
  margin: 20px;
  position: absolute;
  bottom: 120px;
  left: 450px;
}
.index-button:hover {
  background: rgb(44, 44, 44);
  position: absolute;
  bottom: 130px;
}
.new-button {
  color: white;
  font-size: 25px;
  background: black;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 30px;
  padding: 8px;
  margin: 20px;
  position: absolute;
  bottom: 120px;
  right: 400px;
}
.new-button:hover {
  background: rgb(44, 44, 44);
  position: absolute;
  bottom: 130px;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "RateMyInstructor",
    };
  },
  created: function() {},
  methods: {},
};
</script>