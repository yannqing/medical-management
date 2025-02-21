<template>
  <v-card class="login-card">
    <v-card-title @click="router.push('/')" class="d-flex align-center justify-center gap-2 cursor-pointer">
      <v-img cover max-width="35" :src="syringe" class="me-2" />
      <span>智慧医疗</span>
    </v-card-title>
    <v-card-text>
      <div class="flex flex-row justify-between gap-4 mt-5">
        <v-btn
          class="text-none w-1/2"
          variant="outlined"
          size="small"
        >
          <v-img :src="google" cover max-width="15" class="me-2" />
          Sign in with Google
        </v-btn>
        <v-btn class="text-none w-1/2" variant="outlined" size="small">
          Sign in with FB
        </v-btn>
      </div>
      <div class="flex flex-row my-7 gap-2">
        <v-divider class="my-3"></v-divider>
        <span class="text-caption whitespace-nowrap"> or sign in with </span>
        <v-divider class="my-3"></v-divider>
      </div>
      <v-text-field
        rounded="lg"
        color="blue-lighten-1"
        v-model="username"
        label="Username"
      />
      <v-text-field
        rounded="lg"
        color="blue-lighten-1"
        v-model="password"
        label="Password"
        type="password"
      />
      <div class="flex flex-row justify-between">
        <v-checkbox base-color="#f78166" color="#f78166" v-model="remember">
          <template v-slot:label>
            <div class="text-body-2 text-[#f78166]">Remember Me</div>
          </template>
        </v-checkbox>
        <v-btn color="blue-darken-1" variant="plain" class="text-body-2 mt-2">
          Forget Password ？
        </v-btn>
      </div>
      <v-btn
        block
        size="large"
        class="text-none"
        rounded="pill"
        color="blue-lighten-1"
        @click="signIn"
      >
        Sign In
      </v-btn>
    </v-card-text>
    <v-card-text>
      <div class="flex justify-center gap-2 text-grey">
        <span>
          New to This ?
        </span>
        <v-hover
          open-delay="50"
          close-delay="100"
        >
          <template v-slot:default="{ isHovering, props }">
<!--            TODO 常量替换-->
            <a
              href="/auth/register"
              transition="fade-transition"
              v-bind="props"
              :class="{'text-[#1E88E5]': isHovering, 'cursor-pointer': true, 'text-[#90CAF9]': !isHovering}">
              Create an Account
            </a>
          </template>
        </v-hover>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import syringe from '@/assets/syringe.png' // 导入图片
import google from '@/assets/google.png'
import { loginAction } from '@/api/auth'
import type { BaseResponse } from '@/type/public.ts'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
import type { LoginResponseType } from '@/type/auth'
import { useUserStore } from '@/stores/user.ts'
import { AxiosError } from 'axios'

const router = useRouter();

const remember = ref(false)
const username = ref('')
const password = ref('')

const userStore = useUserStore();

const signIn = async () => {
  try {
    const { data: res }: { data: BaseResponse<LoginResponseType> } = await loginAction({
      username: username.value,
      password: password.value
    });
    console.log("login result: ", res)
    if (res.code === 20001) {
      toast.success("登录成功");
      userStore.login(res.data.token, res.data.userId, res.data.userName, res.data.roles)
      await router.push('/');
    } else {
      toast.error(res.msg);
    }
  } catch (error: unknown) {
    console.error("login error: ", error);
    if (error instanceof AxiosError && error.response?.data?.message) {
      toast.error(error.response.data.message);
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  background: rgb(226, 236, 248);
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden; /* 隐藏超出容器的图形部分 */
}

.login-card {
  height: 590px;
  width: 450px;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.card-container::before,
.card-container::after {
  content: '';
  position: absolute;
  z-index: 0; /* 置于卡片下方 */
}

/* 左侧圆形 */
.card-container::before {
  content: '';
  position: absolute;
  width: 200px; /* 圆形的宽度 */
  height: 200px; /* 圆形的高度 */
  background: #fb977d; /* 圆形的背景颜色 */
  border-radius: 50%; /* 将元素变成圆形 */
  left: 20%; /* 距离左侧的距离 */
  top: 80%; /* 距离顶部的距离 */
  z-index: 0; /* 确保圆形在卡片下方 */
}

/* 右侧多边形图形 */
.card-container::after {
  content: '';
  position: absolute;
  top: 1%;
  right: 25%;
  width: 200px;
  height: 207px;
  background: url(data:image/png;base64,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)
    no-repeat;
  background-size: contain;
  z-index: 0;
}

</style>
