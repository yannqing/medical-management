<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const myRoutes = router.getRoutes().filter((route) => {
  // 只保留顶级路由（路径中只有一个 / 的路由）TODO 提取路径
  return route.path.split('/').length === 2 && route.path.startsWith('/introduction')
})[0]
const route = useRoute()

const tab = ref(myRoutes.path)

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

const md = marked('**行心科技产品概述**\n' +
  '\n' +
  '  \n' +
  '\n' +
  'HIS是医疗机构的神经系统，控制基础业务信息，因此，医疗健康机构对HIS系统依赖性较高。行心认为，HIS是“以点-到线-成面”的医疗健康机构商业转型的利器，是未来互联网+医疗的一条循序渐进的、可靠的盈利模式，通过计算机软硬件技术、网络通讯技术等现代化手段，对医院及其所属各部门对人流、物流、财流进行综合管理，对在医疗活动各阶段中产生的数据进行采集、存储、处理、提取、传输、汇总、加工生成各种信息，从而为医院的整体运行提供全面的、自动化的管理及各种服务的信息。\n' +
  '\n' +
  '\n' +
  '\n' +
  '行心产品从最初的”以财务管理为中心”为主要模式逐步向”以病人为中心、以医疗信息为主线”的全新管理模式转变,有强大客户基础，凭借成熟、强大而稳定的HIS产品，53个子系统，经历10年200多家客户的考验和见证。\n' +
  '\n' +
  '\n' +
  '\n' +
  '2013年开始，公司总经理林总抓住了国家政策向中小医院倾斜、移动医疗、养老产业等机遇，决心对产品进行改革。林总带领开发团队开始研发新的产品，率先对HIS产品进行了前所未有的大胆尝试。\n' +
  '\n' +
  '\n' +
  '\n' +
  '★对HIS架构进行云平台（云存储大数据）的改造，支持中小医疗机构信息化的发展。\n' +
  '\n' +
  '\n' +
  '\n' +
  '★响应国家“医养结合”的号召，把HIS改造成医养护结合的跨越式养老服务产品。\n' +
  '\n' +
  '\n' +
  '\n' +
  '★移动医疗以移动互联网和可穿戴设备为基础，满足医护人员的移动办公和病人个性化需求。\n' +
  '\n' +
  '\n' +
  '\n' +
  '★行心医疗云将云计算融入到医疗信息化服务中，将医院信息系统、电子病历、远程医疗等应用融合云计算，开发出按需付费、随时可用的SaaS模式，具有“高性能、低成本、随时可用、跨地域、跨平台、跨服务”的六大特色。\n' +
  '\n' +
  '\n' +
  '\n' +
  '2014年，行心公司创新性的提出了“HIS+”的概念，凭借多层次、多系统的完整而全面的产品线和丰富经验，以“低成本，高性价比”的原则，帮助广大中小医疗健康机构信息化管理能力和销售服务效率。\n' +
  '\n' +
  '\n' +
  '\n' +
  '\n' +
  '\n' +
  '- ![图片1.png](http://www.xyhis.com/upload/201701/1484720970106155.png)\n' +
  '\n' +
  '\n' +
  '\n' +
  '\n' +
  '\n' +
  '**公司四大系统产品介绍**\n' +
  '\n' +
  '**\n' +
  '**\n' +
  '\n' +
  '| **医院HIS系统**                                              | **医疗云系统**                                               | **智慧养老系统**                                             | **移动医疗系统**                                             |\n' +
  '| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |\n' +
  '| **★**医院信息管理系统电子病历管理系统检验信息管理系统医学影像存档通讯系统**★**医院数据分析与决策支持系统区域卫生医疗信息平台手术麻醉系统临床路径管理系统 | **★**健康管理系统中医养生管理系统体检管理系统口腔管理系统**★**云HIS | ★养老院管理系统社区养老管理系统居家养老管理系统★医养结合管理系统 | 移动查房系统移动预约挂号系统**★**移动电子病历系统**★**远程会诊系统 移动药房系统★移动宣传系统 |\n' +
  '\n' +
  '\n' +
  '\n' +
  '**行心产品特色**\n' +
  '\n' +
  '\n' +
  '\n' +
  '1、遵循数字化建设的内在规律及各系统之间的相互依赖关系\n' +
  '\n' +
  '\n' +
  '\n' +
  'Ø 深度：业务层→知识层→决策层；\n' +
  '\n' +
  '\n' +
  '\n' +
  'Ø 广度：临床→经济→管理→教学→科研；\n' +
  '\n' +
  '\n' +
  '\n' +
  'Ø 内容：医技→门诊→住院；\n' +
  '\n' +
  '\n' +
  '\n' +
  '2、以病人为中心，以医疗信息为主线\n' +
  '\n' +
  '\n' +
  '\n' +
  '以多媒体导诊系统向病人介绍医疗机构，了解医疗机构和就诊过程；采用就诊卡技术，简化病人就医流程；病人各项费用查询功能，让病人知道费用的明细；PACS系统和LIS系统将影像和化验结果与病人的基本信息相结合，在医生工作站上可以及时、准确地得到病人的各种生命指标。\n' +
  '\n' +
  '\n' +
  '\n' +
  '3、数据为管理服务\n' +
  '\n' +
  '\n' +
  '\n' +
  '自定义报表、自定义图形分析、全成本核算、自定义领导查询系统，根据医疗机构的管理规范和领导查询的需要，实时、准确、动态生成医疗机构管理信息和相关报表为领导和管理者提供决策依据。\n' +
  '\n' +
  '\n' +
  '\n' +
  '4、以临床信息为核心\n' +
  '\n' +
  '\n' +
  '\n' +
  '从医疗机构的核心业务处理过程着手，围绕医生工作站和护士工作站，将临床信息管理纳入到整个系统的业务流程中。\n' +
  '\n' +
  '\n' +
  '\n' +
  '5、坚持一体化的设计思想\n' +
  '\n' +
  '\n' +
  '\n' +
  '将“统一领导、统一规划、统一标准、分步实施、分级管理、网络互联、信息共享”作为贯穿于系统建设各环节的基本原则。')
</script>

<template>
  <div class="d-flex flex-row">
    <!-- 左侧导航栏，固定宽度 -->
    <div style="width: 20vw; margin-bottom: 40px;" class="mx-10 my-10">
      <div class="text-3xl font-bold mb-5">
        产品介绍
      </div>
      <v-tabs v-model="tab" color="primary" direction="vertical">
        <v-tab
          v-for="(item, index) in myRoutes.children"
          :key="index"
          :value="myRoutes.path + '/' + item.path"
          @click="router.push({ path: myRoutes.path + '/' + item.path })"
          prepend-icon="mdi-account"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </div>

    <!-- 右侧内容区域，自适应宽度 TODO 提取路径 -->
    <div style="margin-top: 40px; margin-bottom: 40px; width: 80vw" v-if="route.path !== '/introduction'">
      <router-view />
    </div>
    <div style="margin-top: 40px; margin-bottom: 40px; width: 80vw" v-else>
      <div v-html="md"/>
    </div>
  </div>
</template>

<style scoped></style>
