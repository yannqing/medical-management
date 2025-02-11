<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HomeLayout from '@/layouts/HomeLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

const route = useRoute()
const layout = computed(() => {
  const layoutName = route.meta.layout || 'home'
  return layoutName === 'blank' ? BlankLayout : HomeLayout
})
</script>

<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<style scoped></style>
