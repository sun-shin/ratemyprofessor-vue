<template>
  <div class="professors-edit">
    <h1>Edit Professor</h1>

    <form v-on:submit.prevent="updateProfessor()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="professor.name" />
      </div>
      <div class="form-group">
        <label>University:</label>
        <input
          type="text"
          class="form-control"
          v-model="professor.university"
        />
      </div>
      <div class="form-group">
        <label>Department:</label>
        <input
          type="text"
          class="form-control"
          v-model="professor.department"
        />
      </div>
      <br />
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      professor: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/professors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.professor = response.data;
    });
  },
  methods: {
    updateProfessor: function() {
      var params = {
        name: this.professor.name,
        university: this.professor.university,
        department: this.professor.department,
      };
      axios
        .put(`/professors/${this.professor.id}`, params)
        .then((response) => {
          this.$router.push(`/professors/${this.professor.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    }
  },
};
</script>
