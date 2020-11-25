<template>
  <div class="article-list">
    <q-card
      class="article-card"
      bordered
      flat
      dark
      v-for="article in articleList"
      :key="article.id"
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">node</div>
          <div
            class="text-h5 q-mt-sm q-mb-xs article-card-title"
            @click="toArticle(article.id)"
          >
            {{ article.title }}
          </div>
          <div class="text-caption text-grey article-card-desc">
            {{ article.description }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img class="rounded-borders" :src="article.cover" />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat> {{ formatDate(article.published_at) }} </q-btn>
        <!-- <q-btn flat color="primary"> Reserve </q-btn> -->
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {},
  props: {
    articleList: {
      type: Array,
      required: true,
    },
  },
  setup(props, { root }) {
    function formatDate(date: dayjs.ConfigType) {
      return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
    }
    const toArticle = function (id: number) {
      root.$router.push(`/article/${id}`);
    };
    return {
      formatDate,
      toArticle,
    };
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
