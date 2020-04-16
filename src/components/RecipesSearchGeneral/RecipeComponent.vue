<template>
  <div class="RecipeComponent">
    <b-card v-bind:title="title"
            v-bind:img-src="imageUrl"
            img-alt="Image"
            img-top
            class="mb-1 mr-1"
            style="min-width: 15rem; max-width: 20rem; height: 37rem" img-height="300rem">
      <!--      <b-img :src="imageUrl" center fluid rounded="10"/>-->
      <b-card-text>
        <p class="information">Ready in minutes: {{readyInMinutes}}</p>
        <p class="information">Servings: {{servings}}</p>
        <p class="information">Likes: {{likes}}</p>
      </b-card-text>
      <b-button href="#" variant="primary" style="color: aliceblue">Go to recipe</b-button>
    </b-card>
  </div>
</template>

<script>
  import {baseRecipiesApiPhotosUrl, insertNewRow, getLikes} from '../../shared/constants';

  export default {
    data() {
      return {
        results: []
      }
    },
    props: {
      id: Number,
      title: String,
      readyInMinutes: Number,
      servings: Number,
      image: String,
      imageUrls: Array,
    },
    computed: {
      imageUrl: function () {
        return `${baseRecipiesApiPhotosUrl}${this.image}`
      },
      likes: function () {
        return getLikes(this.id);
      }
    },
    mounted() {
    },
    created() {
    },
    methods: {
      print: function () {
        console.log(this.id)
      }
    }
  }
</script>
