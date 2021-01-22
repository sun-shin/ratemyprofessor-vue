<template>
  <div class="reviews-edit">
    <h1>Edit Review</h1>

    <form v-on:submit.prevent="updateReview()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Course Code:</label>
        <input type="text" class="form-control" v-model="review.course_code" />
      </div>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="review.title" />
      </div>
      <div class="form-group">
        <label>Review:</label>
        <input type="text" class="form-control" v-model="review.review" />
      </div>
      <div class="form-group">
        <label>Rating:</label>
        <input type="number" class="form-control" v-model="review.rating" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <button v-on:click="destroyReview()">Delete Review</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      review: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/reviews/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.review = response.data;
    });
  },
  methods: {
    updateReview: function() {
      var params = {
        professor_id: this.review.professor_id,
        course_code: this.review.course_code,
        title: this.review.title,
        review: this.review.review,
        rating: this.review.rating,
      };
      axios
        .put(`/reviews/${this.review.id}`, params)
        .then((response) => {
          this.$router.push(`/professors/${this.review.professor_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyReview: function() {
      if (confirm("Are you sure you want to delete this review?")) {
        axios.delete(`/reviews/${this.review.id}`).then((response) => {
          console.log("Review Successfully Deleted", response.data);
          this.$router.push(`/professors/${this.review.professor_id}`);
        });
      }
    },
  },
};
</script>
