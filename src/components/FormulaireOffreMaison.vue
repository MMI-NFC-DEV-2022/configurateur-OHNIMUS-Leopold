<script setup lang="ts">
import { ref } from 'vue'
import AfficheMaison from './AfficheMaison.vue';
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute('/maisons/edit/:id?')
const router = useRouter()

const { data, error } = await supabase.from('quartiercommune').select('*').order('nomCommune');
if (error) console.log("n'a pas pu charger la view quartiercommune :", error);


async function upsertMaison(dataForm, node) {
    const { data, error } = await supabase.from("Maison").upsert(dataForm).select();
    if (error) node.setErrors([error.message])
    else {
console.log({error,data});

        node.setErrors([]);
        router.push({ name: "maisons-edit", params: { id: data[0].id } });
    }
}


const maison = ref({});


if (route.params.id) {
    // On charge les données de la maison
    let { data, error } = await supabase
    .from("Maison")
    .select("*")
    .eq("id", route.params.id);
    if (error) console.log("n'a pas pu charger le table Maison :", error);
    else maison.value = (data as any[])[0];
}


</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">
                Résultat (Prévisualisation)
            </h2>
            <AfficheMaison v-bind="maison" />
        </div>
        <div class="p-2">
            <FormKit type="form" v-model="maison" 
            @submit="upsertMaison"
            :config="{
            classes: {
            input: 'p-1 rounded border-gray-300 shadow-sm border',
            label: 'text-gray-600',
            },
            }"
            :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }">
                <FormKit name="nomMaison" label="nom" />
                <FormKit name="image" label="image" />
                <FormKit name="adresse" label="adresse" />
                <FormKit name="prix" label="prix" type="number" />
                <FormKit name="nbrSDB" label="Nombre de salles de bains" type="number" />
                <FormKit name="nbrChambres" label="Nombre de chambres" type="number" />
                <FormKit name="surface" label="Surface" type="number" />
                <FormKit name="favori" label="Mettre en valeur" type="checkbox" wrapper-class="flex" />
                <FormKit type="select" name="idQuartier" id="">
                    <option value="" :disabled="true">Choisir un quartier...</option>
                    <optgroup v-for="(listeQuartiers, nomCommune) in Object
                        //@ts-ignore
                        .groupBy( data, 
                        //@ts-ignore
                        v=>v.nomCommune  )" :label=nomCommune>
                    >
                        <option class="ml-5" v-for="quartierObject in listeQuartiers" :value=quartierObject.idQuartier>{{ quartierObject.nomQuartier }}   </option>
                    </optgroup>
                </FormKit>
                
            </FormKit>




            

        </div>
    </div>
</template>