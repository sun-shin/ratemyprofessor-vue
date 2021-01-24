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
  </div>
</template>

<style></style>
