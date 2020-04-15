<template>
  <div class="manage-article-list">
    <v-breadcrumbs
      :items="[
        {
          text: '文章管理',
          disabled: false,
          href: '/manage/article/list',
        },
        {
          text: '文章列表',
          disabled: false,
        },
      ]"
      large
    />
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="list"
      :items-per-page="10"
      height="calc(100vh - 250px)"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
          color="white"
        >
          <v-toolbar-title>blog</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <div style="text-align:right;flex: 1;">
            <v-btn
              color="primary"
              dark
              class="add-btn"
              to="/manage/article/add"
            >
              新增
            </v-btn>
          </div>
        </v-toolbar>
      </template>
      <template v-slot:item.title="{ item }">
        <div class="blog-title">
          {{ item.title }}
        </div>
      </template>
      <template v-slot:item.createdAt="{ item }">
        {{ item.createdAt | formatTime }}
      </template>
      <template v-slot:item.updatedAt="{ item }">
        {{ item.updatedAt | formatTime }}
      </template>
      <template v-slot:item.status="{ item }">
        <v-switch
          v-model="item.status"
          class="blog-status"
          :label="item.status ? '展示':'隐藏'"
          :loading="item.switchLoading"
          @change="()=>{onSwitchChange(item)}"
        />
      </template>
      <template v-slot:item.actions="{ item }">
        <div class="action">
          <v-icon
            color="blue"
            title="编辑"
            small
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            color="rgb(248, 125, 125)"
            title="删除"
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </div>
      </template>
    </v-data-table>
    <v-dialog
      v-model="deleteVisible"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          确认此操作
        </v-card-title>
        <v-card-text>
          将删除此篇文章
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="deleteVisible = false"
          >
            取消
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="onDelete"
          >
            确认
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  import { articleList, changeStatus } from '@/service'
  export default {
    filters: {
      formatTime (val) {
        return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
      },
    },
    data () {
      return {
        loading: false,
        deleteVisible: false,
        headers: [
          { text: '标题', value: 'title', width: 400 },
          { text: '创建时间', value: 'createdAt' },
          { text: '更新时间', value: 'updatedAt' },
          { text: '状态', value: 'status', sortable: false },
          { text: '操作', value: 'actions', sortable: false },
        ],
        list: [],
      }
    },
    mounted () {
      this.getList()
    },
    methods: {
      getList: async function () {
        this.loading = true
        const { data } = await articleList()
        this.loading = false
        this.list = data.map(item => {
          return {
            ...item,
            status: item.status === 2,
            switchLoading: false,
          }
        })
      },
      onSwitchChange: async function (item) {
        const { _id, status } = item
        item.switchLoading = true
        await changeStatus({
          _id,
          status,
        })
        item.switchLoading = false
      },
      editItem (item) {
        this.$router.push({
          path: '/manage/article/edit',
          query: { id: item._id },
        })
      },
      deleteItem (item) {
        this.tempItem = item
        this.deleteVisible = true
      },
      onDelete: async function () {
        const { _id } = this.tempItem
        this.loading = true
        await changeStatus({
          _id,
          status: 0,
        })
        this.list = this.list.filter(item => item._id !== _id)
        this.loading = false
        this.deleteVisible = false
      },
    },
  }
</script>

<style lang="less" scoped>
.manage-article-list {
  padding-top: 20px;
  .add-btn {
    float: right;
  }
  .blog-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 14px;
    margin: 15px 0;
  }
  .action {
    button {
      margin: 0 10px;
    }
  }
}
</style>
<style lang="less">
.manage-article-list {
  .blog-status {
    .v-label {
      font-size: 14px !important;
    }
  }
}
</style>
