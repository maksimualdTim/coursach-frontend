<template>
  <div class="VacancyCard">
    <v-card-title>{{vacancy.title}}</v-card-title>
    <v-card-subtitle> category: {{categories[vacancy.category]}}</v-card-subtitle>
    <v-card-subtitle> maxBounty: {{vacancy.maxBounty}}</v-card-subtitle>
    <v-card-subtitle>minBount: {{vacancy.minBounty}}</v-card-subtitle>
    <v-card-text>Description: {{vacancy.description}}</v-card-text>
  </div>
</template>

<script>
export default {
  name: "VacancyCard",
  props:{
    vacancy:{
      type: Object,
      required: true
    },
    categories:{
      type: Array,
      required: true
    },
  },
}
</script>

<style scoped>

</style>
