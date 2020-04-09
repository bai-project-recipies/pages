<template>
  <div class="RecipiesComponent">
    <h1 class="mb-3 ml-md-10 mt-md-7 text-center blue--text">Search Recipes - general <br></h1>
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <RecipeSearchFormComponent @setRequestUrl="setRequestUrl"/>
      </div>
      <div class="col-md-9 col-sm-6 d-flex flex-wrap justify-content-center">
        <RecipeComponent v-show="results.length > 0" v-for="recipe in results"
                         v-bind:title="recipe.title"
                         v-bind:id="recipe.id"
                         v-bind:readyInMinutes="recipe.readyInMinutes"
                         v-bind:servings="recipe.servings"
                         v-bind:image="recipe.image"
                         v-bind:imageUrls="recipe.imageUrls"/>
      </div>
    </div>
  </div>
</template>

<script>
  import RecipeComponent from "./RecipeComponent";
  import RecipeSearchFormComponent from './RecipeSearchFormComponent.vue'
  import axios from 'axios';

  export default {
    components: {RecipeComponent, RecipeSearchFormComponent},
    data() {
      return {
        results: [],
      }
    },
    mounted() {
    },
    methods: {
      setRequestUrl: function(url){
        axios
          .get(url)
          .then(response => this.results = response.data.results)
      }
    }
  };
</script>
