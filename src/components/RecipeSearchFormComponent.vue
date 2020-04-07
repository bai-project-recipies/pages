<template>
    <div class="RecipeSearchFormComponent">
        <h4>Search criteria</h4>
    </div>
</template>

<script>
  import {baseRecipiesApiPhotosUrl} from '../shared/constants'
  import '../styles/_RecipeSearchFormComponent.css'

  export default {
    data() {
      return {
        results: []
      }
    },
    props: {
      // id: Number,
      // title: String,
      // readyInMinutes: Number,
      // servings: Number,
      // image: String,
      // imageUrls: Array,
    },
    computed: {
      // imageUrl: function () {
      //   return `${baseRecipiesApiPhotosUrl}${this.image}`
      // }
    },
    mounted() {
    },
    created() {
    },
    methods: {
      //   print: function () {
      //     console.log(this.id)
      //   }
      // }
    }
  }
</script>
