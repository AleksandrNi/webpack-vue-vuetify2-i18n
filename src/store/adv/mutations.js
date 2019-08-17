import * as types from './types'
// import {pathMethod} from '../methods/PathMethod'
export default {

    // destPage
    [types.MUTATE_PAGE_TO]: (state, payload) => {
        state.pageTo = payload
    },
}