<template>
  <div class="professors-show" v-if="professor">
    <div>
      <h1>{{ professor.name }}</h1>
      <router-link :to="`/professors/${this.professor.id}/edit`"
        >Edit Professor</router-link
      >
      <h3>University: {{ professor.university }}</h3>
      <h3>Department: {{ professor.department }}</h3>
      <h3>Reviews</h3>
      <p>
        <router-link :to="`/reviews/new`"
          >Rate Professor {{ professor.name }}</router-link
        >
      </p>
    </div>
    <br />

    <div v-for="review in professor.reviews">
      <h4>{{ review.title }}</h4>
      <p>Course Code: {{ review.course_code }}</p>
      <p>Review: {{ review.review }}</p>
      <p>Rating: {{ review.rating }}</p>
      <p id="date">Posted {{ formatDate(review.created_at) }}</p>
      <router-link :to="`/reviews/${review.id}/edit`">
        <p>Edit</p>
      </router-link>
      <br />
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
      professor: null,
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
