<script setup lang="ts">
import HomeLayout from '@/layouts/HomeLayout.vue'
import { ref } from 'vue'

const drawer = ref(null)
</script>

<template>
  <v-app>
    <v-main>
      <HomeLayout />
<!--        <v-navigation-drawer-->
<!--          v-model="drawer"-->
<!--          temporary-->
<!--        >-->
<!--          <v-list-item-->
<!--            prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"-->
<!--            title="John Leider"-->
<!--          ></v-list-item>-->

<!--          <v-divider></v-divider>-->

<!--          <v-list density="compact" nav>-->
<!--            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>-->
<!--            <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>-->
<!--          </v-list>-->
<!--        </v-navigation-drawer>-->
<!--          <div class="d-flex justify-center align-center h-100">-->
<!--            <v-btn-->
<!--              color="primary"-->
<!--              @click.stop="drawer = !drawer"-->
<!--            >-->
<!--              Toggle-->
<!--            </v-btn>-->
<!--          </div>-->
    </v-main>
  </v-app>
</template>


<style scoped>

</style>
