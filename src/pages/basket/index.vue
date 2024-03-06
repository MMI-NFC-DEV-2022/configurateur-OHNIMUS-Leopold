<script setup lang="ts">
import BasketProfil from "@/components/SvgProfil.vue";
import type { Basket } from "@/types";
import { supabase } from "@/supabase";
import { ref } from "vue";

const listeBaskets = ref<Basket[]>([]);

async function fetchBaskets() {
  const { data, error } = await supabase.from<Basket>("Basket").select("*");
  if (error) {
    console.error("Erreur lors de la récupération des paniers depuis Supabase:", error.message);
    return;
  }
  listeBaskets.value = data || [];
}

fetchBaskets();

function getDataString(index: number): string {
  return encodeURIComponent(JSON.stringify(listeBaskets.value[index]));
}
</script>

<template>
  <section>
    <h1 class="text-2xl">Liste des Baskets de la BDD</h1>
    <div class="flex flex-wrap gap-2">
      <div v-for="(exemple, index) in listeBaskets" :key="index" class="w-64">
        <RouterLink :to="`/basket/edit/${getDataString(index)}`">
          <BasketProfil class="w-64" v-bind="exemple" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>