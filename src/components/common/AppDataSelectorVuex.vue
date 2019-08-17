<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 sm3>
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Date From"
              hint="YYYY-MM-DD format"
              persistent-hint
              prepend-icon="event"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
      </v-flex>

       <v-flex xs6 sm3>
        <v-menu
          ref="menu2"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date2"
              label="Date To"
              hint="YYYY-MM-DD format"
              persistent-hint
              prepend-icon="event"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { types } from '@/env'
import { setTimeout } from 'timers';
  export default {
    data: vm => ({
        menu1: false,
        menu2:false
    }),
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
      date: {
        get: function () {
            return this.$store.state.appDataSelector.date
        },
        set: function(date) {
          return this.$store.dispatch(types.ACTION_SET_APP_DATA_SELECTOR, { date })
        }
      },
      date2: {
        get: function () {
          return this.$store.state.appDataSelector.date2
        },
        set: function(date2) {
          return this.$store.dispatch(types.ACTION_SET_APP_DATA_SELECTOR, { date2 })
        }
      },
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
  }
</script>

<style scoped>

</style>