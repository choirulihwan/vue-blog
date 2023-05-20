import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            totalLike: 0
        }
    },
    mutations: {
        increment(state) {
            state.totalLike++;
        }
    }
}); 

export default store