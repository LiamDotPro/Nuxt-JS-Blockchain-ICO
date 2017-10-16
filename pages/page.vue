<template>
  <div class="">
    <h1>{{ getCounter }}</h1>
    <button @click="increaseCounter">Add</button>
    <button @click="increaseCounters">Add</button>
  </div>
</template>

<script>
  import socket from '../plugins/socket.io'

  export default {
    name: '',
    data() {
      return {
        msg: ''
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
      socket.emit('test', {
        hello: 'hello'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
