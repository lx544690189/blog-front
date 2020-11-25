<template>
  <div class="article-detail">
    <div class="article-detail-title">{{ articledetail.title }}</div>
    <q-separator />
    <div class="article-detail-content" v-html="articledetail.body_html"></div>
    <div class="article-detail-commend">
      <q-editor v-model="editor" min-height="100px" />
    </div>
    <!-- <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller> -->
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {},
  data() {
    return {
      editor: "",
    } as {
      editor: string;
    };
  },
  props: {
    articledetail: {
      type: Object,
    },
  },
});
</script>

<style lang="scss" scoped>
.article-detail {
  padding: 50px 50px;
  max-width: 900px;
  min-height: 100vh;
  &-title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 20px;
  }
  &-content {
    padding-top: 20px;
    min-height: 40vh;
  }
  &-commend {
    padding-top: 40px;
  }
}
</style>
