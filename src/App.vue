<template>
  <v-app>
    <app-toolbar />
     <v-container xs12 text-xs-center >
      <v-layout row wrap>


        <!-- <app-maincard></app-maincard>
        <app-stocks></app-stocks>
        <app-portfolio></app-portfolio> -->
          <router-view></router-view>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    appToolbar: () => import("@/components/layouts/toolbar/Toolbar"),
  },
  data: () => ({
    //
  })
};
</script>
