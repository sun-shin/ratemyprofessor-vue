<template>
  <div class="reviews-new">
    <h1>Rate Professor {{ professor.name }}</h1>
    <form v-on:submit.prevent="createReview()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Course Code:</label>
        <input type="text" class="form-control" v-model="courseCode" />
      </div>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>Review:</label>
        <input
          type="text"
          class="form-control"
          id="reviewtxtarea"
          v-model="review"
        />
      </div>
      <div class="form-group">
        <label>Rating:</label>
        <input type="number" class="form-control" v-model="rating" />
      </div>
      <br />
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<style>
.input {
  width: 500px;
  height: 100px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      professor: {},
      errors: [],
      title: "",
      courseCode: "",
      review: "",
      rating: "",
    };
  },
  created: function() {
    console.log(this.$route.params.id);
    axios.get(`/professors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.professor = response.data;
    });
  },
  methods: {
    createReview: function() {
      var params = {
        professor_id: this.professor.id,
        title: this.title,
        course_code: this.courseCode,
        review: this.review,
        rating: this.rating,
      };
      axios
        .post(`/professors/${this.professor.id}/review-new`, params)
        .then((response) => {
          this.$router.push(`/professors/${this.professor.id}`);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>