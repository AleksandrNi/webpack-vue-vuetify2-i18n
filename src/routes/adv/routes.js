import Vue from 'vue'
import Router from 'vue-router'

import * as routeNames from './advRouteNames'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //specific
    { path: routeNames.MAIN, name: routeNames.MAIN, component: () => import( /* webpackChunkName: "admin_header" */  '@/pages/adv/main/Main') },
    { path: routeNames.ADVERTIZER, name: routeNames.ADVERTIZER, component: () => import( /* webpackChunkName: "adv_header" */ '@/pages/adv/advertiser/Advertiser') },
    { path: routeNames.AGENCY, name: routeNames.AGENCY, component: () => import( /* webpackChunkName: "adv_header" */ '@/pages/adv/agency/Agency') },
    { path: routeNames.ARBITRAGE, name: routeNames.ARBITRAGE, component: () => import( /* webpackChunkName: "adv_header" */ '@/pages/adv/arbitrage/Arbitrage') },
    { path: routeNames.FAQ, name: routeNames.FAQ, component: () => import( /* webpackChunkName: "adv_header" */ '@/pages/adv/faq/Faq') },
    { path: routeNames.CONTACTS, name: routeNames.CONTACTS, component: () => import( /* webpackChunkName: "adv_header" */ '@/pages/adv/contacts/Contacts') },
    { path: routeNames.DEV, name: routeNames.DEV, component: () => import( /* webpackChunkName: "adv_header" */ '@/pages/adv/dev/Dev') },
    // common
    { path: routeNames.GDPR, name: routeNames.GDPR, component: () => import( /* webpackChunkName: "admin_footer" */ '@/pages/common/gdpr/Gdpr') },
    { path: routeNames.OPT_OUT, name: routeNames.OPT_OUT, component: () => import( /* webpackChunkName: "admin_footer" */ '@/pages/common/optOut/OptOut') },
    { path: routeNames.PRIVATE_POLICY, name: routeNames.PRIVATE_POLICY, component: () => import( /* webpackChunkName: "admin_footer" */ '@/pages/common/privatePolicy/PrivatePolicy') },
    { path: routeNames.RTB, name: routeNames.RTB, component: () => import( /* webpackChunkName: "admin_footer" */ '@/pages/common/rtb/Rtb') },
    { path: routeNames.RULES, name: routeNames.RULES, component: () => import( /* webpackChunkName: "admin_footer" */ '@/pages/common/rules/Rules') },
  ]
})