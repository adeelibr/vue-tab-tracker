<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <section class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field 
            type="email"
            name="email"
            label="Email"
            v-model="email"
            placeholder="Enter your email"
          />
          <v-text-field 
            type="password"
            name="password"
            label="Password"
            v-model="password"
            placeholder="Enter your password"
          />
          <div v-html="error" class="error"></div>
          <v-btn class="cyan" @click="register">
            Register
          </v-btn>
        </section>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    background-color: white;
    margin: 20px;
  }
</style>
