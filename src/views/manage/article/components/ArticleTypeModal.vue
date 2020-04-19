<template>
  <v-dialog
    v-model="visible"
    content-class="article-type-modal"
    max-width="750"
    persistent
  >
    <v-card>
      <v-card-title class="headline">
        图文配置
      </v-card-title>
      <v-row
        class="type-choose"
        no-gutters
      >
        <v-col :cols="2">
          图文模式：
        </v-col>
        <v-col :cols="8">
          <v-btn-toggle
            v-model="data.selectType"
            mandatory
            @change="onTypeChange"
          >
            <v-btn small>
              无图
            </v-btn>
            <v-btn small>
              小图
            </v-btn>
            <v-btn small>
              大图
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row
        v-show="data.type !== 1"
        class="type-img-upload"
        no-gutters
      >
        <v-col :cols="2">
          文章配图：
        </v-col>
        <v-col :cols="8">
          <v-file-input
            accept="image/*"
            label="选择图片"
            @change="onImgChange"
          />
        </v-col>
      </v-row>
      <v-row
        class="type-demo"
        no-gutters
      >
        <v-col :cols="2">
          效果预览：
        </v-col>
        <v-col :cols="8">
          <v-carousel
            v-model="data.selectType"
            height="420"
            hide-delimiter-background
            show-arrows-on-hover
            :hide-delimiters="true"
            light
            :continuous="false"
            :show-arrows="false"
          >
            <v-carousel-item
              v-for="type in [1,2,3]"
              :key="type"
            >
              <artical-card
                :type="type"
                :title="data.title"
                :content="data.title"
                :img="data.img"
                :time="data.createdAt"
              />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey darken-1"
          text
          @click="$emit('onClose')"
        >
          取消
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('onOk',data)"
        >
          确认
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import ArticalCard from '@/components/ArticalCard'
  import { upload } from '@/service'
  import config from '@/config'
  export default {
    components: {
      ArticalCard,
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      article: {
        type: Object,
        default () {
          return {}
        },
      },
    },
    data: () => ({
      data: {
        type: 1,
      },
    }),
    watch: {
      visible () {
        const article = JSON.parse(JSON.stringify(this.article))
        article.selectType = article.type - 1
        this.data = article
      },
    },
    methods: {
      onTypeChange (selectType) {
        this.data.type = selectType + 1
        this.data.img = undefined
      },
      onImgChange: async function (file) {
        var formdata = new FormData()
        formdata.append('file', file)
        const res = await upload(formdata)
        const imgUrl = `${config.api}/static/${res.data}`
        this.data.img = imgUrl
      },
    },
  }
</script>

<style lang="less">
.article-type-modal {
  .type-choose {
    padding-top: 20px;
    .col-2 {
      text-align: right;
      line-height: 28px;
      color: rgba(0, 0, 0, 0.6);
    }
    .col-8 {
      padding-left: 40px;
    }
  }
  .type-demo {
    padding-top: 20px;
    height: 430px;
    .col-2 {
      text-align: right;
      line-height: 28px;
      color: rgba(0, 0, 0, 0.6);
    }
    .col-8 {
      padding-left: 40px;
    }
    .article{
      margin: 0 auto;
    }
    .v-responsive__content{
      padding: 10px 20px 0 20px;
    }
  }
  .type-img-upload{
    .col-2 {
      text-align: right;
      line-height: 60px;
      color: rgba(0, 0, 0, 0.6);
    }
    .col-8 {
      padding-left: 40px;
    }
  }
}
</style>
