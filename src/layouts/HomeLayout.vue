<template>
  <v-card>
    <v-toolbar color="blue-lighten-1" style="">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
            :text="item.name"
            color="primary"
            :value="item"
            @click="router2.push(item.path)"
          ></v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="item in routes"
        :key="item.path"
        :value="item"
        class="bg-accent-500"
      >
        <v-card flat color="accent">
          <div style="">
            <router-view />
          </div>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router'
import { useRouter } from 'vue-router'

const routes = router.getRoutes();

const router2 = useRouter();

const tab = ref(null); // 使用 ref 创建响应式变量
</script>

<style scoped>

</style>
