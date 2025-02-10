<template>
  <v-sheet elevation="3" rounded="true" color="blue-lighten-4">
    <v-tabs
      v-model="tab"
      :items="tabs"
      align-tabs="center"
      height="60"
      slider-color="#f78166"
    >
      <template v-slot:tab="{ item }">
        <v-tab
          :prepend-icon="item.icon"
          :text="item.text"
          :value="item.value"
          class="text-none"
        ></v-tab>
      </template>

      <template v-slot:item="{ item }">
        <v-tabs-window-item :value="item.value" class="pa-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
        </v-tabs-window-item>
      </template>
    </v-tabs>
  </v-sheet>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('tab-1');
const tabs = [
  {
    icon: 'mdi-book-open-page-variant',
    text: '大医院信息化',
    value: 'tab-1',
  },
  {
    icon: 'mdi-handshake-outline',
    text: '小医院信息化',
    value: 'tab-2',
  },
  {
    icon: 'mdi-license',
    text: '区域化项目',
    value: 'tab-3',
  },
  {
    icon: 'mdi-shield-lock-outline',
    text: '智慧养老',
    value: 'tab-4',
  },
  {
    icon: 'mdi-shield-lock-outline',
    text: '健康管理',
    value: 'tab-5',
  },
  {
    icon: 'mdi-shield-lock-outline',
    text: '中医养生',
    value: 'tab-6',
  },
  {
    icon: 'mdi-shield-lock-outline',
    text: '口腔/药房诊所',
    value: 'tab-7',
  },
];
</script>

<style scoped>

</style>
