<script setup lang="ts">

const aboutValue = {
  descritpion: '广州市行心信息科技有限公司创立于2011年,是一家专注于医疗、健康机构信息化服务的高新技术企业，自成立以来，沿着“以科技改变医疗健康产业”的宗旨，以“行者之心，永无止境”的信念，坚持自主研发多项医疗健康机构信息化产品，产品覆盖各级医疗机构、养老院、养生等多个领域，长期致力于为医疗健康行业提供专业的信息化解决方案。行心的“引流+系统+金融”医康养平台可以赋能医养机构获客引流、服务升级，实现整合上市。\n' +
    '\n' +
    '       行心科技秉承行者文化，从医疗机构到健康产业，从网络版到三层机构到云平台，不断推陈出新，自我超越。多年来，行心科技获得了“国家高新企业”、“国家系统集成资质”、“AAA级信用企业”、“ISO9001认证”等多项资质认证。',
  imageUrl: 'https://cdn.pixabay.com/photo/2024/01/03/20/42/kid-8486222_1280.jpg'
}

</script>

<template>
<div style="display: flex; flex-direction: row; margin-top: 20px;">
  <div style="margin-top: 70px">
    {{aboutValue.descritpion}}
  </div>
  <div>
    <v-img :src="aboutValue.imageUrl" cover width="250"/>
  </div>
</div>
</template>

<style scoped>

</style>
