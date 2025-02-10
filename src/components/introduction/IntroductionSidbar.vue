<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const myRoutes = router.getRoutes().filter((route) => {
  // 只保留顶级路由（路径中只有一个 / 的路由）
  return route.path.split('/').length === 2 && route.path.startsWith('/introduction')
})
const route = useRoute()

const tab = ref('option-1')
</script>

<template>
  <div class="d-flex flex-row">
    <!-- 左侧导航栏，固定宽度 -->
    <div style="width: 200px; margin-bottom: 40px;" class="mt-10">
      <div class="text-3xl font-bold mb-5">
        产品介绍
      </div>
      <v-tabs v-model="tab" color="primary" direction="vertical">
        <v-tab
          v-for="(item, index) in myRoutes[0].children"
          :key="index"
          :value="item.path"
          @click="router.push({ path: myRoutes[0].path + '/' + item.path })"
          prepend-icon="mdi-account"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </div>

    <!-- 右侧内容区域，自适应宽度 -->
    <div style="margin-top: 40px; margin-bottom: 40px;" v-if="route.path !== '/introduction'">
      <router-view />
    </div>
    <div style="margin-top: 40px; margin-bottom: 40px;" v-else>
      <div>
        nih
      </div>
    </div>
  </div>
</template>

<style scoped></style>
