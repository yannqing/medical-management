<script setup lang="ts">
import { computed, nextTick, ref, reactive, onMounted, watch } from 'vue'
import { addUserAction, deleteUserAction, getAllUsersAction, updateUserAction } from '@/api/admin/UserManagement.ts'
import type {
  EditUserRequestType,
  GetAllUsersRequestType,
  GetAllUsersResponseType
} from '@/type/admin/UserManagement.ts'
import type { BaseResponse, BasicPageResponse } from '@/type/public.ts'
import { toast } from 'vue-sonner'
import { AxiosError } from 'axios'
import { SYSTEM_ERROR } from '@/type/ErrorType.ts'
import { getAllRolesAction } from '@/api/admin/RoleManagement.ts'
import type { Role } from '@/type/admin/RoleManagement.ts'

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'New User' : 'Edit User'
})

const getAllUsersRequest: GetAllUsersRequestType = reactive({
  current: 1,
  pageSize: 10,
})

const loading = ref<boolean>(true);
const saveLoading = ref<boolean>(false)

const search = ref('');
const dialog = ref(false);
const dialogDelete = ref(false);
const headers = [
  {
    title: 'Id',
    align: 'start' as const,
    sortable: false,
    key: 'name',
  },
  { title: 'UserInfo', key: 'userInfo' },
  { title: 'Role', key: 'role' },
  { title: 'NickName', key: 'nickName' },
  { title: 'Phone', key: 'phone' },
  { title: 'Actions', key: 'actions', sortable: false },
];
const roleItems = ref<Role[]>([]);
const desserts = ref<GetAllUsersResponseType[]>([]);
const pages = ref(0);
const editedIndex = ref(-1);
const editedItem = ref<EditUserRequestType>({
  userId: -2,
  username: '',
  nickName: '',
  roleIds: 1,
  email: '',
  phone: '',
  avatar: ''
});
const defaultItem = ref<EditUserRequestType>({
  username: '',
  nickName: '',
  roleIds: 1,
  email: '',
  phone: '',
  password: '',
  avatar: ''
});

const rules = reactive({
  required: (value: string) => !!value || 'Not Null.',
  counter: (value: string) => value.length <= 20 || 'Max 20 characters',
  email: (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
},)

const editItem = async (item: GetAllUsersRequestType) => {
  editedIndex.value = item.userId ? item.userId : -1;
  // editedIndex.value = desserts.value.indexOf(item)
  editedItem.value.userId = item.userId
  editedItem.value.username = item.username
  editedItem.value.avatar = item.avatar
  editedItem.value.nickName = item.nickName
  editedItem.value.email = item.email
  editedItem.value.phone = item.phone
  editedItem.value.password = item.password
  editedItem.value.roleIds = item.roles[0].id
  dialog.value = true
}

function deleteItem(id: number) {
  editedIndex.value = id
  dialogDelete.value = true
}

const deleteItemConfirm = async () => {
  try {
    const { data: res}: { data: BaseResponse<boolean> } = await deleteUserAction(editedIndex.value);
    if (res.code === 200) {
      toast.success("删除 id：" + editedIndex.value + " 的用户成功");
      loading.value = true
      await fetchData();
      loading.value = false
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error(SYSTEM_ERROR);
    }
  }

  closeDelete()
}

function close() {
  dialog.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1

  })
}

function closeDelete() {
  dialogDelete.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}

// TODO 点击按钮后，网络延迟导致多次调用接口！
const save = async () => {
  saveLoading.value = true
  if (editedIndex.value > -1) {
    // 修改用户
    console.log("editedItem: ", editedItem.value)
    try {
      const { data: editResult }: { data: BaseResponse<boolean>} = await updateUserAction(editedItem.value);
      if (editResult.code === 200) {
        toast.success('修改用户信息成功');
        loading.value = true
        await fetchData();
        loading.value = false
      } else {
        toast.error(editResult.msg);
      }
    } catch(error: unknown) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(SYSTEM_ERROR);
      }
    }

  } else {
    // 新增用户
    try {
      const { data: addResult }: { data: BaseResponse<boolean> } = await addUserAction(editedItem.value);
      if(addResult.code === 200) {
        toast.success('新增用户信息成功');
        loading.value = true
        await fetchData();
        loading.value = false
      } else {
        toast.error(addResult.msg);
      }
    } catch(error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(SYSTEM_ERROR);
      }
    }
  }
  saveLoading.value = false
  close()
}

