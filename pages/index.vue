<template>
  <v-container>
    <v-row>
      <v-col>
        <vacancy-sort-form
          v-bind:filter="filter"
          @filterEvent="filterAction"
        ></vacancy-sort-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="vacancy in vacancies" :key="vacancy.id" cols="12" md="2">
        <v-card>
          <cards-vacancy-card v-bind:vacancy="vacancy" v-bind:categories="categories"></cards-vacancy-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},

  data(){
    return {
      vacancies: [],
      categories: [],
      filter: {},

    }
  },
  methods:{
    async fetchVacancies(){
     const response = await this.$axios.$get('api/v1/vacancy/')
      this.vacancies = response.results
    },
    async fetchCategories(){
     const response = await this.$axios.$get('api/v1/vacancy/categories/')
      this.categories = response.categories
    },
    async fetchFiltered(filter){
      const response = await this.$axios.$get(`api/v1/filter/?q=${filter.q}&max-bounty=${filter.maxBounty}&min-bounty=${filter.minBounty}`)
      this.vacancies = response.results
    },
    filterAction(filter){
      this.fetchFiltered(filter)
    }
  },
  mounted() {
    this.fetchVacancies()
    this.fetchCategories()
  },

}
</script>
