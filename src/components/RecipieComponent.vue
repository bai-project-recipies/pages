<template>
  <div class="RecipieComponent">
    <div v-for="recipe in results">
      <p>{{recipe.title}}</p>
      <p>{{recipe.id}}</p>
      <br>
    </div>
  </div>
</template>

<script>
  import {baseRecipiesApiUrl, addParametersToUrl} from '../shared/constants'
  import axios from 'axios';

  export default {
    data() {
      return {
        results: []
      }
    },
    props: {
      example: String,
    },
    mounted() {
      const myMap = new Map();
      myMap.set('query', 'cheese')
      myMap.set('number', '2')

      axios
        .get(addParametersToUrl(`${baseRecipiesApiUrl}/search`, myMap))
        .then(response => this.results = response.data.results)
    }
  };
</script>
