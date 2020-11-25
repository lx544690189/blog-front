<template>
  <div class="article-page">
    <Article v-if="article" :articledetail="article"/>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import { defineComponent } from '@vue/composition-api';
import { queryArticleDetail } from '../../service';
import Article from '../../components/Article.vue';
// dayjs.locale('zh-cn');

export default defineComponent({
  components: {Article},
  data(){
    return {
      id: undefined,
      article: undefined,
      editor: '',
    } as {
      id: number | undefined;
      article: any | undefined;
      editor: string;
    };
  },
  // setup (props, { root }) {
  //   console.log('root: ', root.$route.params.id);
  //   return {
  //     id: 
  //   }
  // },
  async created () {
    this.id = Number(this.$route.params.id);
    const res = await queryArticleDetail({
      id: this.id,
    });
    console.log('res: ', res);
    this.article = res;
  },
});
</script>

<style lang="scss">
.article-page {
  background-color: #fff;
}
</style>
