

import state from './state'
import * as actions  from './actions'
import * as getters  from './getters'
import * as mutatios  from './mutatios'

const myCustomModule ={
    namespaced: true,
    actions,
    getters,
    mutatios,
    state
}

export default myCustomModule