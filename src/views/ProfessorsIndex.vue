<template>
  <div class="professors-index">
    <div class="container">
      <div>
        <br />
        Search Professors: <input type="text" v-model="professorSearch" />
      </div>
      <br /><br />
      <div class="col-md-12">
        <span class="border">
          <div
            class="col-sm-4 margin20"
            v-for="professor in filterBy(
              professors,
              professorSearch,
              'name',
              'university'
            )"
          >
            <h4>
              <router-link :to="`/professors/${professor.id}`">{{
                professor.name
              }}</router-link>
            </h4>
            <p>University: {{ professor.university }}</p>
            <p>Department: {{ professor.department }}</p>
            <p>Rating: {{ avgRating(professor.reviews) }}</p>
            <br />
          </div>
        </span>
      </div>
      <!-- <div
        v-for="professor in filterBy(
          professors,
          professorSearch,
          'name',
          'university'
        )"
      >
        <h4>
          <router-link :to="`/professors/${professor.id}`">{{
            professor.name
          }}</router-link>
        </h4>
        <p>University: {{ professor.university }}</p>
        <p>Department: {{ professor.department }}</p>
        <p>Rating: {{ avgRating(professor.reviews) }}</p>
        <br />
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      professors: [],
      professorSearch: "",
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
      var avg = (sum / reviews.length).toFixed(1);
      if (isNaN(avg)) {
        return "No ratings yet!";
      }
      var result = avg + "/5.0";
      return result;
    },
  },
};
</script>
