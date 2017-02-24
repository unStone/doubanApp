import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../movie/Index'
import Book from '../book/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }
  ]
})
