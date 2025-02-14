<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(null)

const open = ref(['Users'])
const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete'],
]
const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]
</script>

<template>
  <v-card height="100vh">
    <v-layout>
      <v-navigation-drawer
        class="bg-deep-purple"
        theme="dark"
        permanent>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leader"
        ></v-list-item>

        <v-divider />

        <v-list density="compact" nav v-model:opened="open">
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" href="/admin/dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-account-box" title="Account" value="account" @click="console.log('xx')"></v-list-item>

          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-circle"
                title="Users"
              ></v-list-item>
            </template>
            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Admin"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                :prepend-icon="icon"
                :title="title"
                :value="title"
              ></v-list-item>
            </v-list-group>

            <v-list-group value="Actions">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Actions"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                :prepend-icon="icon"
                :title="title"
                :value="title"
              ></v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 100vh" class="bg-[#ef4444]">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>

</style>
