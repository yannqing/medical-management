<template>
<!--  主页-->
<div>
<!--  轮播图-->
  <Carousel />
<!--  介绍-->
  <Introduce />
<!--  解决方案-->
  <DealMethod />
<!--  关于-->
  <About />
<!--  新闻-->
  <News />
</div>
</template>
<script setup lang="ts">

import Carousel from '@/components/index/Carousel.vue'
import Introduce from '@/components/index/Introduce.vue'
import DealMethod from '@/components/index/DealMethod.vue'
import About from '@/components/index/About.vue'
import News from '@/components/index/News.vue'
</script>

<style scoped>

</style>
