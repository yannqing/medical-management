<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HeadCard from '@/components/admin/HeadCard.vue'
import { useRoute, useRouter } from 'vue-router'
import type { BaseResponse } from '@/type/public.ts'
import { getMyselfInfoAction } from '@/api/admin/UserManagement.ts'
import { toast } from 'vue-sonner'
import { AxiosError } from 'axios'
import { SYSTEM_ERROR } from '@/type/ErrorType.ts'
import { useUserStore } from '@/stores/user.ts'
import { logoutAction } from '@/api/auth'

const route = useRoute();
const router = useRouter();

const drawer = ref(true)
const rail = ref(false)
const userStore = useUserStore();


const handleLogout = async () => {
  try {
    const { data: res }: { res: BaseResponse<any> } = await logoutAction();
    console.log("logout res:", res);
    if (res.code === 20010) {
      toast.success("退出登录成功！");
    } else {
      toast.error(res.msg);
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.msg) {
      toast.error(error.response.data.msg);
    } else {
      toast.error(SYSTEM_ERROR);
    }
  }
}

onMounted(async () => {
  try {
    const { data: res }: { res: BaseResponse<any> } = await getMyselfInfoAction();
    console.log("get myself into res:", res);
    if (res.code === 200) {
      localStorage.setItem('avatar', res.data.avatar)
    } else {
      toast.error(res.msg);
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.msg) {
      toast.error(error.response.data.msg);
    } else {
      toast.error(SYSTEM_ERROR);
    }
  }
})
</script>

<template>
  <v-card height="100vh" style="background: #f1f5f9">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        expand-on-hover
        :rail="rail"
        class="mt-5 ml-5"
        style="border-radius: 15px; height: 93vh"
        permanent
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leader"
        ></v-list-item>

        <v-divider />
        <v-list density="compact" nav>
          <v-list-subheader>Home</v-list-subheader>
<!--          TODO 变量-->
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
            :active="route.path === '/admin/dashboard'"
            value="dashboard"
            @click="router.push('/admin/dashboard')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-box"
            title="Account"
            :active="route.path === '/admin/account'"
            @click="router.push('/admin/account')"
            value="account"
          ></v-list-item>

          <v-list-group active-color="red" value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :active="route.path.startsWith('/admin')"
                prepend-icon="mdi-account-circle"
                title="Users"
              ></v-list-item>
            </template>
            <v-list-item @click="router.push('/admin/admin')" variant="plain" title="Admin">
              <template v-slot:prepend>
                <div class="dot" />
              </template>
            </v-list-item>

            <v-list-item @click="console.log('actions')" variant="plain" title="Actions">
              <template v-slot:prepend>
                <div class="dot" />
              </template>
            </v-list-item>
          </v-list-group>
        </v-list>

        <v-list density="compact" nav>
          <v-list-subheader>Management</v-list-subheader>

          <v-list-item
            prepend-icon="mdi-account-box"
            title="User Management"
            :active="route.path === '/admin/user-management'"
            @click="router.push('/admin/user-management')"
            value="user-management"
          ></v-list-item>
        </v-list>

        <template v-slot:append>
          <v-card
            rounded="lg"
            variant="flat"
            append-icon="mdi-logout"
            subtitle="admin"
            color="blue-lighten-5"
            class="pa-1 mx-3 mb-2"
          >
            <template v-slot:prepend>
              <v-avatar :image="userStore.avatar"></v-avatar>
            </template>
            <template v-slot:title>
              <div class="text-mono">{{userStore.userName}}</div>
            </template>
            <template v-slot:append>
              <v-icon @click="handleLogout">
                mdi-logout
              </v-icon>
            </template>
          </v-card>
        </template>


      </v-navigation-drawer>
      <v-main style="height: 100vh; overflow: auto;" class="">
        <HeadCard v-model:rail="rail" />
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
/* 使用 ::v-deep 覆盖默认样式 */

.v-list-group__items .v-list-item {
  padding-inline-start: 16px !important;
}

.dot {
  width: 10px;
  height: 10px;
  margin-right: 38px;
  background-color: red;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* 给圆点加个阴影 */
}

.list-children-active {
  color: #f78166;
}
</style>
