<template>
  <div class="reviews-new">
    <h1>Rate Professor {{ professor.name }}</h1>
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
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<style>
#reviewtxtarea {
  width: 500px;
  height: 100px;
}
div.stars {
  width: 270px;
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
export default {
  data: function() {
    return {
      professor: {},
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
    createReview: function() {
      var params = {
        professor_id: this.professor.id,
        title: this.title,
        course_code: this.courseCode,
        review: this.review,
        rating: this.rating,
      };
      axios
        .post(`/professors/${this.professor.id}/review-new`, params)
        .then((response) => {
          this.$router.push(`/professors/${this.professor.id}`);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>