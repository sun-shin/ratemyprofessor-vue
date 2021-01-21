<template>
  <div class="professors-index">
    <div v-for="professor in professors">
      <h4>{{ professor.name }}</h4>
      <p>University: {{ professor.university }}</p>
      <p>Department: {{ professor.department }}</p>
      <p>Rating: {{ avgRating(professor.reviews) }}/5</p>
      <router-link :to="`/professors/${professor.id}`">More Info</router-link
      ><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      professors: [],
    };
  },
  created: function() {
    this.indexProfessors();
  },
  methods: {
    indexProfessors: function() {
      axios.get("/professors").then((response) => {
        console.log(response.data);
        this.professors = response.data;
      });
    },
    avgRating: function(reviews) {
      var sum = 0;
      for (var i = 0; i < reviews.length; i++) {
        sum += parseInt(reviews[i].rating);
      }
      var avg = sum / reviews.length;
      if (isNaN(avg)) {
        return "No ratings yet!";
      }
      var a = avg.toFixed(1);
      return a;
    },
  },
};
</script>
