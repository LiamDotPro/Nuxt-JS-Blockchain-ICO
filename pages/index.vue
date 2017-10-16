<template>
  <section>
    <page-header/>
    <page-top-info></page-top-info>
    <tile-left></tile-left>
    <tile-right></tile-right>
    <logo-box></logo-box>
  </section>
</template>

<script>
  import PageHeader from '../components/PageHeader.vue'
  import PageTopInfo from '../components/PageTopInfo.vue'
  import TileLeft from '../components/tile-left.vue'
  import TileRight from '../components/tile-right.vue'
  import LogoBox from '../components/LogoBox.vue'

  export default {
    components: {
      LogoBox,
      PageHeader,
      PageTopInfo,
      TileLeft,
      TileRight
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

</style>
