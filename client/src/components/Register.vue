<template>
  <div>
    <h1>Register</h1>
    <input 
      type="email"
      name="email"
      v-model="email"
      placeholder="Enter your email"
    />
    <input 
      type="password"
      name="password"
      v-model="password"
      placeholder="Enter your password"
    />
    <button 
      @click="register"
    >
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log('register button was clicked', response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
