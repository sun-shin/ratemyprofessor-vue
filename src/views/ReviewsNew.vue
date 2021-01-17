<template>
  <div class="reviews-new">
    <h1>Rate Professor</h1>
    <form v-on:submit.prevent="createReview()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Professor ID:</label>
        <input type="number" class="form-control" v-model="professorId" />
      </div>
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
#reviewtxtarea {
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
      professorId: "",
      title: "",
      courseCode: "",
      review: "",
      rating: "",
    };
  },
  created: function() {},
  methods: {
    createReview: function() {
      var params = {
        professor_id: this.professorId,
        title: this.title,
        course_code: this.courseCode,
        review: this.review,
        rating: this.rating,
      };
      axios
        .post("/reviews", params)
        .then((response) => {
          this.$router.push(`/professors/${this.professorId}`);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>
