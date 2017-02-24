<template>
  <div id="show" class="showMovie" v-loading.movies="loading">
    <div class="changeArea">
      <el-row type="flex" justify="space-around">
        <el-col :span="12">
          <div class="showMovies">
            <div class="area">{{inTheater.title}}</div>
          </div>
        </el-col>
        <el-col :span="4">
          <spinner :show="load"></spinner>
        </el-col>
        <el-col :span="8">
          <el-select class="select" v-on:change="changeArea(area)" 
            v-model="areaValue"
            placeholder="地区"
          >
            <el-option
              v-for="item in areaData"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
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
      fetchMovieType(`movie/in_theaters?city=${this.area}&count=999`)
        .then((data) => {
          this.inTheater = data
          this.loading = false
        })
    },
    methods: {
      changeArea (areaValue) {
        this.loading = true
        fetchMovieType(`movie/in_theaters?city=${this.areaValue}&count=100`)
        .then((data) => {
          this.inTheater = data
          this.loading = false
        })
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
