import axios from 'axios'

/**
 * 利用代理
 */
const HOST = '/api/'

export function fetch (url) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url)
        .then(response => {
          resolve(response.data)
        })
  })
}

export function fetchMovieType (type) {
  return fetch(`${type}`)
}
