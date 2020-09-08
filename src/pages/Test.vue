<template>
<div>
  <div class="card-user">

  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api';

export default defineComponent({});
</script>

<style lang="scss">
body {
  background-color: #e6e7ee;
  min-height: 100vh;
}

.card-user {
  margin: 50px;
  width: 400px;
  height: 300px;
  border-radius: 6px;
  transition: all .2s ease;
  border-color: #d1d9e6;
  background: linear-gradient(145deg, #fefefe, #d5d5d5);
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
}
</style>
