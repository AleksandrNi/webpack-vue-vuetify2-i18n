<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Boilerplate</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text
         v-for="item in [...leftItems]"
          :key="item.id"
          @click="pathMethod({pageTo: item.path })"
          >{{ item.title }}</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
import { types, routeNames } from "@/env";
import { pathMethod } from "@/methods/PathMethod";

export default {
  data() {
    return {
      leftItems: [
        { title: "Advertiser", path: routeNames.ADVERTIZER },
        { title: "Agency", path: routeNames.AGENCY },
        { title: "Arbitrage", path: routeNames.ARBITRAGE },
        { title: "Dev", path: routeNames.DEV }
      ],
      hamburgerMenu: [
        { title: "Faq", path: routeNames.FAQ },
        { title: "Contacts", path: routeNames.CONTACTS }
      ],
      main: routeNames.MAIN,
      drawer: false
      // reqInfo: '',
      // userInfo:{auth: true}
    };
  },
  methods: {
    drawerLink(path) {
      this.drawer = !this.drawer;
      this.pathMethod(path);
    },
    pathMethod
  },
  created() {
    // this.$store.dispatch(types.ACTION_GET_FAVORITE_COMPANIES)
  }
};
</script>

<style lang="css" scoped>
a:hover {
  text-decoration: none;
}
</style>
