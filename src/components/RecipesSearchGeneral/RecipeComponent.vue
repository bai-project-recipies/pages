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
  import {baseRecipiesApiPhotosUrl, insertNewRow, getLikes, dbTableUrl, dbCorsKey} from '../../shared/constants';
  import axios from 'axios';

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
      likes: Number,
    },
    computed: {
      imageUrl: function () {
        return `${baseRecipiesApiPhotosUrl}${this.image}`
      }
    },
    mounted() {
      let url = new URL(dbTableUrl + `?q={"recipe_id": ${this.id}}`);
      let self = this
      let headers = {
          "content-type": "application/json",
          "x-apikey": dbCorsKey,
          "cache-control": "no-cache",
      }
      axios.get(url=url, {headers: headers})
      .then(function(response){
        if(response.data.length == 0){
          self.likes = 0;
        }else{
          self.likes = response.data[0].likes;
        }
      })
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
