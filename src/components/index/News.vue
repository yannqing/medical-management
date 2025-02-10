<script setup lang="ts">
const data = [
  {
    title: '行业咨询',
    items: [
      { text: '智慧互联网医院设计建设，构建智能数据中心', time: '2025-02-15' },
      { text: '构建智慧旅居养老系统，多维数据生态体系', time: '2025-02-15' },
      { text: '以生命健康为中心的物联网旅居养老运营平台', time: '2025-02-15' },
      { text: '人体健康防线的第一步是筛查', time: '2025-02-15' },
      { text: '行康健康管理如何赋能中医馆？', time: '2025-02-15' },]
  },

  {
    title: '公司新闻',
    items: [
      { text: '智慧互联网医院设计建设，构建智能数据中心', time: '2025-02-15' },
      { text: '构建智慧旅居养老系统，多维数据生态体系', time: '2025-02-15' },
      { text: '以生命健康为中心的物联网旅居养老运营平台', time: '2025-02-15' },
      { text: '人体健康防线的第一步是筛查', time: '2025-02-15' },
      { text: '行康健康管理如何赋能中医馆？', time: '2025-02-15' },]
  },

  {
    title: '产品咨询',
    items: [
      { text: '智慧互联网医院设计建设，构建智能数据中心', time: '2025-02-15' },
      { text: '构建智慧旅居养老系统，多维数据生态体系', time: '2025-02-15' },
      { text: '以生命健康为中心的物联网旅居养老运营平台', time: '2025-02-15' },
      { text: '人体健康防线的第一步是筛查', time: '2025-02-15' },
      { text: '行康健康管理如何赋能中医馆？', time: '2025-02-15' },]
  },
]
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <v-container
      class="spacing-playground pa-6"
      fluid
    >
      <v-row style="background-color: transparent">
        <v-col v-for="(items, index) in data" :key="index">
          <div style="width: 30vw; display: flex; justify-content: center; align-items: center; flex-direction: column">
            <v-list>
              <v-list-subheader style="font-size: 18px; font-weight: bold; color: #f78166">{{items.title}}</v-list-subheader>

              <v-list-item
                v-for="(item, i) in items.items"
                :key="i"
                :value="item"
                color="primary"
              >
                <template v-slot:append>
                  <div style="color: #BDBDBD; margin-left: 3px; font-size: 14px">
                    {{item.time}}
                  </div>
                </template>
                <v-list-item-title>{{item.text}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>
