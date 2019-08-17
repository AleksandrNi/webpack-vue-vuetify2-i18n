<template>
<v-container>
  <v-layout row wrap>
    <v-flex offset-xs4 xs4>
      <v-btn rounded> 
        <svg height="20" width="30" class="pr-2">
          <use xlink:href="#about"></use>
        </svg >
        Hello Alert Button</v-btn>
    </v-flex>    
        <v-flex xs12 >
<!-- Example of svg image -->
          <svg>
          <use xlink:href="#add_column"></use>
        </svg>

            <h1 
            :class="{
            'title': $vuetify.breakpoint.xs,
            'display-1': $vuetify.breakpoint.sm
              }"
            class="my-2"
            >Are you ready to growing your sales?</h1>
            <!-- <p>{{ $t('forms.registration.texts.ifFromCourses', {name: name, value: value} ) }}</p> -->
            <p>{{ $t('close') }}</p>
            <p>{{ $t('dataTable.ariaLabel.sortNone') }}</p>
            <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum eum non soluta. Aliquam at debitis earum eius,
                facilis itaque, minima minus nulla odio quaerat similique voluptatum.
                Magnam obcaecati sint ullam!</p>
            <v-btn rounded dark class="red lighten-1 text-none px-4"><v-icon left>mdi-anchor</v-icon> Begin right now !</v-btn>
        </v-flex>  
  </v-layout>
</v-container>
</template>

<script>

export default {
  name: 'Advertiser',
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>