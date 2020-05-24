<template>
  <div class="article-detail">
    <div class="article-title">
      {{ article.title }}
    </div>
    <mavon-editor
      ref="editor"
      v-model="article.content"
      class="mavon-editor"
      code-style="googlecode"
      :toolbars-flag="false"
      :subfield="false"
      default-open="preview"
      :box-shadow="false"
    />
  </div>
</template>

<script>
  import { articleDetail } from '@/service'
  export default {
    data: () => ({
      article: {},
    }),
    mounted () {
      this.initData()
    },
    methods: {
      initData: async function () {
        const res = await articleDetail({ _id: this.$route.query.id })
        this.article = res.data
      },
    },
  }
</script>

<style scoped lang="less">
.article-detail{
    padding: 0 40px;
  .article-title{
    font-size: 34px;
    font-weight: bold;
    padding: 20px 20px;
  }
  .article-title-hr{
    margin-bottom: 40px;
  }
  .v-note-panel{
    box-shadow: 10px 10px 10px #e1e1e1;
  }
}
</style>
