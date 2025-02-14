<template>
  <div>
    <v-img
      src="http://www.xyhis.com/include/thumb.php?dir=../upload/201606/1467179747.jpg&x=1920&y=250"
      cover
    />
    <div class="mx-10 my-10">
      <div class="text-3xl font-bold">公司简介</div>
    </div>
    <div class="mt-10">

    </div>

    <article class="prose my-10 w-full">
      <div v-html="htmlContent" class="markdown-content" />
    </article>

    <article class="prose prose-slate p-4 my-10 w-full">
      <div>{{htmlContent}}</div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const md = '\t广州市行心信息科技有限公司创立于2011年,是一家专注于医疗、健康机构信息化服务的高新技术企业，自成立以来，沿着“以科技改变医疗健康产业”的宗旨，以“行者之心，永无止境”的信念，坚持自主研发多项医疗健康机构信息化产品，产品覆盖各级医疗机构、[养老院](http://www.xyhis.com/chanpin/yanglao-cn.html)、[养生](http://www.xyhis.com/chanpin/zhongyiyangsheng-cn.html)等多个领域，长期致力于为医疗健康行业提供专业的信息化解决方案。行心的“引流+系统+金融”医康养平台可以赋能医养机构获客引流、服务升级，实现整合上市。\n' +
  '\n' +
  '\t行心科技秉承行者文化，从医疗机构到健康产业，从CS模式到三层机构再到云平台，不断推陈出新，自我超越。多年来，行心科技获得了“国家高新企业”、“国家系统集成资质”、“AAA级信用企业”、“ISO9001认证”等多项资质认证。\n' +
  '\n' +
  '\t行心科技拥有强大的软件研发能力，公司员工超过100人，其中技术人员超过80%，拥有成熟的医疗软件经验，具备先进的云计算开发技术，已经获得41项著作权、1项发明专利、6项实用新型专利、1项外观专利。行心科技总部位于广州，在北京、广东、湖南、湖北等地均设有营销网点，拥有完善的市场营销网络，在全国各地已经成功的为300多家医疗健康机构提供服务，拥有丰富、稳定、成熟的的信息化解决方案和服务经验。\n' +
  '\n' +
  '\t行者之心，永无止境！行心科技在帮助300多家医疗、健康机构实现信息化的基础上，重装起航，积极响应国家“大众创业，万众创新”的号召，正在为全国各地的中小医疗机构提供全新助力，相信医疗健康行业明天更美好！\n' +
  '\n' +
  '\n' +
  '\n' +
  '- ![行心介绍1.jpg](http://www.xyhis.com/upload/201606/1466672621951174.jpg)'

const htmlContent = marked(md)
</script>

<style>

</style>
