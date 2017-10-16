<template>
  <div class="tile-left">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <img src="http://via.placeholder.com/650x250"/>
        </div>

        <div class="col-lg">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum eos et, eveniet exercitationem, fugiat illo illum molestias natus odit porro quia repellendus ut vel, voluptates. Atque perspiciatis ratione voluptas!
          </h5>
          <button class="btn btn-default">Go To Something</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tile-left',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

  .tile-left {
    margin-top: 60px;
    margin-bottom: 60px;
  }

</style>
