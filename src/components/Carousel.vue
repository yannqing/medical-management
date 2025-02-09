<script setup lang="ts">
const slides = [
  'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
  'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
  'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
  'https://cdn.pixabay.com/photo/2017/10/18/13/38/older-2864181_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/04/20/21/11/sunset-1342101_1280.jpg',

]
</script>

<template>
  <v-carousel
    height="400"
    progress="primary"
    cycle
    hide-delimiters
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      cover
      :src="slide"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>

</style>
