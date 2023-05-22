export default {
    namespaced: true,
    state() {
        return {
            totalLike: 0,           
        }
    },
    getters: {        
        fakeLike(state) {
            return state.totalLike + 100
        }
    },
    mutations: {
        increment(state) {
            state.totalLike++;
        },        
    },    
}