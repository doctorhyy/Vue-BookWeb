import { createStore } from 'vuex'

export default createStore({
    state: {
        theme: 'light'
    },
    getters: {},
    mutations: {
        SEND(state, value) {
            state.theme = value
        }
    },
    actions: {
        send(context, value) {
            context.commit('SEND', value);
        }
    },
    modules: {}
})