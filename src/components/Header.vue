<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import router from '@/router'
import { useRoute, useRouter } from 'vue-router'
import { useConstantStore } from '@/stores/constant.ts'
import IndexDrawer from '@/components/IndexDrawer.vue'
import { TABS } from '@/constant/routerType.ts'

const routes = router.getRoutes().filter(route => {
  // 只保留顶级路由（路径中只有一个 / 的路由）
  return route.meta && route.meta.type === TABS;
});
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

    <v-btn icon @click="console.log('routes', routes)">
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
        <v-menu
          v-for="(item, index) in routes"
          open-on-hover
          :key="index"
          :disabled="item.children.length === 0"
        >
          <template v-slot:activator="{ props }">

          <v-tab
            :key="item.path"
            color="#f78166"
            rounded="lg"
            v-bind="props"
            :value="item.path"
            @click="router2.push(item.path)"
          >{{item.name}}</v-tab>
          </template>

          <v-list>
            <v-list-item
              v-for="(it, index) in item.children"
              :key="index"
              class="cursor-pointer"
              @click="router2.push(item.path + '/' + it.path)"
            >
              {{it.name}}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </template>

  </v-toolbar>

  <!--    侧边栏-->
  <IndexDrawer />

</template>

<style scoped>

</style>
