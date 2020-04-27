<template>
  <div class="RecipiesComponent">
    <h1 class="mb-3 ml-md-10 mt-md-7 text-center blue--text">Search Recipes - nutrients <br></h1>
    <div class="panel d-flex">
      <div class="filter-panel flex-fill">
        <RecipeSearchFormComponent @setRequestUrl="setRequestUrl"/>
      </div>
      <div class="recipes d-flex flex-wrap justify-content-center">
        <div v-if="results.length> 0" class="d-flex flex-wrap justify-content-center">
          <RecipeComponent v-for="recipe in results"
                           v-bind:title="recipe.title"
                           v-bind:id="recipe.id"
                           v-bind:calories="recipe.calories"
                           v-bind:carbs="recipe.carbs"
                           v-bind:fat="recipe.fat"
                           v-bind:sugar="recipe.sugar"
                           v-bind:protein="recipe.protein"
                           v-bind:image="recipe.image"
                           v-bind:imageUrls="recipe.imageUrls"/>
        </div>
        <div v-else><h4 class="mt-10 ml-10">No recipes found</h4></div>
      </div>
    </div>
  </div>
</template>

<script>
  import RecipeComponent from "./RecipeNutrientsComponent";
  import RecipeSearchFormComponent from './RecipeSearchByNutrientsSearchFormComponent.vue'
  import '../../styles/_RecipesComponent.css'
  import axios from 'axios';
  import {baseRecipiesApiUrl, getWithEndpoint} from '../../shared/constants'

  export default {
    name: 'RecipesByNutrients',
    components: {RecipeComponent, RecipeSearchFormComponent},
    data() {
      return {
        results: [],
      }
    },
    methods: {
      setRequestUrl: function (url) {
        axios
          .get(url)
          .then(response => {
            console.log(response);
            this.results = response.data;
            })
      }
    }
  };
</script>
