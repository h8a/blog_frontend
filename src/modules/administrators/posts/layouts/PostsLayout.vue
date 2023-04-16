<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from '@/modules/administrators/shared/header/HeaderView.vue'

const authenticated = false;

</script>

<template>
    <div class="px-3">
        <HeaderView />
        <RouterView />
    </div>
</template>

<style scoped>

</style>