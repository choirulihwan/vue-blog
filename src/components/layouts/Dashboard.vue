<template>
    <nav style="text-align:center">
      <router-link to="/">Home</router-link> | 
      <router-link to="/posts">Posts</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/contact">Contact</router-link> |
      <button @click="logout">Logout</button>
    </nav>
    <hr/>
    <router-view />
</template>
  
<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        const router = useRouter()
        const store = useStore()

        const logout = () => {
            localStorage.setItem("authenticated", false)
            
            router.push({ name: 'login' })                     
        }

        return { logout }
    }
}
</script>