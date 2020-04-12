<template>
  <div class="about">
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="true"
    >
      <v-text-field
        v-model="title"
        :rules="nameRules"
        label="标题"
        required
      />
    </v-form>
  </div>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'Name is required',
      ],
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
    },
  }
</script>
