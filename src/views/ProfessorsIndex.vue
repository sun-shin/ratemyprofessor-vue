<template>
  <div class="professors-index">
    <b-container class="content">
      <div id="search">
        <br />
        <input class="form-control" type="text" v-model="professorSearch" placeholder="Search Professors...">
      </div><br>
      <div id="newProfessorModal">
        <b-button
        v-if="$parent.loggedIn()" 
        variant="warning" 
        v-b-modal.new-prof
        >
          Add New Professor
        </b-button>

        <b-modal 
        id="new-prof" 
        ref="modal" 
        hide-footer 
        title="Add New Professor">
          <form v-on:submit.prevent="createProfessor()">
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <label>Professor Name:</label>
              <input type="text" class="form-control" v-model="name" />
            </div>
            <div class="form-group">
              <label>University:</label>
              <input type="text" class="form-control" v-model="university" />
            </div>
            <div class="form-group">
              <label>Department:</label>
              <input type="text" class="form-control" v-model="department" />
            </div>
            <br />
            <div class="submitButton">
               <input type="submit" class="btn btn-primary" value="Submit" />
            </div>          </form>
        </b-modal>
      </div><br><br>
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
            <p>{{ professor.university }}</p>
            <p>Department: {{ professor.department }}</p>
            <p>{{ avgRating(professor.reviews) }}</p>
          </b-card><br>
        </div>
      </b-row>
    </b-container>
  </div>

</template>

<style>
#search {
  padding-top: 50px;
  padding-bottom: 35px;
}
.card.border-warning {
  border-width: 10px;
}
.submitButton {
  text-align: center
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
      name: "",
      university: "",
      department: "",
      errors: [],
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
    createProfessor: function() {
      var params = {
        name: this.name,
        university: this.university,
        department: this.department,
      };
      axios
        .post("/professors", params)
        .then((response) => {
          location.reload()
          this.$refs['modal'].hide();
          this.clearForm();
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
    clearForm: function() {
      this.name =  ""
      this.university =  ""
      this.department =  ""
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
  }
};
</script>
