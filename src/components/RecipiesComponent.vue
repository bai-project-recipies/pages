<template>
  <div class="RecipiesComponent">
    <h1 style="padding: 1rem">Recipes <br></h1>
    <div class="content">
      <div class="search-panel">
        <RecipeSearchFormComponent/>
        <b-button variant="primary" v-on:click="fetchData" style="max-height: 30px">Primary</b-button>
      </div>
      <div class="recipes-container">
        <div v-show="results.length > 0" v-for="recipe in results">
          <RecipeComponent v-bind:title="recipe.title"
                           v-bind:id="recipe.id"
                           v-bind:readyInMinutes="recipe.readyInMinutes"
                           v-bind:servings="recipe.servings"
                           v-bind:image="recipe.image"
                           v-bind:imageUrls="recipe.imageUrls"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RecipeComponent from "./RecipeComponent";
  import RecipeSearchFormComponent from './RecipeSearchFormComponent.vue'
  import '../styles/_RecipiesComponent.css'
  import {baseRecipiesApiUrl, addParametersToUrl} from '../shared/constants'
  import axios from 'axios';

  export default {
    components: {RecipeComponent, RecipeSearchFormComponent},
    data() {
      return {
        results: []
      }
    },
    props: {
      example: String,
    },
    mounted() {
    },
    methods: {
      fetchData: function () {
        const myMap = new Map();
        myMap.set('query', 'cheese')
        myMap.set('number', '2')
        axios
          .get(addParametersToUrl(`${baseRecipiesApiUrl}/search`, myMap))
          .then(response => this.results = response.data.results)
      }
    }
  };
</script>
