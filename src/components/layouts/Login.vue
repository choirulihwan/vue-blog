<template>
    <div>
        Username <input v-model="username" />
    </div>
    <div>
        Password <input />
    </div>
    <button @click="login">Login</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';

const router = useRouter()
const store = useStore()
const username = ref("")

const login = () => {
    localStorage.setItem('authenticated', true) 
    store.commit('user/setUsername', username.value)   
    store.dispatch("user/getCredential")            
    router.push({ name: 'home' })
}
    
</script>