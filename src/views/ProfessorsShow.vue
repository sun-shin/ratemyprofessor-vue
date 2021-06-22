<template>
  <div class="professors-show" v-if="professor">
    <div>
      <h1>{{ professor.name }}</h1>
      <div id="professorUpdateModal">
        <b-button 
        v-b-modal.update-prof
        v-if="$parent.loggedIn()"
        >
          Update Professor
        </b-button>

        <b-modal 
        id="update-prof"
        ref="prof-update-modal" 
        hide-footer 
        title="Update Professor Information">
          <form v-on:submit.prevent="updateProfessor()">
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <label>Name:</label>
              <input type="text" class="form-control" v-model="professor.name" />
            </div>
            <div class="form-group">
              <label>University:</label>
              <input
                type="text"
                class="form-control"
                v-model="professor.university"
              />
            </div>
            <div class="form-group">
              <label>Department:</label>
              <input
                type="text"
                class="form-control"
                v-model="professor.department"
              />
            </div>
            <br />
            <div class="submitButton">
               <input type="submit" class="btn btn-primary" value="Submit"/>
            </div>
          </form>
        </b-modal>
      </div>
     
      <h3>University: {{ professor.university }}</h3>
      <h3>Department: {{ professor.department }}</h3>
      <h3>Score: {{ avgRating(professor.reviews) }}</h3><br>
      <br><br><br>
      <div id="reviewNewModal">
        <b-button variant="warning" v-b-modal.modal-1
        v-if="$parent.loggedIn()"
        >
          Rate Professor {{ professor.name }}
        </b-button>

        <b-modal 
        id="modal-1" 
        ref="review-new-modal"
        hide-footer
        title="New Review">
          <form v-on:submit.prevent="createReview()">
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="stars">
              <form action="">
                <input class="star star-5" id="star-5" value="5" type="radio" v-model="rating" name="star"/>
                <label class="star star-5" for="star-5"></label>
                <input class="star star-4" id="star-4" value="4" type="radio" v-model="rating" name="star"/>
                <label class="star star-4" for="star-4"></label>
                <input class="star star-3" id="star-3" value="3" type="radio" v-model="rating" name="star"/>
                <label class="star star-3" for="star-3"></label>
                <input class="star star-2" id="star-2" value="2" type="radio" v-model="rating" name="star"/>
                <label class="star star-2" for="star-2"></label>
                <input class="star star-1" id="star-1" value="1" type="radio" v-model="rating" name="star"/>
                <label class="star star-1" for="star-1"></label>
              </form><br>
            </div><br>
            <div class="form-group">
              <input type="text" class="form-control" v-model="courseCode" placeholder="Course Code"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="title" placeholder="Title"/>
            </div>
            <div class="form-group">
              <textarea 
              v-model="review" 
              placeholder="Please write your review here"
              class="form-control"
              id="reviewtxtarea"
              ></textarea>
              <input
                type="hidden"
                class="form-control"
                id="reviewtxtarea"
                v-model= "review"
                placeholder="Please write your review here!"
              />
            </div><br />
            <div class="submitButton">
               <input type="submit" class="btn btn-primary" value="Submit"/>
            </div>
          </form>
        </b-modal>
      </div>
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
}
#reviewtxtarea {
  width: 450px;
  height: 100px;
}
.submitButton {
  text-align: center
}

div.stars {
  width: 360px;
  display: inline-block;
}
 
input.star { display: none; }
 
label.star {
  float: right;
  padding: 10px;
  font-size: 36px;
  color: rgb(0, 0, 0);
  transition: all .2s;
}
 
input.star:checked ~ label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}
 
input.star-5:checked ~ label.star:before {
  color: #FE7;
}
 
input.star-1:checked ~ label.star:before { color: #F62; }
 
label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}
</style>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      professor: null,
      errors: [],
      title: "",
      courseCode: "",
      review: "",
      rating: "",
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
    clearForm: function() {
      this.title =  ""
      this.courseCode =  ""
      this.review =  ""
      this.rating =  ""
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
     createReview: function() {
      var params = {
        professor_id: this.professor.id,
        title: this.title,
        course_code: this.courseCode,
        review: this.review,
        rating: this.rating,
      };
      axios
        .post("/reviews", params)
        .then((response) => {
          this.$refs['review-new-modal'].hide()
          const reviews = [...this.professor.reviews, response.data];
          this.professor.reviews = reviews;
          this.clearForm() 
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
    updateProfessor: function() {
      var params = {
        name: this.professor.name,
        university: this.professor.university,
        department: this.professor.department,
      };
      axios
        .put(`/professors/${this.professor.id}`, params)
        .then((response) => {
          this.$refs['prof-update-modal'].hide();
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    }
  },
};
</script>