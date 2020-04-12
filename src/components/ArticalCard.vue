<template>
  <div>
    <v-card
      :hover="true"
      class="artical"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      />
      <v-card-title v-text="'nodejs基础模块'" />
      <div class="artical-time">
        2020-4-12 21:03:57
      </div>
      <v-card-subtitle>
        <div class="introduce">
          2015 年三月，iOS 发布了 8.2 版本。这在当时看来也许只是这个现代的操作系统的一次小更新，但在 Web 开发者眼里，有些微妙的问题产生了。这是一件在 Android 世界里想象不到的麻烦事儿。
          在此之前 Web 开发者都非常清楚，在 window 全局对象上的 innerWidth/innerHeight 表示浏览器窗口中可以看到页面的区域的尺寸，而 outerWidth/outerHeight 表示浏览器窗口整体的尺寸。可以看到页面的区域又被称为「视口」（Viewport），在 CSS 的世界里，任何 position: fixed 的元素都会脱离文档流并以视口为基准进行定位，以便在页面滚动时让这些元素相对于窗口固定，例如桌面 Web 设计中常见的头部、侧边栏、「返回顶部」按钮等等。
        </div>
      </v-card-subtitle>
    </v-card>
    <v-card
      :hover="true"
      class="artical"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          class="ma-3"
          size="125"
          tile
        >
          <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg" />
        </v-avatar>
        <div class="right-block">
          <v-card-title>
            nodejs基础模块
            <div class="artical-time">
              2020-4-12 21:03:57
            </div>
          </v-card-title>
          <v-card-subtitle>
            <div
              class="introduce"
            >
              2015 年三月，iOS 发布了 8.2 版本。这在当时看来也许只是这个现代的操作系统的一次小更新，但在 Web 开发者眼里，有些微妙的问题产生了。这是一件在 Android 世界里想象不到的麻烦事儿。在此之前 Web 开发者都非常清楚，在 window 全局对象上的 innerWidth/innerHeight 表示浏览器窗口中可以看到页面的区域的尺寸，而 outerWidth/outerHeight 表示浏览器窗口整体的尺寸。可以看到页面的区域又被称为「视口」（Viewport），在 CSS 的世界里，任何 position: fixed 的元素都会脱离文档流并以视口为基准进行定位，以便在页面滚动时让这些元素相对于窗口固定，例如桌面 Web 设计中常见的头部、侧边栏、「返回顶部」按钮等等。
            </div>
          </v-card-subtitle>
        </div>
      </div>
    </v-card>
    <v-card
      :hover="true"
      class="artical"
    >
      <v-card-title v-text="'nodejs基础模块'" />
      <div class="artical-time">
        2020-4-12 21:03:57
      </div>
      <v-card-subtitle>
        <div
          class="introduce"
        >
          2015 年三月，iOS 发布了 8.2 版本。这在当时看来也许只是这个现代的操作系统的一次小更新，但在 Web 开发者眼里，有些微妙的问题产生了。这是一件在 Android 世界里想象不到的麻烦事儿。在此之前 Web 开发者都非常清楚，在 window 全局对象上的 innerWidth/innerHeight 表示浏览器窗口中可以看到页面的区域的尺寸，而 outerWidth/outerHeight 表示浏览器窗口整体的尺寸。可以看到页面的区域又被称为「视口」（Viewport），在 CSS 的世界里，任何 position: fixed 的元素都会脱离文档流并以视口为基准进行定位，以便在页面滚动时让这些元素相对于窗口固定，例如桌面 Web 设计中常见的头部、侧边栏、「返回顶部」按钮等等。
        </div>
      </v-card-subtitle>
    </v-card>
    <v-card
      :hover="true"
      class="artical"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          class="ma-3"
          size="125"
          tile
        >
          <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg" />
        </v-avatar>
        <div class="right-block">
          <v-card-title>
            nodejs基础模块
            <div class="artical-time">
              2020-4-12 21:03:57
            </div>
          </v-card-title>
          <v-card-subtitle>
            <div
              class="introduce"
            >
              nodejs基础模块nodejs基础模块nodejs基础模块
            </div>
          </v-card-subtitle>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String,
    },
  }
</script>

<script>
  export default {
  }
</script>

<style lang="less">
.artical {
  max-width: 900px !important;
  margin: 40px auto;
  .v-card__title {
    font-size: 18px;
  }
  .artical-time {
    padding: 0 16px;
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
  .right-block{
    width: 100%;
    .artical-time{
      font-weight: normal;
    }
  }
}
</style>
