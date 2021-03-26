import { createStore } from "vuex"

export default createStore({
    state: {
        city: {},
    },
    mutations: {
        updateSelectedCity(state, newCity) {
            state.city = newCity
        },
    },
    actions: {},
    modules: {},
})
