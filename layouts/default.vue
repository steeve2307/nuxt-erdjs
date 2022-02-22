<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title 
        v-text="title" 
        class="logo" 
        @click="$router.push('/')"
      ></v-toolbar-title>
      <v-spacer />
      <v-btn
        text
        to="/login"
      >
        login
        <v-icon right>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} - STEEVELOPPEUR</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'NUXT ERDJS'
    }
  }
}
</script>

<style scoped>
.logo:hover {
  cursor: pointer !important;
}
</style>
