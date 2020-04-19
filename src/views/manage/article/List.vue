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
        <div
          class="blog-title"
          :title="item.title"
        >
          {{ item.title }}
        </div>
      </template>
      <template v-slot:item.type="{ item }">
        {{ item.type | articleType }}
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
          <i
            v-ripple
            class="iconfont icon-iconfontedit"
            title="编辑"
            @click="editItem(item)"
          />
          <i
            class="iconfont icon-article"
            title="配置图文"
            @click="editItemType(item)"
          />
          <i
            class="iconfont icon-shanchu"
            title="删除"
            @click="deleteItem(item)"
          />
        </div>
      </template>
    </v-data-table>
    <delete-modal
      :visible="deleteVisible"
      @onClose="deleteVisible = false"
      @onOk="onDelete"
    />
    <article-type-modal
      :article="tempItem"
      :visible="articleTypeVisible"
      @onClose="articleTypeVisible = false"
      @onOk="onTypeEdit"
    />
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  import { articleManageList, changeStatus, modifyArticleType } from '@/service'
  import DeleteModal from './components/DeleteModal'
  import ArticleTypeModal from './components/ArticleTypeModal'
  export default {
    components: {
      DeleteModal,
      ArticleTypeModal,
    },
    filters: {
      formatTime (val) {
        return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
      },
      articleType (val) {
        return {
          1: '无图',
          2: '小图',
          3: '大图',
        }[val]
      },
    },
    data () {
      return {
        loading: false,
        deleteVisible: false,
        articleTypeVisible: false,
        headers: [
          { text: '标题', value: 'title', width: 300 },
          { text: '类型', value: 'type', width: 200 },
          { text: '创建时间', value: 'createdAt' },
          { text: '更新时间', value: 'updatedAt' },
          { text: '状态', value: 'status', sortable: false },
          { text: '操作', value: 'actions', sortable: false, width: 200 },
        ],
        list: [],
        tempItem: {},
      }
    },
    mounted () {
      this.getList()
    },
    methods: {
      getList: async function () {
        this.loading = true
        const { data } = await articleManageList()
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
          status: status ? 2 : 1,
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
      editItemType (item) {
        this.tempItem = item
        this.articleTypeVisible = true
      },
      onTypeEdit: async function ({ _id, type, img }) {
        this.loading = true
        await modifyArticleType({
          _id, type, img,
        })
        this.loading = false
        this.articleTypeVisible = false
        this.getList()
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
    .iconfont {
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
      transition: all .3s linear;
      &:hover{
        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
      }
      &:nth-child(1){
        color: #1976d2;
      }
      &:nth-child(2){
        color: #1976d2;
      }
      &:nth-child(3){
        color: rgb(248, 171, 171);
      }
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
