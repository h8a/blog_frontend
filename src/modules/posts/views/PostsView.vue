<script setup lang="ts">
import PostPreviewComponent from '@/modules/posts/components/PostPreviewComponent.vue';

</script>

<template>
    <div class="col-lg-7 text-center">
        <div class="row my-5">
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
        </div>

        <PostPreviewComponent />
        <PostPreviewComponent />
        <PostPreviewComponent />
        <PostPreviewComponent />

        <div class="row mt-5" hidden>
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>

</style>