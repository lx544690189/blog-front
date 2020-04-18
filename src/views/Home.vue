<template>
  <artical-card
    :type="3"
    title="nodejs基础模块"
    content=" 2015 年三月，iOS 发布了 8.2 版本。这在当时看来也许只是这个现代的操作系统的一次小更新，但在 Web 开发者眼里，有些微妙的问题产生了。这是一件在 Android 世界里想象不到的麻烦事儿。在此之前 Web 开发者都非常清楚，在 window 全局对象上的 innerWidth/innerHeight 表示浏览器窗口中可以看到页面的区域的尺寸，而 outerWidth/outerHeight 表示浏览器窗口整体的尺寸。可以看到页面的区域又被称为「视口」（Viewport），在 CSS 的世界里，任何 position: fixed 的元素都会脱离文档流并以视口为基准进行定位，以便在页面滚动时让这些元素相对于窗口固定，例如桌面 Web 设计中常见的头部、侧边栏、「返回顶部」按钮等等。 "
    img="https://cdn.vuetifyjs.com/images/cards/house.jpg"
  />
</template>

<script>
  import ArticalCard from '@/components/ArticalCard.vue'

  export default {
    name: 'Home',
    components: {
      ArticalCard,
    },
  }
</script>
