<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="space-x-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/simple">Simple</RouterLink>
        <RouterLink to="/formkit">Formkit</RouterLink>
        <RouterLink to="/maisons/edit">NouvelleMaison</RouterLink>
        <RouterLink to="/maisons">ListeMaisons</RouterLink>
        <RouterLink to="/quartiers/edit">NouveauQuartier</RouterLink>
        <RouterLink to="/quartiers">ListeQuartiers</RouterLink>
        <RouterLink to="/auth">Auth</RouterLink>
      </nav>
    </div>
  </header>

  <Suspense>
    <RouterView :key="$router.params" />
  </Suspense>
</template>
