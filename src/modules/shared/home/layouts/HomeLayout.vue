<script setup lang="ts">
import HeaderView from '@/modules/shared/header/views/HeaderView.vue';
import AboutComponent from '@/modules/shared/components/AboutComponent.vue';
import AddComponents from '@/components/AddComponents.vue';
</script>

<template>
    <div>
        <div class="container-fluid">
            <HeaderView />
            <div class="row">
                <div class="col-lg-3">
                    <AboutComponent />
                    <AboutComponent />
                </div>
                <RouterView />
                <AddComponents />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>