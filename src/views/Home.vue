<template>
  <div>
    <artical-card
      v-for="article in list"
      :key="article.id"
      :title="article.title"
      :content="article.content"
      :type="article.type"
      :img="article.img"
    />
  </div>
</template>

<script>
  import ArticalCard from '@/components/ArticalCard.vue'
  import { articleList } from '@/service'

  export default {
    name: 'Home',
    components: {
      ArticalCard,
    },
    data () {
      return {
        loading: false,
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
