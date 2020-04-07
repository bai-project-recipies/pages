<template>
  <v-app id=”app”>
    <NavigationComponent/>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
  import NavigationComponent from "./components/NavigationComponent";

  export default {
    name: 'app',
    components: {NavigationComponent},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
