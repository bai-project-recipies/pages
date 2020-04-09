<template>
  <div class="RecipeSearchFormComponent ml-md-4">
      <h4 class="text-center mb-5">Search criteria</h4>

      <b-form class="row justify-content-center" @submit="onSubmit" @reset="onReset">
        <div id="checkbox-container" class="d-flex flex-wrap justify-content-center">
          <FormCriteriaCheckBoxComponent id="cuisine"
                                         :options="supportedCuisines"
                                         label="Cuisine: "
                                         toggleText="Cuisine"
                                         @setSelected="setSelectedCuisine"/>
          <FormCriteriaCheckBoxComponent id="diet"
                                         :options="supportedDiet"
                                         label="Diet: "
                                         @setSelected="setSelectedDiet"
                                         toggleText="Diet"/>
          <FormCriteriaCheckBoxComponent id="intolerances"
                                         :options="supportedIntolerances"
                                         label="Intolerances: "
                                         @setSelected="setSelectedIntolerates"
                                         toggleText="Intolerances"/>
        </div>

        <b-form-tags input-id="exclude-ingredients"
                     separator=" ,;"
                     placeholder="Exclude ingredients..."
                     no-add-on-enter
                     v-model="form.excludeIngredients"
                     class="mb-2 mt-2"/>

        <b-card id="recipes-number">
          <label>Number of recipes</label>
          <b-form-spinbutton
            id="number"
            v-model="form.number"
            min="1"
            max="30"
            step="1"/>
        </b-card>

        <b-button class="col-12 mt-md-4 mt-sm-2" type="submit" variant="primary">Submit</b-button>
      </b-form>
  </div>
</template>

<script>
  import '../styles/_RecipeSearchFormComponent.css'
  import FormCriteriaCheckBoxComponent from "./FormCriteriaCheckBoxComponent.vue";
  import {baseRecipiesApiUrl, getWithEndpoint} from '../shared/constants'

  export default {
    components: {FormCriteriaCheckBoxComponent},
    data() {
      return {
        supportedCuisines: ['african', 'american', 'british', 'caribbean', 'chinese', 'european',
          'french', 'german', 'indian', 'irish', 'italian', 'japanese', 'korean', 'jewish', 'mexican',
          'spanish', 'thai', 'vietnamese'],
        supportedDiet: ['vegan', 'vegetarian', 'gluten free', 'ketogenic'],
        supportedIntolerances: ['dairy', 'egg', 'gluten', 'peanut', 'seafood', 'shellfish', 'soy'],
        form: {
          intolerances: [],
          diet: [],
          cuisine: [],
          excludeIngredients: [],
          number: 0,
        },
      }
    },
    props: {
      baseUrl: String,
    },
    methods: {
      setSelectedCuisine: function (value) {
        this.form.cuisine = value
      },
      setSelectedDiet: function (value) {
        this.form.diet = value
      },
      setSelectedIntolerates: function (value) {
        this.form.intolerances = value
      },

      onSubmit(evt) {
        evt.preventDefault()
        const url = new URL(`${baseRecipiesApiUrl}/search/`);
        url.searchParams.append('number', this.form.number);
        url.searchParams.append('cuisine', this.form.cuisine);
        url.searchParams.append('excludeIngredients', this.form.excludeIngredients);
        url.searchParams.append('intolerances', this.form.intolerances);

        this.$emit('setRequestUrl', getWithEndpoint(url))
      },

      onReset(evt) {
        evt.preventDefault()
        this.form.intolerances = []
        this.form.diet = []
        this.form.cuisine = []
        this.form.excludeIngredients = []
        this.form.number = 0
      },
    }
  }
</script>
