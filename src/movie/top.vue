<template>
  <div id="show" class="showMovie" v-loading.showMovie="loading">
    <div>
      <div class="allMovies">
        <a v-for="(movie, index) in inTheater.subjects" :href="'#/movieDetail?' + movie.collect_count">
          <div class="moviePic" :style="{backgroundImage: 'url(' + movie.images.small + ')'}"></div>
          <div class="movieTitle">{{movie.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchMovieType } from '../store/api'
  import areaData from '../store/area'
  
  export default{
    data () {
      return {
        area: '',
        start: 0,
        loading: true,
        areaValue: '',
        areaData: areaData,
        inTheater: {
          title: '',
          count: 0,
          start: 0,
          total: 0,
          subjects: []
        }
      }
    },
    mounted () {
      fetchMovieType('movie/top250?count=20&start=0')
        .then((data) => {
          this.inTheater = data
          this.loading = false
        })
    }
  }
</script>

<style>
  a {
    color: #666;
  }
  .area {
    padding: 10px 0;
    font-size: 14px;
  }
  .showMovie {
    overflow: auto;
  }
  .allMovies {
    padding-top: 10px;
  }
  .allMovies a {
    float: left;
    width: 25%;
    height: 100px;
  }
  .moviePic {
    height: 50px;
    width: 50px;
    margin: 0 auto 10px;
    background-position: center center;
    background-size: cover;
  }
  .movieTitle {
    font-size: 14px;
    padding: 0 5px;
  }
  .select {
    margin-right: 20px;
  }
</style>
