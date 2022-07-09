<template>
  <v-container>
    <v-row v-if="">
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-btn>Create Vacancy</v-btn>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <vacancy-form>
                <!--                @powerLabel="setPowerLabel"-->
                <!--                v-bind:new_event="new_event"-->
                <!--                @sendEvent="sendEvent"-->
                <!--                v-bind:typeItems="typeItems">-->
              </vacancy-form>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="vacancy in vacancies" :key="vacancy.id" cols="12" md="2">
        <v-card>
          <cards-vacancy-card v-bind:vacancy="vacancy"></cards-vacancy-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyVacancies",
  data(){
    return {
      vacancies: [],
      host: 'http://127.0.0.1:8000/',
    }
  },
  methods:{
    async fetchVacancies(){
      const response = await this.$axios.$get(`${this.host}api/v1/my-vacancies/`)
      this.vacancies = response.results
    },
  },
  mounted() {
    this.fetchVacancies()
  }
}
</script>

<style scoped>

</style>
