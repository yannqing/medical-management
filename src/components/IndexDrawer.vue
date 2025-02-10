<script setup lang="ts">

import { useConstantStore } from '@/stores/constant.ts'

const constant = useConstantStore()
</script>

<template>
  <v-navigation-drawer
    v-model="constant.drawer"
    temporary
    color="blue-lighten-1"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leader"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="#f78166">
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
