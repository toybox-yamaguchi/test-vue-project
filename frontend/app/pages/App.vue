<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import normalizeCSS from '../libs/css/normalize.css'
  import bootstrapCSS from '../libs/css/bootstrap.min.css'
  import slickCSS from '../libs/sass/slick.scss'

  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg:'Hello Vue!'
      }
    }
  }
</script>

<style lang="sass">
  $color:red;
  body {
    font-family: Helvetica, sans-serif;

    .aaa{
      color:$color;
    }
  }
</style>
