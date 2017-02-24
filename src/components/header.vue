<template>
  <div class="nav clearfix">
    <a v-for="item in column" :href=item.path style="color: #14D449">{{item.label}}</a>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        column: [
          {
            path: '#/movie',
            label: '电影'
          },
          {
            path: '#/book',
            label: '图书'
          },
          {
            path: '#/music',
            label: '音乐'
          },
          {
            path: '#/radio',
            label: '广播'
          }
        ]
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
  .nav a {
    float: left;
    width: 25%;
    text-align: center;
  }
  .clearfix::after {
    display: block;
    content: "";
    clear: both;
  }
  .nav {
    height: 20px;
    padding: 6px 0 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .nav:after {
    position: absolute;
    content: '';
    height: 1px;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #999;
    transform: scaleY(.5);
    -webkit-transform: scaleY(.5);
  }
</style>
