<!-- <script setup lang="ts">
import BasketProfil from "../components/SvgProfil.vue";
import type { Basket } from "../types";
const exemple0: Basket = {
  semelle: "#FF0000",
  empeigne: "#FFFFFF",
  pointe: "#FFFFFF",
  oeillet: "#FFFFFF",
  bande: "#00FF00",
  languette: "#FFFFFF",
  lacet: "#00FF00",
  trimestre: "#FFFFFF",
};
</script>
<template>
  <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
          :to="{
            name: '/basket/exemple/[data]',
            params: { data: JSON.stringify(exemple0) },
          }"
        >
          <BasketProfil class="w-64" v-bind="exemple0" />
        </RouterLink>
      </div>
    </div>
  </section>
</template> -->

<script setup lang="ts">
import BasketProfil from "../components/SvgProfil.vue";
import type { Basket } from "../types";

const exemples: Basket[] = [
  {
    semelle: "#FF0000",
    empeigne: "#FFFFFF",
    pointe: "#FFFFFF",
    oeillet: "#FFFFFF",
    bande: "#00FF00",
    languette: "#FFFFFF",
    lacet: "#00FF00",
    trimestre: "#FFFFFF",
  },
  {
    semelle: "#0000FF",
    empeigne: "#FFFF00",
    pointe: "#FFFFFF",
    oeillet: "#000000",
    bande: "#00FFFF",
    languette: "#FF00FF",
    lacet: "#FF0000",
    trimestre: "#00FF00",
  },
  {
    semelle: "#00FF00",
    empeigne: "#FF00FF",
    pointe: "#FFFF00",
    oeillet: "#00FFFF",
    bande: "#FF0000",
    languette: "#0000FF",
    lacet: "#FFFFFF",
    trimestre: "#000000",
  },
];

function getDataString(index: number): string {
  return encodeURIComponent(JSON.stringify(exemples[index]));
}
</script>

<template>
  <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div v-for="(exemple, index) in exemples" :key="index" class="w-64">
        <RouterLink :to="`/basket/exemple/${getDataString(index)}`">
          <BasketProfil class="w-64" v-bind="exemple" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>