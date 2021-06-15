
<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul><br>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <input type="email" class="form-control" v-model="email" placeholder="Email">
      </div><br>
      <div class="form-group">
        <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div><br>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<style>
.form-group{
  width: 450px;
  margin: auto;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/sessions", params)
        .then(response => {
          axios.defaults.headers.common.authentication =
            response.data.token;
          localStorage.setItem("jwt", response.data.token);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/professors");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
