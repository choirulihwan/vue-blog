<template>
    <div>
        Username <input />
    </div>
    <div>
        Password <input />
    </div>
    <button @click="login">Login</button>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const login = () => {
            localStorage.setItem('authenticated', true) 
            router.push({ name: 'home' })
        }

        return { login }
    }
}
</script>