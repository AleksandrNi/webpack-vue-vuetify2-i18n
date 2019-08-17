<template>
    <v-container
    >
      <v-layout row wrap>
        <v-flex xs12 sm4>
            <h4 class="grey--text text--darken-4" style="text-align:left;">Select one or multiple params</h4>
          <v-select
            color="grey"
            v-model="value"
            :items="items"
            attach
            chips
            label="Params"
            multiple
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
</template>{
          
        }

<script>
import { types } from '@/env'

export default {
  data: () => ({
  }),
  computed: {
    items: {
      get: function () {
        return this.$store.state.appSelector.items
      },
      set: function(items) {
        return this.$store.dispatch(types.ACTION_SET_APP_SELECTOR_DATA, { items })
      }
    },
    value: {
      get: function () {
        return this.$store.state.appSelector.value
      },
      set: function (value) {
        return this.$store.dispatch(types.ACTION_SET_APP_SELECTOR_DATA, { value })
      }
    }
  },
  created () {
    this.$store.dispatch(types.ACTION_GET_APP_SELECTOR_DEFAULT_DATA)
  }
}
</script>

<style>

</style>