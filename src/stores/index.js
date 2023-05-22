import { createStore } from "vuex"
import post from './modules/post'
import user from './modules/user'

const store = createStore({
    modules: {
        post, 
        user
    }
}); 

export default store