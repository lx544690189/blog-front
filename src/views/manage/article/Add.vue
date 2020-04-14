<template>
  <div class="manage-article-add">
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="true"
    >
      <v-text-field
        v-model="title"
        :rules="titleRules"
        label="标题"
        required
      />
      <mavon-editor
        v-model="editorValue"
        class="mavon-editor"
      />
    </v-form>
    <v-speed-dial
      v-model="fab"
      class="operation"
      :bottom="true"
      :right="true"
      transition="scale-transition"
      direction="top"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-dialpad
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
        @click="handelSubmit"
      >
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click="handelBack"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-snackbar
      v-model="saveMsgVisible"
      :timeout="2000"
      :top="true"
      color="success"
    >
      文章保存成功！
    </v-snackbar>
  </div>
</template>
<script>
  import { createArticle } from '@/service'
  export default {
    data: () => ({
      fab: false,
      saveMsgVisible: false,
      valid: true,
      title: '',
      titleRules: [v => !!v || 'Name is required'],
      editorValue: '',
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      handelBack () {
        this.$router.back()
      },
      handelSubmit: async function () {
        const res = await createArticle({
          title: this.title,
          content: this.editorValue,
        })
        if (res.success) {
          this.saveMsgVisible = true
          this.handelBack()
        }
      },
    },
  }
</script>

<style lang="less" scoped>
.manage-article-add {
  position: relative;
  .mavon-editor {
    height: calc(100vh - 140px);
  }
  .operation{
    position: fixed;
      right: 50px;
      bottom: 50px;
      z-index: 10000;
  }
}
</style>
