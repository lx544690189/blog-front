<template>
  <div class="">

  </div>
</template>

<script lang="ts">
import avatarImg from '../assets/avatar.jpeg';
import { defineComponent } from '@vue/composition-api';
import Firefly from '../components/Firefly.vue';
import { queryArticleList } from '../service';

export default defineComponent({
  components: { Firefly },
  setup: () => {
    // const res = await queryArticleList({
    //   current: 1,
    //   pageSize: 10,
    // });
    return {
      avatarImg,
    };
  },
});
</script>

<style lang="scss">

</style>
