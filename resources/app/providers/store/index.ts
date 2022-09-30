import Vue from 'vue'
import Vuex, { Store, StoreOptions } from 'vuex'

Vue.use(Vuex)

export type StateRoot = {
}

const store: StoreOptions<StateRoot> = {
    modules: {
    },
}

const createStore = (): Store<StateRoot> => new Vuex.Store<StateRoot>(store)

export default createStore
