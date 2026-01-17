<template>
<v-app-bar app fixed color="primary" dark elevated>
    <v-toolbar-title class="mr-12">
      <v-img
        src="/logo.png"
        alt="Movie Catalog"
        max-width="40"
        class="mr-2"
      ></v-img>
      Chilean Movies
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      v-model="searchQuery"
      placeholder="Search movies..."
      append-icon="mdi-magnify"
      hide-details
      dense
      solo-inverted
      rounded
      style="max-width: 300px;"
      @keyup.enter="onSearch"
    ></v-text-field>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { emit }) {
    const searchQuery = ref('')

    const onSearch = () => {
      // Emit search event to parent
      emit('search', searchQuery.value)
    }

    return { searchQuery, onSearch }
  },
})
</script>
