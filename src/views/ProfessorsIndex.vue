<template>
  <div class="professors-index">
    <b-container class="content">
      <div id="search">
        <br />
        <input class="form-control" type="text" v-model="professorSearch" placeholder="Search Professors...">
      </div><br>
      <b-row>
        <div class="col-sm-4"
          v-for="professor in filterBy(
            professors,
            professorSearch,
            'name',
            'university'
          )"
        >
          <b-card
            border-variant="warning"
            header-tag="header"
            header-bg-variant="transparent"
            align="center"
          >
            <template #header>
              <h4>
                <router-link :to="`/professors/${professor.id}`">{{
                  professor.name
                }}</router-link>
              </h4>
            </template>
            <p>University: {{ professor.university }}</p>
            <p>Department: {{ professor.department }}</p>
            <p>Rating: {{ avgRating(professor.reviews) }}</p>
          </b-card><br>
        </div>
      </b-row>
    </b-container>
  </div>

</template>

<style>
#search {
  padding-top: 50px;
  padding-bottom: 50px;
}
.card.border-warning {
  border-width: 10px;
}
</style>

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
