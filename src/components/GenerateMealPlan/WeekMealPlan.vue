<template>
  <div class="WeekMealPlan mb-3">
    <h3>Meal plan for one week (3 meals per day)</h3>
    <div v-for="day in daysOfWeek" class="mt-3">
      <b-card v-bind:title="day.toLocaleUpperCase()">
        <DayMealPlan :meals="weekPlan[`${day}`].meals" :nutrients="weekPlan[`${day}`].nutrients"/>
      </b-card>
    </div>
  </div>
</template>

<script>
  import DayMealPlan from "./DayMealPlan";

  export default {
    name: 'OneGeneratedMealPlan',
    components: {DayMealPlan},
    data() {
      return {
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        likes: 0
      }
    },
    props: {
      weekPlan: Object,
    },
  };
</script>
