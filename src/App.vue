<template>
  <v-app id=”app”>
    <NavigationComponent/>
    <RecipieComponent example="Tutaj tekst"/>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
  import NavigationComponent from "./components/NavigationComponent";
  import RecipieComponent from "./components/RecipieComponent";

  export default {
    name: 'app',
    components: {RecipieComponent, NavigationComponent},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
