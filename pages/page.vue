<template>
  <div class="">
    <h1>login</h1>
    <input v-model="userName" id="username" placeholder="username" type="text">
    <input v-model="passWord" id="password" placeholder="password" type="text">
    <button class="btn btn-success">Login</button>
  </div>
</template>

<script>
  // import socket from '../plugins/socket.io'

  export default {
    name: '',
    data() {
      return {
        userName: '',
        passWord: ''
      }
    },
    methods: {
      increaseCounter: function () {
        this.$store.dispatch('incrementCounter')
      },
      increaseCounters() {
        this.$store.dispatch('incrementCounter')
      }
    },
    computed: {
      getCounter: function () {
        return this.$store.state.counter
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>

</style>
