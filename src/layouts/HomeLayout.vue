<template>
  <v-container fluid class="pa-0">
    <Header />
    <v-container fluid class="fill-height pa-0">
      <router-view class="w-full" />
    </v-container>
    <Footer />
  </v-container>
</template>

<script setup lang="ts">
import Footer from '@/components/index/Footer.vue'
import Header from '@/components/index/Header.vue'
</script>

<style scoped>
.v-container {
  max-width: 100% !important;
}
</style>
