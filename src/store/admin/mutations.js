import * as types from './types'

// import {pathMethod} from '../methods/PathMethod'
export default {

    // destPage
    // [types.MUTATE_PAGE_TO]: (state, payload) => {
    //     state.pageTo = payload
    // },

    // appInputSelector
    [types.MUTATE_RECEIVE_INPUT_SELECTOR_DATA]: (state, payload) => {
        if (payload.selectorZero) {
            state.appInputSelector.selectors[0].data = payload.selectorZero
        }
        if (payload.selectorFirst) {
            state.appInputSelector.selectors[1].data = payload.selectorFirst
        }
    },
    [types.MUTATE_STORE_INPUT_SELECTOR_SELECTED_DATA]: (state, payload) => {
        if (payload.selector === 0) {
            state.appInputSelector.selectors[0].selectedData = payload.data
        }
        if (payload.selector === 1) {
            state.appInputSelector.selectors[1].selectedData = payload.data
        }
    },

    // appSelector
    [types.MUTATE_GET_APP_SELECTOR_DEFAULT_DATA]: (state, payload) => {
        if (payload.items) state.appSelector.items = [...payload.items];
    },
    [types.MUTATE_SET_APP_SELECTOR_DATA]: (state, payload) => {
        if (payload.value) state.appSelector.value = [...payload.value];
    },
    // appDataSelector
    [types.MUTATE_SET_APP_DATA_SELECTOR]: (state, payload) => {
        if (payload.date) state.appDataSelector.date = payload.date;
        if (payload.date2) state.appDataSelector.date2 = payload.date2;
    },
    // appTableServerSide
    [types.MUTATE_RECEIVE_TABLE_DATA]: (state, payload) => {
        state.appTableServerSide = payload;
    },

    [types.MUTATE_RECEIVE_SORTED_TABLE_DATA]: (state, payload) => {
        state.appTableServerSide = payload;
    }
}