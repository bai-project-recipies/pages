<template>
  <v-app id=”app”>
    <NavigationComponent/>
    <RecipiesComponent example="Tutaj tekst"/>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
  import NavigationComponent from "./components/NavigationComponent";
  import RecipiesComponent from "./components/RecipesSearchGeneral/RecipiesComponent";

  export default {
    name: 'app',
    components: {RecipiesComponent, NavigationComponent},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
