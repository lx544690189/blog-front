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
      :height="500"
      class="elevation-1"
    >
      <template v-slot:item.createdAt="{ item }">
        {{ item.createdAt | formatTime }}
      </template>
      <template v-slot:item.updatedAt="{ item }">
        {{ item.updatedAt | formatTime }}
      </template>
    </v-data-table>
    <v-btn
      class="add"
      fab
      dark
      fixed
      color="indigo"
      to="/manage/article/add"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  import { articleList } from '@/service'
  export default {
    filters: {
      formatTime (val) {
        return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
      },
    },
    data () {
      return {
        loading: false,
        headers: [
          { text: '标题', value: 'title' },
          { text: '创建时间', value: 'createdAt' },
          { text: '更新时间', value: 'updatedAt' },
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
        this.list = data
      },
    },
  }
</script>

<style lang="less" scoped>
  .manage-article-list{
    padding-top: 20px;
    .add{
      right: 100px;
      bottom: 100px;
    }
  }
</style>
