<template>
  <div class="container">
    <div class="professors-new">
      <div class="divide50"></div>
      <h2>Add New Professor</h2>
      <form v-on:submit.prevent="createProfessor()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Professor Name:</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>University:</label>
          <input type="text" class="form-control" v-model="university" />
        </div>
        <div class="form-group">
          <label>Department:</label>
          <input type="text" class="form-control" v-model="department" />
        </div>
        <br />
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
      <div class="divide50"></div>
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      university: "",
      department: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createProfessor: function() {
      var params = {
        name: this.name,
        university: this.university,
        department: this.department,
      };
      axios
        .post("/professors", params)
        .then((response) => {
          this.$router.push("/professors");
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>
