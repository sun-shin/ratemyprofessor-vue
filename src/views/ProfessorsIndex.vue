<template>
  <div class="professors-index">
    <div>
      <br />
      Search Professors: <input type="text" v-model="professorSearch" />
    </div>
    <div class="mt-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
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
