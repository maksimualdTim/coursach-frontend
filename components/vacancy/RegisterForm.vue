<template>
  <form>
    <v-row>
      <v-text-field></v-text-field>
      <v-text-field></v-text-field>
      <v-col>
        <v-btn
          class="mr-4"
          @click="registerEvent"
        >
          submit
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
  methods:{
    registerEvent(){

    }
  }
}
</script>

<style scoped>

</style>
