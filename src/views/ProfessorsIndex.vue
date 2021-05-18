<template>
  <div class="professors-index">
    <b-container>
      <div>
        <br />
        Search Professors: <input type="text" v-model="professorSearch" />
      </div>
      <div class="mt-3">
        <b-card
          border-variant="warning"
          header="Warning"
          header-bg-variant="transparent"
          align="center"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div
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
    </b-container>
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
