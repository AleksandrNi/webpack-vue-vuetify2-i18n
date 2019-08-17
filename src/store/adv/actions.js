import * as types from './types'
// import {GetDataServise} from '../getDataService'

export default {
    // destPage
    [types.ACTION_PAGE_TO]: (context, payload) => {
        context.commit(types.MUTATE_PAGE_TO, payload)
    },
}