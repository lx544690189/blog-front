<template>
  <v-card
    class="article"
    @click="$emit('click')"
  >
    <template v-if="type === 1">
      <div class="article-title">
        {{ title }}
      </div>
      <div class="article-time">
        {{ time | formatTime }}
      </div>
      <v-card-subtitle>
        <div class="introduce">
          {{ content }}
        </div>
      </v-card-subtitle>
    </template>
    <template v-if="type === 2">
      <div class="d-flex flex-no-wrap justify-space-between type-2">
        <v-avatar
          size="200"
          tile
        >
          <v-img :src="img || defaultImg" />
        </v-avatar>
        <div class="right-block">
          <div class="article-title">
            {{ title }}
          </div>
          <div class="article-time">
            {{ time | formatTime }}
          </div>
          <v-card-subtitle>
            <div class="introduce">
              {{ content }}
            </div>
          </v-card-subtitle>
        </div>
      </div>
    </template>
    <template v-if="type === 3">
      <v-img
        :src="img || defaultImg"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      />
      <div class="article-title">
        {{ title }}
      </div>
      <div class="article-time">
        {{ time | formatTime }}
      </div>
      <v-card-subtitle>
        <div class="introduce">
          {{ content }}
        </div>
      </v-card-subtitle>
    </template>
  </v-card>
</template>

<script>
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/zh-cn'
  import defaultImg from '../assets/default-img.png'
  dayjs.locale('zh-cn')
  dayjs.extend(relativeTime)
  export default {
    filters: {
      formatTime (val) {
        return dayjs(val).fromNow()
      },
    },
    props: {
      // 文章类型
      type: {
        type: Number,
        default: 1,
      },
      // 标题
      title: {
        type: String,
        required: true,
      },
      // 类容
      content: {
        type: String,
        required: true,
      },
      // 图片
      img: {
        type: String,
        required: false,
      },
      // 发布时间
      time: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      defaultImg,
    }),
  }
</script>

<style lang="less">
.article {
  max-width: 900px !important;
  margin: 40px auto;
  overflow: hidden;
  .article-title {
    font-size: 18px;
    font-weight: 800;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding: 0;
    margin: 16px;
  }
  .article-time {
    margin: 0 16px;
    color: rgb(170, 170, 170);
    font-style: italic;
    font-size: 14px;
  }
  .v-card__subtitle {
    margin-top: 0 !important;
    .introduce {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  .right-block {
    width: 100%;
    .article-time {
      font-weight: normal;
    }
  }
}
</style>
