<template>
  <div class="home-page">
    <ArticleList :articleList="articleList" />
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "@vue/composition-api";
import { queryArticleList } from "../../service";
import ArticleList from "../../components/ArticleList.vue";
// dayjs.locale('zh-cn');

export default defineComponent({
  components: { ArticleList },
  data() {
    return {
      articleList: [],
    } as {
      articleList: any[];
    };
  },
  setup(props, { root }) {
    const toArticle = function (id: number) {
      root.$router.push(`/article/${id}`);
    };
    return {
      toArticle,
      dayjs,
    };
  },
  async created() {
    const res = await queryArticleList({
      current: 1,
      pageSize: 10,
    });
    console.log("res: ", res);
    this.articleList = res;
  },
});
</script>

<style lang="scss">
.home-page {
  padding: 50px 30px;
  display: flex;
  .article-list {
    max-width: 900px;
    .article-card {
      margin: 20px 0;
      &-title {
        font-weight: bold;
        display: inline-block;
        cursor: pointer;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
        &:hover {
          color: #007bff;
        }
      }
      &-desc {
        // cursor: pointer;
      }
    }
  }
}
</style>
