<template>
  <form>
    <v-row>
      <v-col>
        <v-text-field label="max bounty" v-model="filter.maxBounty"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="min bounty" v-model="filter.minBounty"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="Search..." v-model="filter.q"></v-text-field>
      </v-col>
      <v-col>
        <v-btn
          class="mr-4"
          @click="filterEvent"
        >
          Filter
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {
  name: "SortForm"
}
</script>
<script>
export default {
  props:{
    filter:{
      type: Object,
      required: true,
    }
  },
  methods:{
    filterEvent(){
      this.$emit('filterEvent', this.filter)
    },
  }
}
</script>
<style scoped>

</style>
