<template>
  <div class="RecipiesComponent">
    <h1 class="mb-3 ml-md-10 mt-md-7 text-center blue--text">Search Recipes - fast search <br></h1>
    <div class="panel d-flex">
      <div class="filter-panel flex-fill">
        <RecipeSearchFormComponent @setRequestUrl="setRequestUrl"/>
      </div>
      <div class="recipes d-flex flex-wrap justify-content-center">
        <div v-if="results.length> 0" class="d-flex flex-wrap justify-content-center">
          <RecipeComponent v-for="recipe in results"
                           v-bind:key="recipe.id"
                           v-bind:title="recipe.title"
                           v-bind:id="recipe.id"
                           v-bind:readyInMinutes="recipe.readyInMinutes"
                           v-bind:servings="recipe.servings"
                           v-bind:image="recipe.image"
                           v-bind:imageUrls="recipe.imageUrls"/>
        </div>
        <div v-else style="margin-top: 1rem; text-align: center;">
          <h4 class="mt-10 ml-10">Unfortunately we have not found cuisine for you, maybe try something else?</h4>
          <img src="../../assets/NoRecipesImg.png" alt="empty plate" width="350rem" style="margin-top: 3rem">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RecipeComponent from "./RecipeComponent";
  import RecipeSearchFormComponent from './RecipeSearchFormComponent.vue'
  import '../../styles/_RecipesComponent.css'
  import axios from 'axios';
  import {baseRecipiesApiUrl, getWithEndpoint} from '../../shared/constants'

  export default {
    name: 'Recipes',
    components: {RecipeComponent, RecipeSearchFormComponent},
    data() {
      return {
        results: [],
      }
    },
    mounted() {
      axios
        .get(getWithEndpoint(new URL(`${baseRecipiesApiUrl}/search/`)))
        .then(response => this.results = response.data.results)
    },
    methods: {
      setRequestUrl: function (url) {
        axios
          .get(url)
          .then(response => this.results = response.data.results)
      }
    }
  };
</script>
