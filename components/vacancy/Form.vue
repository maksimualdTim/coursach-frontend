<template>
  <form>
    <v-row>
      <v-col>
        <v-text-field></v-text-field>
      </v-col>
      <v-col>
        <v-date-picker></v-date-picker>
      </v-col>
      <v-col>
        <v-text-field></v-text-field>
      </v-col>
      <v-col>
        <v-btn
          class="mr-4"
          @click="sendEvent"
        >
          submit
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {
  name: "Form",
  methods:{
    sendEvent(action){
      this.$emit('sendEvent')
    },
  }
}
</script>

<style scoped>

</style>
