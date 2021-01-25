<template>
  <div class="home">
    <section class="main-slider">
      <div class="flexslider">
        <ul class="slides">
          <li class="img" style="background: url(/img/bg_1.jpeg)">
            <div class="slider-text">
              <div class="inner">
                <div class="container text-center">
                  <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                      <h1 id="text">Welcome to RateMyInstructor</h1>
                      <p id="text">
                        RateMyInstructor is a platform for students to leave
                        reviews for their instructors
                      </p id="text">
                      <a href="/professors" class="btn btn-lg border-white">See Professors</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style="background: url(/img/bg_2.jpeg)">
            <div class="slider-text">
              <div class="inner">
                <div class="container text-center">
                  <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                      <h1 id="text">Welcome to RateMyInstructor</h1>
                      <p id="text">
                        This application is a clone of a website called
                        RateMyProfessor which has similar functionality as this
                        clone.
                      </p>
                      <a href="/professors" class="btn btn-lg border-white">See Professors</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style="background: url(/img/bg_3.jpeg)">
            <div class="slider-text">
              <div class="inner">
                <div class="container text-center">
                  <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                      <h1 id="text">Welcome to RateMyInstructor</h1>
                      <p id="text">
                        The main desire behind this application was to apply new
                        knowledge in Node.js, Express.js, Vue.js as well as
                        PostgreSQL technologies.
                      </p>
                      <a href="/" class="btn btn-lg border-white">See Professors</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="divide40"></div>
    <div class="container">
      <div class="row">
        <h3>Technologies:</h3>
        <div class="col-md-6 margin20">
          <div class="service-box wow animated fadeInLeft">
           <img src="/img/node_icon.png" style="width:140px;height:55px;">
          </div>
          <!--service box-->
        </div>
        <!--service-col-->
        <div class="col-md-6 margin20">
          <div class="service-box wow animated fadeInLeft">
            <img src="/img/express_icon.png" style="width:155px;height:50px;"><br>
          </div>
          <!--service box-->
        </div>
        <!--service-col-->
      </div>
      <!--row-->
      <div class="divide40"></div>
      <div class="row">
        <div class="col-md-6 margin20">
          <div class="service-box wow animated fadeInLeft">
            <img src="/img/vue_icon.png" style="width:60px;height:50px;">
          </div>
          <!--service box-->
        </div>
        <!--service-col-->
        <div class="col-md-6 margin20">
          <div class="service-box wow animated fadeInLeft">
            <img src="/img/psql_icon.png" style="width:65px;height:65px;">
          </div>
          <!--service box-->
        </div>
        <!--service-col-->
      </div>
    </div>
    <!--services -->
  </div>
</template>

<style>
#img {
  opacity: 0.5;
}
#text {
  text-shadow: 2px 2px #000000;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "RateMyProfessor-Clone",
    };
  },
  created: function() {},
  methods: {},
};
</script>
