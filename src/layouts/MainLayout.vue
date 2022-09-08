<template>
    <router-link to="/" class="auth__arrow">
        <i class="fa-solid fa-arrow-left"></i>
    </router-link>
    <h1>Это Main Layout</h1>
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({})
</script>