// 获取角色标签颜色
function getRoleColor(id: number) {
  if (id === 1) {
    return 'blue-lighten-1'
  } else if (id === 2) {
    return 'teal-accent-4'
  }

  return 'pink-lighten-1'
}

onMounted(async () => {
  // 获取数据
  await fetchData();
  await fetchRoles();
  loading.value = false;
})

watch(() => getAllUsersRequest.current, async (newValue) => {
  loading.value = true;
  getAllUsersRequest.current = newValue
  await fetchData();

  loading.value = false;
})

const fetchRoles = async () => {
  try {
    const { data: res }: { res: BaseResponse<BasicPageResponse<Role>>} = await getAllRolesAction(null);
    console.log("roles res: ", res.data);
    if (res.code === 200) {
      roleItems.value = res.data.records;
    } else {
      toast.error(res.msg);
    }
  } catch(error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error(SYSTEM_ERROR);
    }
  }
}

const fetchData = async () => {
  try{
    const { data: res}: { data: BaseResponse<BasicPageResponse<GetAllUsersResponseType>>} = await getAllUsersAction(getAllUsersRequest);
    console.log("fetchData:", res);
    if (res.code === 200) {
      desserts.value = res.data.records;
      getAllUsersRequest.current = res.data.current;
      getAllUsersRequest.pageSize = res.data.size;
      pages.value = res.data.pages;
    } else {
      // 消息弹窗
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

</script>

<template>
  <v-card
    class="ml-10 mr-5 my-5 pa-3"
    style="border-radius: 15px;">
    <v-card-title>User Management</v-card-title>
      <v-data-table
        :page="getAllUsersRequest.current"
        :items-per-page="getAllUsersRequest.pageSize"
        :search="search"
        :loading="loading"
        :headers="headers"
        :items="desserts"
        :sort-by="[{ key: 'calories', order: 'asc' }]"
      >
<!--        表格数据加载的插槽-->
        <template v-slot:loading>
          <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
        </template>
        <template v-slot:top>
          <v-toolbar
            style="background: transparent"
            flat
          >
<!--            表格头部搜索框-->
            <v-toolbar-title>
              <v-text-field
                class="mt-5"
                prepend-inner-icon="mdi-magnify"
                v-model="search"
                color="blue-lighten-1"
                style="max-width: 300px"
                density="compact"
                label="Label"
                variant="outlined"></v-text-field>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  class="mb-2 text-none"
                  prepend-icon="mdi-account-multiple-plus"
                  variant="elevated"
                  rounded="xl"
                  color="blue-darken-1"
                  v-bind="props"
                >
                  Add Content
                </v-btn>
              </template>
              <v-card
                style="border-radius: 15px;">
                <v-card-title class="font-mono text-none mt-3" style="margin-left: 16px">
                  <div class="flex flex-row justify-between">
                    <div class="flex flex-row mt-2">
                      <v-icon color="blue-darken-1">mdi-information</v-icon>
                      <div class="ml-2">
                        {{ formTitle }}
                      </div>
                    </div>
                    <div class="mr-5">
                      <v-btn icon="mdi-window-close" @click="close()" variant="plain" />
                    </div>
                  </div>
                </v-card-title>

                <v-card-text style="padding-bottom: 0">
                  <v-container>
                    <v-row style="">
                      <v-col
                        style="padding: 5px;"
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="editedItem.username"
                          color="blue-lighten-1"
                          :rules="[rules.required, rules.counter]"
                          density="compact"
                          variant="outlined"
                          class="font-mono text-none"
                          label="Username"
                        ></v-text-field>
                      </v-col>
                      <v-spacer />
                      <v-col
                        style="padding: 5px;"
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="editedItem.avatar"
                          color="blue-lighten-1"
                          density="compact"
                          variant="outlined"
                          label="Avatar"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        style="padding: 5px;"
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="editedItem.nickName"
                          color="blue-lighten-1"
                          density="compact"
                          :rules="[rules.required, rules.counter]"
                          variant="outlined"
                          label="NickName"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        style="padding: 5px;"
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="editedItem.phone"
                          color="blue-lighten-1"
                          density="compact"
                          variant="outlined"
                          label="phone"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        style="padding: 5px;"
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="editedItem.email"
                          color="blue-lighten-1"
                          density="compact"
                          :rules="[rules.required, rules.email]"
                          variant="outlined"
                          label="Email"
                        ></v-text-field>
                      </v-col>

                      <v-col
                        v-if="editedIndex === -1"
                        style="padding: 5px;"
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          type="password"
                          v-model="editedItem.password"
                          color="blue-lighten-1"
                          density="compact"
                          variant="outlined"
                          :rules="[rules.required]"
                          label="Password"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        style="padding: 5px;"
                        cols="12"
                        md="6"
                      >
                        <v-select
                          label="Role"
                          v-model="editedItem.roleIds"
                          density="compact"
                          color="blue-lighten-1"
                          :items="roleItems"
                          item-title="remark"
                          item-value="id"
                          variant="outlined"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions class="mr-5 mb-2">
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#f78166"
                    class="text-none"
                    rounded="xl"
                    variant="elevated"
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    :loading="loading"
                    color="blue-lighten-1"
                    class="text-none"
                    rounded="xl"
                    variant="elevated"
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
<!--            删除数据的弹窗-->
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card style="border-radius: 15px;">
                <v-card-title class="text-mono ml-1 mt-3">
                  <div class="flex flex-row">
                    <div>
                      <v-icon color="red">mdi-information</v-icon>
                    </div>
                    <div class="ml-2" style="margin-top: 1px">
                      Delete User
                    </div>
                  </div>
                </v-card-title>
                <v-card-text class="py-3">
                  Are you sure you want to delete this item?
                </v-card-text>
                <v-card-actions

                >
                  <div class="flex justify-end mb-3">
                    <v-btn
                      color="#f78166"
                      class="text-none"
                      rounded="xl"
                      variant="elevated"
                      @click="closeDelete">Cancel</v-btn>
                    <v-btn
                      color="blue-lighten-1"
                      class="text-none mx-3"
                      rounded="xl"
                      variant="elevated"
                      @click="deleteItemConfirm">OK</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
<!--        表格数据头 headers-->
        <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
          <tr>
            <template v-for="column in columns" :key="column.key">
              <th>
                <span
                  class="mr-2 cursor-pointer font-mono text-none"
                  :class="{'ml-10': column.key === 'userInfo'}"
                  style="font-weight: bold"
                  @click="() => toggleSort(column)"
                >
                  {{ column.title }}
                </span>
                <template v-if="isSorted(column)">
                  <v-icon :icon="getSortIcon(column)"></v-icon>
                </template>
              </th>
            </template>
          </tr>
        </template>
<!--        表格数据插槽-->
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.userId }}</td>
            <td>
              <v-list-item class="">
                <template v-slot:prepend>
                  <v-avatar
                    color="grey-darken-3"
                    :image="item.avatar"
                  ></v-avatar>
                </template>

                <v-list-item-title>{{ item.username }}</v-list-item-title>

                <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
              </v-list-item>
            </td>
            <td style="padding: 0">
              <v-chip
                class="ma-2"
                v-if="item.roles && item.roles.length > 0"
                :color="getRoleColor(item.roles[0].id)"
              >
                {{ item.roles[0].remark  }}
              </v-chip>
            </td>
            <td>{{ item.nickName }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <v-icon
                color="blue-lighten-1"
                class="me-4"
                size="small"
                @click="editItem(item)"
              >
                mdi-pencil-outline
              </v-icon>
              <v-icon
                size="small"
                color="red-lighten-1"
                @click="deleteItem(item.userId)"
              >
                mdi-trash-can-outline
              </v-icon>
            </td>
          </tr>
        </template>
<!--        表格无数据时候的插槽-->
        <template v-slot:no-data>
          <v-empty-state
            class="mx-15 my-15"
            image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png">
            <template v-slot:title>
              <div class="text-subtitle-2 mt-8">
                Manage your inventory transfers
              </div>
            </template>

            <template v-slot:text>
              <div class="text-caption">
                Track and receive your incoming inventory from suppliers
              </div>
            </template>

            <template v-slot:actions>
              <v-btn
                class="text-none"
                color="white"
                elevation="1"
                rounded="lg"
                size="small"
                text="Learn more"
                width="96"
              ></v-btn>

              <v-btn
                class="text-none"
                elevation="1"
                rounded="lg"
                size="small"
                text="Add transfer"
                width="96"
              ></v-btn>
            </template>
          </v-empty-state>
        </template>

        <template v-slot:bottom>
          <div class="text-center pt-2">
            <v-pagination
              rounded="circle"
              v-model="getAllUsersRequest.current"
              :length="pages"
              next-icon="mdi-menu-right"
              prev-icon="mdi-menu-left"
            ></v-pagination>
          </div>
        </template>
      </v-data-table>
  </v-card>
</template>

<style scoped>

</style>
