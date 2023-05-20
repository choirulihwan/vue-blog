<template>
    <Suspense>
        <template #default>
            <PostList/>
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script>
import PostList from '../PostList.vue';

export default {
    components: { PostList }
};
</script>