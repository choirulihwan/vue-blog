<template>
    Homepage    
    <p>Total like: {{ like }}</p>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    setup() {
        const store = useStore();

        const like = computed(() => {
            return store.state.totalLike
        }) 

        return { like }
    },
}
</script>