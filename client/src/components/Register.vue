<template>
 <div>
   <h1>Register</h1>

   <input type="email" name="email" placeholder="email" v-model="email" />
   <br>
   <input type="password" name="password" placeholder="password" v-model="password"/>
   <br>
   <button
   @click="register">
     Register
   </button>
 </div>
  </template>

<script>
import AuthenticationServices from '@/services/AuthenticationServices'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationServices.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
