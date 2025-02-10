<script setup lang="ts">
  const data = [
    {
      image: 'https://cdn.pixabay.com/photo/2023/12/26/12/11/ai-generated-8470065_1280.jpg',
      alt: 'John',
      title: 'HIS 系统',
      description: '行心HIS系统源于北美技术，经过17年HIS技术沉淀，现已拥有100多套子系统，十四项著作权，100多人技术团队。已有300多家医院见证行心HIS系统，成熟HIS系统采用专人驻点模式，及时解决一切系统问题。'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/07/29/17/07/ai-generated-8157382_1280.jpg',
      alt: 'John',
      title: '医疗云',
      description: '行心HIS系统源于北美技术，经过17年HIS技术沉淀，现已拥有100多套子系统，十四项著作权，100多人技术团队。已有300多家医院见证行心HIS系统，成熟HIS系统采用专人驻点模式，及时解决一切系统问题。'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2024/10/09/06/08/ai-generated-9106907_1280.jpg',
      alt: 'John',
      title: '医疗信息化',
      description: '行心HIS系统源于北美技术，经过17年HIS技术沉淀，现已拥有100多套子系统，十四项著作权，100多人技术团队。已有300多家医院见证行心HIS系统，成熟HIS系统采用专人驻点模式，及时解决一切系统问题。'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2021/11/20/03/17/doctor-6810751_1280.png',
      alt: 'John',
      title: '健康管理',
      description: '行心HIS系统源于北美技术，经过17年HIS技术沉淀，现已拥有100多套子系统，十四项著作权，100多人技术团队。已有300多家医院见证行心HIS系统，成熟HIS系统采用专人驻点模式，及时解决一切系统问题。'
    },
  ]
</script>

<template>
<div style="display: flex; flex-direction: row;">
  <v-container
    class="spacing-playground pa-6"
    fluid
  >
  <v-row>
    <v-col v-for="(item, index) in data" :key="index">
      <div style="width: 20vw; display: flex; justify-content: center; align-items: center; flex-direction: column">
        <v-avatar size="120" style="">
          <v-img
            :alt="item.alt"
            :src="item.image"
          ></v-img>
        </v-avatar>
        <div style="margin: 5px; font-size: 20px; font-weight: bold; color: #f78166">
          {{item.title}}
        </div>
        <div>
          {{item.description}}
        </div>
      </div>
    </v-col>
  </v-row>
  </v-container>
</div>

</template>

<style scoped>

</style>
