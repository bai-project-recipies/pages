<template>
  <div class="GenerateMealPlan">
    <h1 class="mb-3 ml-md-10 mt-md-7 text-center blue--text">Generate you meal plan<br></h1>
    <h6 class="text-center font-italic ml-md-10 ">Generate you meal plan and don't look for your meal yourself! :)</h6>
    <div class="panel d-flex">
      <div class="filter-panel flex-fill">
        <GenerateMealPlanSearchFormComponent @setRequestUrl="setRequestUrl" @setTimeFrame="setTimeFrame"/>
      </div>
      <div class="recipes d-flex flex-wrap justify-content-center" style="width: 100%">
        <div v-if="results !== {} && results !== undefined" class="d-flex flex-wrap justify-content-center mt-10" style="width: 100%">
          <div v-if="timeFrame === 'day'" style="width: 90%">
            <DayMealPlan title="Meal plan for one day - 3 meals" :meals="results.meals" :nutrients="results.nutrients"/>
          </div>

          <div v-else>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import GenerateMealPlanSearchFormComponent from "./GenerateMealPlanSearchFormComponent";
  import DayMealPlan from "./DayMealPlan";
  import OneGeneratedMealPlan from "./OneGeneratedMealPlan";
  import WeekMealPlan from "./WeekMealPlan";

  export default {
    name: 'GenerateMealPlan',
    components: {OneGeneratedMealPlan, GenerateMealPlanSearchFormComponent, DayMealPlan, WeekMealPlan},
    data() {
      return {
        timeFrame: '',
        results: {},
      }
    },
    methods: {
      setTimeFrame: function (timeFrame) {
        this.timeFrame = timeFrame
      },
      setRequestUrl: function (url) {
        axios
          .get(url)
          .then(response => this.results = response.data)
      }
    }
  };
</script>
