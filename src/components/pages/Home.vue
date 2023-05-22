<template>
    <h2>Homepage</h2>    
    <p><button @click="increment">Add Like</button>&nbsp;
    <button @click="setUsername('choirul')">Change username</button>&nbsp;
    <button @click="getCredential">Change Profile</button></p> 
    <p>Selamat Datang {{ username }}</p>
    <pre>{{ credential }}</pre>
    <p>Total like: {{ like }}</p>
    <p>Fake like: {{ fakeLike }}</p>
    
</template>

<script>
// composition api
// import { useStore } from 'vuex';
// import { computed, ref, onMounted } from 'vue';

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    // composition api 
    // setup() {
    //     const store = useStore()
    //     const username = ref("")

    //     const like = computed(() => {
    //         return store.state.totalLike
    //     })

    //     const fakeLike = computed(() => {
    //         return store.getters.fakeLike
    //     })

    //     const credential = computed(() => {
    //         return store.state.credential
    //     })

    //     onMounted(() => {
    //         username.value = store.state.username
    //     })

    //     return { like, username, credential, fakeLike }
    // },
    
    // global vuex
    // computed: {
    //     ...mapState(['username', 'credential']),
    //     ...mapState({
    //         like: 'totalLike'
    //     }),
    //     ...mapGetters(['fakeLike'])        
    // },
    // methods: {
    //     ...mapMutations(['increment', 'setUsername']),
    //     ...mapActions(['getCredential'])
    // }

    // module vuex
    computed: {
        ...mapState({
            username: state => state.user.username, 
            credential: state => state.user.credential,
            like: state => state.post.totalLike
        }),
        ...mapGetters({
            fakeLike: 'post/fakeLike'
        })
    },
    methods: {
        ...mapMutations({
            increment: 'post/increment', 
            setUsername: 'user/setUsername'
        }),
        ...mapActions({
            getCredential: 'user/getCredential'
        })
    } 
   
}
</script>