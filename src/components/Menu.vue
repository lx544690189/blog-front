<template>
  <q-list
    dark
    bordered
    separator
    style="max-width: 200px"
    class="rounded-borders menu"
  >
    <q-item clickable v-ripple @click="pathTo('/home')">
      <q-item-section avatar>
        <svg class="icon home" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
      </q-item-section>
      <q-item-section>
        <q-item-label>首页</q-item-label>
        <q-item-label caption>home</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple @click="pathTo('/works')">
      <q-item-section avatar>
        <svg class="icon works" aria-hidden="true">
          <use xlink:href="#icon-chuangzuo-tianchong"></use>
        </svg>
      </q-item-section>
      <q-item-section>
        <q-item-label>作品</q-item-label>
        <q-item-label caption>Some inspiration</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple @click="pathTo('/category')">
      <q-item-section avatar>
        <svg class="icon category" aria-hidden="true">
          <use xlink:href="#icon-guidang1"></use>
        </svg>
      </q-item-section>
      <q-item-section>
        <q-item-label>归档</q-item-label>
        <q-item-label caption>category</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api';
import { route } from 'quasar/wrappers';
import router from 'src/router';

export default defineComponent({
  setup (props, { root }) {
    const pathTo = function(path:string){
      root.$router.push(path);
    }
    return {
      pathTo,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu {
  margin: 60px auto 0 auto;
  &.q-list--bordered {
    border: none;
  }
  .q-item {
    padding: 4px 8px;
  }
  .home {
    font-size: 1.4em;
    margin-left: 10px;
  }
  .works {
    font-size: 1.5em;
    margin-left: 8px;
  }
  .category {
    margin-left: 10px;
    font-size: 1.4em;
  }
}
</style>