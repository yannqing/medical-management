<script setup lang="ts">
import { computed, nextTick, ref, onMounted } from 'vue'
import { getAllUsersAction } from '@/api/admin/UserManagement.ts'
import type { GetAllUsersResponseType } from '@/type/admin/UserManagement.ts'
import type { BaseResponse, BasicPageResponse } from '@/type/public.ts'

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'New Item' : 'Edit Item'
})

const loading = ref<boolean>(true);

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
  { title: 'role', key: 'role' },
  { title: 'Carbs (g)', key: 'carbs' },
  { title: 'Protein (g)', key: 'protein' },
  { title: 'Actions', key: 'actions', sortable: false },
];
const desserts = ref<GetAllUsersResponseType[]>([]);
const pageSize = ref(0);
const currentPage = ref(0);
const editedIndex = ref(-1);
const editedItem = ref<GetAllUsersResponseType>({
  userId: 0,
  username: '',
  nickName: '',
  email: '',
  roles: [{
    id: 0,
    roleName: '',
    remark: ''
  }],
});
const defaultItem = ref<GetAllUsersResponseType>({
  userId: 0,
  username: '',
  nickName: '',
  email: '',
  roles: [{
    id: 0,
    roleName: '',
    remark: ''
  }],
});

// 数据初始化
// function initialize() {
//   desserts.value = [
//     {
//       name: 'Frozen Yogurt',
//       calories: 159,
//       fat: 6.0,
//       carbs: 24,
//       protein: 4.0,
//     },
//     {
//       name: 'Ice cream sandwich',
//       calories: 237,
//       fat: 9.0,
//       carbs: 37,
//       protein: 4.3,
//     },
//     {
//       name: 'Eclair',
//       calories: 262,
//       fat: 16.0,
//       carbs: 23,
//       protein: 6.0,
//     },
//     {
//       name: 'Cupcake',
//       calories: 305,
//       fat: 3.7,
//       carbs: 67,
//       protein: 4.3,
//     },
//     {
//       name: 'Gingerbread',
//       calories: 356,
//       fat: 16.0,
//       carbs: 49,
//       protein: 3.9,
//     },
//     {
//       name: 'Jelly bean',
//       calories: 375,
//       fat: 0.0,
//       carbs: 94,
//       protein: 0.0,
//     },
//     {
//       name: 'Lollipop',
//       calories: 392,
//       fat: 0.2,
//       carbs: 98,
//       protein: 0,
//     },
//     {
//       name: 'Honeycomb',
//       calories: 408,
//       fat: 3.2,
//       carbs: 87,
//       protein: 6.5,
//     },
//     {
//       name: 'Donut',
//       calories: 452,
//       fat: 25.0,
//       carbs: 51,
//       protein: 4.9,
//     },
//     {
//       name: 'KitKat',
//       calories: 518,
//       fat: 26.0,
//       carbs: 65,
//       protein: 7,
//     },
//   ]
// }

function editItem(item: GetAllUsersResponseType) {
  editedIndex.value = desserts.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialog.value = true
}

function deleteItem(item: GetAllUsersResponseType) {
  editedIndex.value = desserts.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialogDelete.value = true
}

function deleteItemConfirm() {
  desserts.value.splice(editedIndex.value, 1)
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

function save() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value)
  } else {
    desserts.value.push(editedItem.value)
  }
  close()
}

function getRoleColor(id: number) {
  if (id === 1) {
    return 'blue-lighten-1'
  } else if (id === 2) {
    return 'pink-lighten-1'
  }

  return 'green-lighten-1'
}

onMounted(async () => {

  const res: BaseResponse<BasicPageResponse<GetAllUsersResponseType>> = await getAllUsersAction()
  if (res.code === 200) {
    desserts.value = res.data.records;
    currentPage.value = res.data.current;
    pageSize.value = res.data.size;
    console.log('desserts', desserts.value)
  } else {
    // 消息弹窗
    console.log("错误，获取信息失败")
  }
  loading.value = false;



  console.log("res:", res)


  // setTimeout(() => {
  //   initialize()
  //   loading.value = false
  // }, 2000)
})

</script>

<template>
  <v-card
    class="ml-10 mr-5 my-5 pa-3"
    style="border-radius: 15px;">
    <v-card-title>User Management</v-card-title>
      <v-data-table
        :page="currentPage"
        :items-per-page="pageSize"
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
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        md="4"
                        sm="6"
                      >
                        <v-text-field
                          v-model="editedItem.username"
                          label="Dessert name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="4"
                        sm="6"
                      >
                        <v-text-field
                          v-model="editedItem.avatar"
                          label="Calories"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="4"
                        sm="6"
                      >
                        <v-text-field
                          v-model="editedItem.nickName"
                          label="Fat (g)"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="4"
                        sm="6"
                      >
                        <v-text-field
                          v-model="editedItem.address"
                          label="Carbs (g)"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="4"
                        sm="6"
                      >
                        <v-text-field
                          v-model="editedItem.age"
                          label="Protein (g)"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
<!--            删除数据的弹窗-->
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
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
                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-avatar>
                </template>

                <v-list-item-title>{{ item.username }}</v-list-item-title>

                <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
              </v-list-item>
            </td>
            <td>
              <v-chip
                class="ma-2"
                v-if="item.roles && item.roles.length > 0"
                :color="getRoleColor(item.roles[0].id)"
              >
                {{ item.roles[0].remark  }}
              </v-chip>
            </td>
            <td>{{ item.nickName }}</td>
            <td>{{ item.address }}</td>
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
                @click="deleteItem(item)"
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
      </v-data-table>
  </v-card>
</template>

<style scoped>

</style>
