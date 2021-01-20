<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>Search, Find, and Rate Your Professors.</h3>
    <img
      src="https://cdn.shopify.com/s/files/1/0917/4492/products/ARLO-4550_gold_G_600x.jpg?v=1537926211"
      alt=""
    />
    <a href="/professors" class="professor-buttons">Find Your Professor</a>
    <a href="/professors/new" class="new-prof-buttons">Add New Professor</a>
  </div>
</template>

<style>
h3 {
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

.professor-buttons {
  color: black;
  font-size: 25px;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 30px;
  padding: 8px;
  margin: 20px;
  position: absolute;
  bottom: 120px;
  left: 450px;
}

.professor-buttons:hover {
  background: rgb(235, 232, 232);
  position: absolute;
  bottom: 130px;
}

.new-prof-buttons {
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

.new-prof-buttons:hover {
  background: rgb(44, 44, 44);
  position: absolute;
  bottom: 130px;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "RateMyProfessor-Clone",
    };
  },
  created: function() {},
  methods: {},
};
</script>
