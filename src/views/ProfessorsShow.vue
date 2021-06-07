<template>
  <div class="professors-show" v-if="professor">
    <div>
      <h1>{{ professor.name }}</h1>
      <router-link :to="`/professors/${this.professor.id}/edit`"
        >Edit Professor</router-link
        color: "white"
      >
     
      <h3>University: {{ professor.university }}</h3>
      <h3>Department: {{ professor.department }}</h3>
      <h3>Rating: {{ avgRating(professor.reviews) }}</h3><br>
      <br><br><br>
       <h4>
        <router-link  
        v-if="$parent.loggedIn()"
        :to="`/professors/${this.professor.id}/review-new`"
          >Rate Professor {{ professor.name }}</router-link
        >
      </h4>
    </div><br><br>

  <b-container class="content">
    <b-row>
      <div class="col-sm-4"
        v-for="review in professor.reviews"
      >
      <b-card
        border-variant="warning"
        header-tag="header"
        header-bg-variant="transparent"
        align="center"
      >
        <template #header>
        <h4>{{ review.title }}</h4>
        </template>
        <p>{{ review.course_code }}</p>
        <p>{{ review.review }}</p>
        <p>Rating: {{ review.rating }}</p>
        <p id="date">Posted {{ formatDate(review.created_at) }}</p>
      </b-card><br>
      </div>
    </b-row>
  </b-container>
  </div>
</template>

<style>
#date {
  color: rgb(91, 90, 90);
  font-size: small;
}
a {
  font-weight: bold;
  color: #fff
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