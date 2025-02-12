<script setup lang="ts">

import { useConstantStore } from '@/stores/constant.ts'
import router from '@/router'
import { COMMON_DRAWER } from '@/constant/routerType.ts'
import { useUserStore } from '@/stores/user.ts'

const myCommonDrawRoutes = router.getRoutes().filter( router => {
  return router.meta && router.meta.type === COMMON_DRAWER
})

const constant = useConstantStore()
const userStore = useUserStore()
</script>

<template>
  <v-navigation-drawer
    v-model="constant.drawer"
    temporary
    color="blue-lighten-1"
  >
    <v-list-item
      v-if="userStore.isLogin"
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leader"
    ></v-list-item>

    <v-list-item
      v-else
      class="flex justify-center align-center"
    >
      <div class="flex justify-center">
        未登录
      </div>
    </v-list-item>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in myCommonDrawRoutes"
        :key="index"

        prepend-icon="mdi-account"
        :title="item.name"
        :value="item.path"
      />

<!--&lt;!&ndash;      患者&ndash;&gt;-->
<!--      <v-list-item prepend-icon="mdi-forum" title="预约管理" value="about1"></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-forum" title="费用查询" value="about2"></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-forum" title="查看医疗记录" value="about3"></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-forum" title="健康管理与提醒" value="about4"></v-list-item>-->

<!--&lt;!&ndash;      医生&ndash;&gt;-->
<!--      <v-list-item prepend-icon="mdi-forum" title="排班管理" value="about5"></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-forum" title="患者预约" value="about6"></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-forum" title="医疗记录" value="about7"></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-forum" title="费用管理与开票" value="about8"></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-forum" title="在线咨询与反馈" value="about9"></v-list-item>-->

<!--&lt;!&ndash;      公共部分&ndash;&gt;-->
<!--      <v-list-item prepend-icon="mdi-view-dashboard" title="个人信息" value="home"></v-list-item>-->
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="#f78166" v-if="userStore.isLogin">
          Logout
        </v-btn>
<!--        TODO 常量-->
        <v-btn
          @click="router.push('/auth/login')"
          block
          color="#f78166"
          v-else>
          Login
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
