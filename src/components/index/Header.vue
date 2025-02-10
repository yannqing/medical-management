<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import router from '@/router'
import { useRoute, useRouter } from 'vue-router'
import { useConstantStore } from '@/stores/constant.ts'
import IndexDrawer from '@/components/IndexDrawer.vue'

const routes = router.getRoutes();
const router2 = useRouter();
const route = useRoute();
const constant = useConstantStore();

// 先定义 tab，使用 route.path 作为初始值
const tab = ref(route.path)

// 监听路由变化
watch(
  () => route.path,
  (newPath) => {
    tab.value = newPath
  }
)

// 确保初始值正确
onMounted(() => {
  tab.value = route.path
})
</script>

<template>
  <v-toolbar color="blue-lighten-1" floating dense>
    <v-app-bar-nav-icon @click.stop="constant.changeDrawer()"></v-app-bar-nav-icon>

    <v-toolbar-title>智慧医疗</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs
        v-model="tab"
        align-tabs="title"
      >
        <v-tab
          v-for="item in routes"
          :key="item.path"
          color="#f78166"
          rounded
          :value="item.path"
          @click="router2.push(item.path)"
        >{{item.name}}</v-tab>
      </v-tabs>
    </template>

  </v-toolbar>

  <!--    侧边栏-->
  <IndexDrawer />

  <v-tabs-window v-model="tab">
    <v-tabs-window-item
      v-for="item in routes"
      :key="item.path"
      :value="item.path"
      class="bg-accent-500"
    >
      <v-card flat color="accent">
        <div style="">
          <router-view />
        </div>
      </v-card>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<style scoped>

</style>
