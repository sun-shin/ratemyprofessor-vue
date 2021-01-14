<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>Search, Find, and Rate Your Professors.</h3>
    <a href="/professors">Find Your Professor</a> <br />
    <a href="/school">Find Your School</a>
  </div>
</template>

<style></style>

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
