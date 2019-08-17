
// ADMIN
import adminRouter from '@/routes/admin/routes'
import { adminStore } from '@/store/admin/store'
import * as adminRouteNames from '@/routes/admin/adminRouteNames'
import * as adminTypes from '@/store/admin/types'
import { adminUrls } from '@/store/admin/urls'

// ADV
import advRouter from '@/routes/adv/routes'
import { advStore } from '@/store/adv/store'
import * as advRouteNames from '@/routes/adv/advRouteNames'
import * as advTypes from '@/store/adv/types'
import { advUrls } from '@/store/adv/urls'

let router;
let store;
let routeNames;
let types;
let urls;

if(__PROJECT === 'admin'){

    router = adminRouter;
    store = adminStore;
    routeNames = adminRouteNames;
    types = adminTypes;
    urls = adminUrls;
}
else if (__PROJECT === 'adv') {
    
    router = advRouter;
    store = advStore;
    routeNames = advRouteNames;
    types = advTypes;
    urls = advUrls;
    
} else {
    console.error('Hello new project name!');
    
}

export { router, store, routeNames, types, urls };

// console.log(store);
// console.log(router);
// console.log(routeNames);
// console.log(types);

