<script setup lang="ts">
import VueFeather from 'vue-feather'
</script>

<template>
    <div class="row text-center my-3">
        <div class="row">
            <div class="col">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png" class="rounded-circle w-50" alt="avatar-1">
            </div>
        </div>
        <div class="row">
            <h2>Fullname</h2>
        </div>
        <div class="row">
            <p>Description about to writer</p>
        </div>
        <div class="row">
            <div class="col">
                <vue-feather type="link"></vue-feather>
                <vue-feather type="github"></vue-feather>
                <vue-feather type="linkedin"></vue-feather>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>