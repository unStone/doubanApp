<template>
  <div id="movies">
    <div>
      <el-tabs v-model="activeName" @tab-click="movieTab">
        <el-tab-pane label="上映电影" name="show">
          <s-movie></s-movie>
        </el-tab-pane>
        <el-tab-pane label="豆瓣top250" name="top250">
          <top></top>
        </el-tab-pane>
    </div>
  </div>
</template>

<script>
  import sMovie from './show.vue'
  import top from './top.vue'
  
  export default{
    components: {
      sMovie,
      top
    },
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
