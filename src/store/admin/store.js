import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

export const adminStore = new Vuex.Store({
    state: {

        // array of arrays [ [{date: '', comment: ''}, {date: '', comment: ''}], ticker] ]
        comments: [],
        appTableServerSide: {
            columns: [],
            rows: [],
            totalRecords: [],
        },
        appInputSelector: {
            selectors: [
            // firstSelector
            {
                data: [],
                selectedData: '',
            },
            // secondSelector
            {
                data: [],
                selectedData: '',
            },
            ]
        },
        appSelector: {
            // receive from backend
            items: [],
            // user selected values
            value: []
        },
        appDataSelector: {
            date: new Date().toISOString().substr(0, 10),
            date2: new Date().toISOString().substr(0, 10),
        }


    },
    getters,
    actions,
    mutations,

    modules: {
        // counter
    }
})