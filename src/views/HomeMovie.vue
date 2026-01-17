<template>
  <v-app>
    <!-- Navbar -->
    <Navbar @search="filterMovies" />

    <!-- Main content -->
<v-container fluid class="pt-12 pb-8" style="padding-top: 70px !important;">
  <v-row dense align="stretch">
    <v-col
      v-for="movie in filteredMovies"
      :key="movie.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
    >
      <MovieCard :movie="movie" />
    </v-col>
  </v-row>
</v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/NavBar.vue'
import MovieCard from '../components/MovieCard.vue'
import movieData from '../assets/data/tmdb_movies_Chile_20260117_150239.json'

interface Movie {
  id: number
  title: string
  poster: string
  releaseYear: number
  shortDescription: string
}

export default defineComponent({
  components: { Navbar, MovieCard },
  setup() {
    const router = useRouter()
    const searchQuery = ref('')

    const movies: Movie[] = movieData.movies.map((m: any) => ({
      id: Number(m.id),
      title: m.title,
      poster:
        m.poster_urls?.['2x'] ||
        m.poster_urls?.['1x'] ||
        m.poster_url ||
        '',
      releaseYear: Number(m.year),
      shortDescription: m.overview,
    }))

    const filteredMovies = computed(() => {
      if (!searchQuery.value) return movies
      return movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    const filterMovies = (query: string) => {
      searchQuery.value = query
    }

    const goToDetail = (id: number) => {
      router.push({ name: 'MovieDetail', params: { id: String(id) } })
    }

    return { filteredMovies, filterMovies, goToDetail }
  },
})
</script>
