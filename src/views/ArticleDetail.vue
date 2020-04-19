<template>
  <div class="article-detail">
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

<style scoped>

</style>
