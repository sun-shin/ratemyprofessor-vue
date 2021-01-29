<template>
  <div id="app">
    <div class="top-bar-wrap hidden-xs">
      <div class="container">
        <div class="top-bar">
          <div class="pull-right">
            <ul class="list-inline social-1">
              <li>
                <a href="https://github.com/sun-shin" target="_blank"
                  ><i class="fa fa-github"></i
                ></a>
              </li>
              <li>
                <a href="https://linkedin.com/in/sunhanshin/" target="_blank"
                  ><i class="fa fa-linkedin-square"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <!--top-bar-->
      </div>
    </div>
    <!--top bar wrap end-->
    <!-- Static navbar -->
    <div
      class="navbar navbar-default navbar-static-top sticky"
      role="navigation"
    >
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">RateMyInstructor</a>
        </div>
        <!--.navbar header-->
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="/">Home</a></li>
            <li class="active"><a href="/professors">Professors</a></li>
            <li class="active"><a href="/professor/new">Add Professor</a></li>
            <li
              class="dropdown "
              data-animate="animated fadeInUp"
              style="z-index:500;"
            >
              <a href="#" class="dropdown-toggle " data-toggle="dropdown"
                ><i class="fa fa-search"></i
              ></a>
              <ul class="dropdown-menu animated fadeInUp">
                <li id="dropdownForm">
                  <div class="dropdown-form">
                    <form class=" form-inline">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="search..."
                        />
                        <span class="input-group-btn">
                          <button class="btn btn-theme-bg" type="button">
                            Go!
                          </button>
                        </span>
                      </div>
                      <!--input group-->
                    </form>
                    <!--form-->
                  </div>
                  <!--.dropdown form-->
                </li>
                <!--.drop form search-->
              </ul>
              <!--.drop menu-->
            </li>
            <!--nav search form-->
          </ul>
          <!--navbar-right for navbar-left replace class with navbar-left-->
        </div>
        <!--/.nav-collapse -->
      </div>
      <!--.container-->
    </div>
    <!--.navbar-default-->
    <router-view />
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 margin30">
            <div class="footer-col">
              <h3 class="heading">About us</h3>
              <p>
                Duis nisl est, porta eu augue et, tempor congue mauris. Praesent
                a ligula in urna consectetur rhoncus.
              </p>
              <ul class="address-info list-unstyled">
                <li><i class="fa fa-home"></i> Chicago, Illinois, 60616</li>
                <li><i class="fa fa-phone"></i> +1 123456789</li>
                <li>
                  <i class="fa fa-envelope"></i>
                  <a href="#">example@email.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 margin30">
            <div class="footer-col">
              <h3 class="heading">Recent Post</h3>
              <ul class="list-unstyled popular-post">
                <li>
                  <div class="popular-img">
                    <a href="#">
                      <img src="img/work-6.png" class="img-responsive" alt=""
                    /></a>
                  </div>
                  <div class="popular-desc">
                    <h5><a href="#">blog post image</a></h5>
                    <h6>31st july 2014</h6>
                  </div>
                </li>
                <li>
                  <div class="popular-img">
                    <a href="#">
                      <img src="img/work-2.png" class="img-responsive" alt=""
                    /></a>
                  </div>
                  <div class="popular-desc">
                    <h5><a href="#">blog post image</a></h5>
                    <h6>31st july 2014</h6>
                  </div>
                </li>
                <li>
                  <div class="popular-img">
                    <a href="#">
                      <img src="img/work-5.png" class="img-responsive" alt=""
                    /></a>
                  </div>
                  <div class="popular-desc">
                    <h5><a href="#">blog post image</a></h5>
                    <h6>31st july 2014</h6>
                  </div>
                </li>
              </ul>
              <!--latest post-->
            </div>
          </div>
          <!--footer col-->
          <div class="col-md-4 margin30">
            <div class="footer-col">
              <h3 class="heading">Elsewhere</h3>
              <ul class="list-inline social-1">
                <li>
                  <a href="https://linkedin.com/in/sunhanshin"
                    ><i
                      class="fa fa-linkedin"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="LinkedIn"
                      data-placement="top"
                    ></i
                  ></a>
                </li>
                <li>
                  <a href="https://github.com/sun-shin"
                    ><i
                      class="fa fa-github"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Github"
                      data-placement="top"
                    ></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="divide30"></div>
            <div class="footer-col">
              <h3 class="heading">Newsletter</h3>
              <p>
                Duis nisl est, porta eu augue et, tempor congue mauris.
              </p>
              <form class="newsletter-form">
                <div class="row">
                  <div class="col-md-12">
                    <div class="input-group">
                      <label class="sr-only" for="subscribe-email"
                        >Email address</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="subscribe-email"
                        placeholder="Enter your email"
                      />
                      <span class="input-group-btn">
                        <button type="submit" class="btn btn-theme-bg btn-lg">
                          OK
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!--footer col-->
        </div>
        <!--row-->
        <div class="row">
          <div class="col-md-12">
            <div class="footer-btm">
              <span>&copy; Sun Shin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--footer end-->
  </div>
</template>

<style></style>
