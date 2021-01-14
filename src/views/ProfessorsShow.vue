<template>
  <div class="professors-show">
    <h1>{{ professor[0].name }}</h1>
    <h3>University: {{ professor[0].university }}</h3>
    <h3>Department: {{ professor[0].department }}</h3>

    <h3>Reviews</h3>
    <div v-for="review in professor[0].reviews">
      <h3>{{ review.title }}</h3>
      <p>Course Code: {{ review.course_code }}</p>
      <p>Review: {{ review.review }}</p>
      <p>Rating: {{ review.rating }}</p>
      <p id="date">Posted {{ formatDate(review.created_at) }}</p>
    </div>
  </div>
</template>

<style>
#date {
  color: rgb(91, 90, 90);
  font-size: small;
}
</style>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      professor: {},
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
    formatDate: function(date) {
      return moment(date).format("LLL");
    },
  },
};
</script>
