<template>
  <div class="PageTopInfo">
    <div class="container">
      <div class="media">
        <img class="d-flex align-self-center mr-3" src="http://via.placeholder.com/350x150"
             alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0">Center-aligned media</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p class="mb-0">
            {{ pair }}
          </p>
          <button class="btn btn-default" @click="testAxios">Test</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'PageTopInfo',
    data() {
      return {
        pair: 'loading'
      }
    },
    methods: {
      testAxios: function () {
        axios.get('http://localhost:2000/test').then(res => {
          this.pair = res.data.Data.Buy[0].Price
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

  .PageTopInfo {

    .media {
      margin-top: 60px;
      margin-bottom: 60px;
    }

    .picture-square {
      margin-top: 80px;
    }

    .info-text {

      margin-top: 200px;

      h1 {
        font-size: 36px;
      }

      h2 {
        font-size: 20px;
      }
    }
  }

</style>
