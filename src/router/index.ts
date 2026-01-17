import { createRouter, createWebHistory } from 'vue-router'
import HomeMovie from '../views/HomeMovie.vue'
import MovieDetailPage from '../views/MovieDetailPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeMovie },
  { path: '/movie/:id', name: 'MovieDetail', component: MovieDetailPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router