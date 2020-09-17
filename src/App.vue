<template>
<div id="q-app">
  <router-view />
</div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
#q-app {
  position: relative;
  height: 100vh;
}
</style>
