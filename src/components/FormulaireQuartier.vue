<script setup lang="ts">
import { ref } from 'vue'
import AfficheQuartier from './AfficheQuartier.vue';
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute('/quartiers/edit/:id?')
const router = useRouter()

async function upsertQuartier(dataForm, node) {
    const { data, error } = await supabase.from("Quartier").upsert(dataForm).select();
    if (error) node.setErrors([error.message])
    else {
console.log({error,data});

        node.setErrors([]);
        router.push({ name: "quartiers-edit", params: { id: data[0].id } });
    }
}


const quartier = ref({});


if (route.params.id) {
    // On charge les données de la maison
    let { data, error } = await supabase
    .from("Quartier")
    .select("*")
    .eq("id", route.params.id);
    if (error) console.log("n'a pas pu charger le table Quartier :", error);
    else quartier.value = (data as any[])[0];
}


const { data: listeCommune, error } = await supabase
  .from("Commune")
  .select("*");
if (error) console.log("n'a pas pu charger la table Commune :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsCommune = listeCommune?.map((commune) => ({
  value: commune.id,
  label: commune.nomCommune,
}));

let idASupp = route.params.id;

async function supprimerQuartier() {
  const { data, error } = await supabase
    .from("Quartier")
    .delete()
    .match({ id: idASupp });
  if (error) {
    console.error(
      "Erreur à la suppression de ",
      idASupp,
      "erreur :",
      error
    );
  } else {
    router.push("/quartiers");
  }
}

</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">
                Résultat (Prévisualisation)
            </h2>
            <AfficheQuartier v-bind="quartier" />
        </div>
        <div class="p-2">
            <FormKit type="form" v-model="quartier" 
            @submit="upsertQuartier"
            :config="{
            classes: {
            input: 'p-1 rounded border-gray-300 shadow-sm border',
            label: 'text-gray-600',
            },
            }"
            :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }">
                <FormKit name="nomQuartier" label="nom" />
                <!-- <FormKit name="idCommune" label="Commune" /> -->
                <FormKit
                    type="select"
                    name="idCommune"
                    label="Commune"
                    :options="optionsCommune"
                />
            </FormKit>
            
            <button
                type="button"
                v-if="idASupp"
                @click="($refs.dialogSupprimer as any).showModal()"
                class="focus-style justify-self-end rounded-md bg-red-500 p-2 shadow-sm"
            >
                Supprimer l'offre
            </button>
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
        </div>
    </div>
</template>