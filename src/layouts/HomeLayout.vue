<template>
  <v-card style="">
    <Header />
    <Footer />
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router'
import { useRouter } from 'vue-router'
import Footer from '@/components/index/Footer.vue'
import Header from '@/components/index/Header.vue'

const routes = router.getRoutes();

const router2 = useRouter();

const tab = ref(null); // 使用 ref 创建响应式变量
</script>

<style scoped>

</style>
