<template>
  <v-card
    class="movie-card"
    rounded="xl"
    elevation="2"
    hover
    @click="goToDetail"
  >
    <v-hover v-slot="{ isHovering, props }">
      <div
        v-bind="props"
        class="image-wrapper"
        :aria-label="movie.title"
      >
        <!-- Poster -->
        <v-img
          :src="movie.poster"
          :alt="movie.title"
          height="340"
          cover
        />

        <!-- Overlay -->
        <div
          class="overlay"
          :class="{ 'overlay--visible': isHovering }"
        >
          <div class="overlay-content">
            <!-- Title -->
            <h3
              class="title"
              :title="movie.title"
            >
              {{ movie.title }}
            </h3>

            <!-- Year -->
            <p class="year">
              {{ movie.releaseYear }}
            </p>

            <!-- Overview -->
            <p class="overview">
              {{ movie.shortDescription }}
            </p>

            <v-btn
              size="x-small"
              variant="tonal"
              color="primary"
              class="mt-2"
            >
              View details
            </v-btn>
          </div>
        </div>
      </div>
    </v-hover>
  </v-card>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  movie: {
    id: number
    title: string
    poster: string
    releaseYear: number
    shortDescription: string
  }
}>()

const goToDetail = () => {
  router.push({ name: 'MovieDetail', params: { id: props.movie.id } })
}
</script>
<style scoped>
.movie-card {
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.movie-card:hover {
  transform: translateY(-6px);
}

/* Image wrapper */
.image-wrapper {
  position: relative;
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.88),
    rgba(0, 0, 0, 0.35)
  );
  opacity: 0;
  transition: opacity 0.25s ease;
  display: flex;
  align-items: flex-end;
}

.overlay--visible {
  opacity: 1;
}

/* Overlay content */
.overlay-content {
  padding: 14px;
  width: 100%;
  color: #fff;
}

/* Typography */
.title {
  font-size: clamp(0.85rem, 2vw, 1rem);
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.year {
  font-size: 0.7rem;
  opacity: 0.75;
  margin: 2px 0 6px;
}

.overview {
  font-size: 0.72rem;
  line-height: 1.4;
  opacity: 0.9;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>