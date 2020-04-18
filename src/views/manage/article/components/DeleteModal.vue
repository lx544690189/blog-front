<template>
  <v-dialog
    v-model="visible"
    max-width="290"
    persistent
  >
    <v-card>
      <v-card-title class="headline">
        确认此操作
      </v-card-title>
      <v-card-text>
        将删除此篇文章
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey darken-1"
          text
          @click="$emit('onClose')"
        >
          取消
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('onOk')"
        >
          确认
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style scoped>

</style>
