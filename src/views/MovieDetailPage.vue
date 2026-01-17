<template>
  <v-container class="py-8">
    <!-- Back button -->
    <v-btn
      variant="text"
      prepend-icon="mdi-arrow-left"
      @click="$router.push('/')"
    >
      Back to catalog
    </v-btn>

    <!-- Movie found -->
    <v-card
      v-if="movie"
      class="mt-6"
      rounded="xl"
      elevation="4"
    >
      <v-row>
        <!-- Poster -->
        <v-col cols="12" md="4">
          <v-img
            :src="movie.poster"
            height="520"
            cover
            class="rounded-lg"
          />
        </v-col>

        <!-- Info -->
        <v-col cols="12" md="8">
          <v-card-title class="text-h4 font-weight-bold">
            {{ movie.title }}
          </v-card-title>

          <v-card-subtitle class="text-subtitle-1 mb-4">
            {{ movie.year }}
          </v-card-subtitle>

          <v-card-text class="text-body-1 text-justify">
            {{ movie.overview }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- Movie not found -->
    <v-alert
      v-else
      type="error"
      class="mt-8"
      variant="tonal"
    >
      Movie not found
    </v-alert>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import moviesData from '../assets/data/tmdb_movies_Chile_20260117_150239.json'

const route = useRoute()
const movieId = Number(route.params.id)

interface Movie {
  id: number
  title: string
  year: string
  overview: string
  poster: string
}

const movie = computed<Movie | undefined>(() => {
  const m = moviesData.movies.find(
    (movie: any) => Number(movie.id) === movieId
  )

  if (!m) return undefined

  return {
    id: Number(m.id),
    title: m.title,
    year: m.year,
    overview: m.overview,
    poster:
      m.poster_urls?.['2x'] ||
      m.poster_urls?.['1x'] ||
      m.poster_url ||
      '',
  }
})
</script>
