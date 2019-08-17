import * as types from './types'

import { GetDataService } from '@/getDataService'

export default {
    // destPage
    // [types.ACTION_PAGE_TO]: (context, payload) => {
    //     context.commit(types.MUTATE_PAGE_TO, payload)
    // },
    // appInputSelector data
    [types.ACTION_RECEIVE_INPUT_SELECTOR_DATA]: async (context, payload) => {
        const response = await GetDataService.get('inputSelectorData', payload)
        
        context.commit(types.MUTATE_RECEIVE_INPUT_SELECTOR_DATA, response)
    },
    [types.ACTION_SEND_INPUT_SELECTOR_SELECTED_DATA]: async (context, payload) => {
        const response = await GetDataService.post('inputSelectorData', payload)
// not included
        context.commit(types.MUTATE_RECEIVE_INPUT_SELECTOR_DATA, response)
    },
    [types.ACTION_STORE_INPUT_SELECTOR_SELECTED_DATA]: async (context, payload) => {
        context.commit(types.MUTATE_STORE_INPUT_SELECTOR_SELECTED_DATA, payload)
    },

    // appSelector
    [types.ACTION_GET_APP_SELECTOR_DEFAULT_DATA]: async (context) => {
        const response = await GetDataService.get('selectorData');
        context.commit(types.MUTATE_GET_APP_SELECTOR_DEFAULT_DATA, response)
    },
    [types.ACTION_SET_APP_SELECTOR_DATA]: async (context, payload) => {

        context.commit(types.MUTATE_SET_APP_SELECTOR_DATA, payload)
    },

    // appDataSelector
    [types.ACTION_SET_APP_DATA_SELECTOR]: async (context, payload) => {
        context.commit(types.MUTATE_SET_APP_DATA_SELECTOR, payload)
    },
    
    // appTableServerSide
    [types.ACTION_RECEIVE_TABLE_DATA]: async (context, payload) => {

        let response;
        if (payload.default) response = await GetDataService.get('tableServerSide', payload);

        if (payload.selectedParams) {
            const complexPayload = {
                filters: payload.selectedParams,
                sorting: false
            }
            response = await GetDataService.post('tableServerSide', complexPayload);
        }
        
        context.commit(types.MUTATE_RECEIVE_TABLE_DATA, response)
    },
    [types.ACTION_RECEIVE_SORTED_TABLE_DATA]: async (context, payload) => {

        const complexPayload = {
            filters: false,
            sorting: payload
        }
        const response = await GetDataService.post('tableServerSide', complexPayload)
        context.commit(types.MUTATE_RECEIVE_SORTED_TABLE_DATA, response)
    }
}