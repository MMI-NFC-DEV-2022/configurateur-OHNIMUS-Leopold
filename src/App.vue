<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="space-x-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/AboutView">About</RouterLink>
        <RouterLink to="/IndexView">Index</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
