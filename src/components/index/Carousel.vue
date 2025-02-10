<script setup lang="ts">
const slides = [
  'https://cdn.pixabay.com/photo/2021/11/20/03/16/doctor-6810750_1280.png',
  'https://cdn.pixabay.com/photo/2024/08/26/14/33/ai-generated-8999615_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/03/26/11/57/pills-8656650_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/09/08/15/43/bacteria-3662695_1280.jpg',

]
</script>

<template>
  <v-carousel
    height="400"
    progress="#f78166"
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
