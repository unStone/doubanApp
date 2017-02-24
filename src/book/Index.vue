<template>
  <div id="movies">
11111111
  </div>
</template>

<script>
  
  export default{
    data () {
      return {
        activeName: 'show'
      }
    },
    methods: {
      movieTab () {
        console.log(111)
      }
    }
  }
</script>

<style>
  a {
    color: #666;
  }
  .area {
    padding: 10px 0;
  }
  #movies {
    position: absolute;
    top: 36px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: auto;
  }
</style>
