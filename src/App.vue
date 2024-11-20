<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <router-view></router-view>
  </div>
</template>