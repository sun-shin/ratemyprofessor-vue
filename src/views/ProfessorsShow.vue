 <template>
  <div class="professors-show" v-if="professor">
    <section class="bread-wrap">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h4>Professor Review</h4>
          </div>
          <div class="col-sm-6 hidden-xs text-right">
            <ol class="breadcrumb">
              <li><a href="/">Home</a></li>
              <li>Professor Review</li>
            </ol>
            <!--breadcrumb-->
          </div>
        </div>
      </div>
    </section>
    <!--.bread-wrap-->
    <div class="divide50"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 margin30">
          <div class="row">
            <div class="col-md-12">
              <div class="blog-wrap">
                <div class="blog-desc">
                  <img
                    src="/img/prof_icon.png"
                    style="float:right;width:200px;height:200px;"
                  />
                  <h4>
                    {{ professor.name }}
                  </h4>
                  <router-link :to="`/professors/${this.professor.id}/edit`"
                    ><i class="fa fa-pencil"></i
                  ></router-link>
                  <br />
                  <p>
                    {{ professor.university }}
                  </p>
                  <p>{{ professor.department }}</p>
                  <p class="lead">Rating: {{ avgRating(professor.reviews) }}</p>
                  <p>
                    <router-link
                      :to="`/professors/${this.professor.id}/review-new`"
                      >Rate Professor {{ professor.name }}</router-link
                    >
                  </p>
                </div>
              </div>
              <!--blog wrap-->
              <h3>Reviews</h3>
              <div v-for="review in professor.reviews">
                <ul class="list-unstyled comments-list">
                  <li>
                    <h3>{{ review.rating }}</h3>
                    <h4>{{ review.title }}</h4>
                    <div class="meta">
                      <span
                        ><b>{{ review.course_code }}</b></span
                      >,
                      <span class="time"
                        >Posted {{ formatDate(review.created_at) }}</span
                      >
                    </div>
                    <p>
                      {{ review.review }}
                    </p>
                    <router-link :to="`/reviews/${review.id}/edit`">
                      <p>Edit</p>
                    </router-link>
                  </li>
                </ul>
              </div>
              <!--reviews list-->
            </div>
          </div>
          <!--row-->
        </div>
      </div>
    </div>
    <!--blog container-->
    <div class="divide50"></div>
  </div>
</template>

<style>
#date {
  color: rgb(91, 90, 90);
  font-size: small;
}
.icon {
  position: relative;
}
#router-link{
  display: inline-block; 
  width: 100px;
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
