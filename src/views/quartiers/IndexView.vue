<script setup lang="ts">
import { useRouter } from "vue-router";


const router = useRouter();


import { supabase } from "../../supabase";
const { data, error } = await supabase.from('quartiercommune').select('*').order('nomCommune');
if (error) console.log("n'a pas pu charger la view quartiercommune :", error);

let idQuartierASupprimer = 0;

async function supprimerQuartier() {
  console.log("supprimerQuartier", idQuartierASupprimer);
const { data, error } = await supabase
    .from("Quartier")
    .delete()
    .match({ id: idQuartierASupprimer });
  if (error) {
    console.error(
      "Erreur à la suppression de ",
      idQuartierASupprimer,
      "erreur :",
      error
    );
  } else {
    router.push({ name: "quartiers-index", force: true });
  }
}
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <!-- <ul>
      <li v-for="quartierObject in (data as any[])">
        {{ quartierObject.nomQuartier }} -
        {{ quartierObject.nomCommune }}
      </li>
    </ul> -->
    <ul>
      <li v-for="(listeQuartiers, nomCommune) in Object
      //@ts-ignore
      .groupBy( data, 
      //@ts-ignore
      v=>v.nomCommune  )">
        {{ nomCommune }}
        <p class="ml-5" v-for="quartierObject in listeQuartiers">
          <RouterLink :to="{ name:'quartiers-edit', params:{id:quartierObject.idQuartier} }">{{ quartierObject.nomQuartier }}</RouterLink>
          <button
            type="button"
            @click="($refs.dialogSupprimer as any).showModal(); idQuartierASupprimer = quartierObject.idQuartier;"
            class="focus-style justify-self-end rounded-md bg-red-500 p-2 shadow-sm"
          >
            Supprimer l'offre
          </button>
        </p>
      </li>
    </ul>

    <dialog
      ref="dialogSupprimer"
      @click="($event.currentTarget as any).close()"
    >
      <button
        type="button"
        class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm"
      >
        Annuler</button
      ><button
        type="button"
        @click="supprimerQuartier()"
        class="focus-style rounded-md bg-red-500 p-2 shadow-sm"
      >
        Confirmer suppression
      </button>
    </dialog>
  </section>
</template>