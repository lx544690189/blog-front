
<template>
  <v-app id="blog">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://images.freeimages.com/images/small-previews/535/natural-wonders-1400924.jpg"
      >
        <v-row
          align="end"
          class="lightbox white--text pa-2 fill-height"
        >
          <v-col>
            <div class="subheading">
              blog
            </div>
          </v-col>
        </v-row>
      </v-img>
      <v-list dense>
        <v-list-item
          link
          to="/"
        >
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              主页
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/manage/article/list"
        >
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              文章管理
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
    methods: {
      navTo (to) {
        this.$router.push(to)
      },
    },
  }
</script>

<style lang="less">
 .theme--light.v-application{
   background: rgba(0, 0, 0, 0.001) !important;
   code{
     box-shadow: none;
   }
 }
</style>
