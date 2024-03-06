<script setup lang="ts">
import {ref} from "vue"
import { Basket, colors, materiaux } from "@/types";
import { supabase } from "@/supabase";
import { useRouter } from "vue-router/auto";

const router = useRouter();

import SvgProfil from '@/components/SvgProfil.vue';
import SvgDessus from '@/components/SvgDessus.vue';

const props = defineProps<{
  data?: Basket;
  id?: string;
}>();

const chaussure = ref<Basket>(props.data ?? {});

// Fonction pour mettre à jour la basket dans la table Basket de Supabase
async function updateBasket() {
  const { data, error } = await supabase
    .from<Basket>("Basket")
    .update(chaussure.value)
    .eq("id", chaussure.value.id);

  if (error) {
    console.error("Erreur lors de la mise à jour de la basket dans Supabase:", error.message);
    return;
  }

  console.log("Basket mis à jour avec succès");

  router.push("/basket");
}
</script>

<template>
<div class="p-2">

    <ul class="flex gap-1">
        <li>
            <a href="#profil">Profil</a>
        </li>
            <li>
            <a href="#dessus">Dessus</a>
        </li>
    </ul>

<div class="carousel w-64">
    <SvgProfil class="carousel-item w-64" v-bind="chaussure" id="profil"></SvgProfil>
    <SvgDessus class="carousel-item w-64" v-bind="chaussure" id="dessus"></SvgDessus>
</div>


<FormKit @submit="updateBasket" type="form" v-model="chaussure" >
    <FormKit name="semelle" label="semelle" value="#ffffff" type="radio" :options="colors"></FormKit>
    <FormKit name="empeigne" label="empeigne" value="#ffffff" type="radio" :options="colors"></FormKit>
    <FormKit name="pointe" label="pointe" value="#ffffff" type="radio" :options="colors">
        <template #label="context">
            <div 
                class="h-6 w-6 rounded-full"
                :style="{backgroundColor: context.option.value}"
            />
            <span>{{context.option.label}}</span>
        </template>
    </FormKit>
    <FormKit name="oeillet" label="oeillet" value="#ffffff" type="radio" :options="colors" :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null }
    }"
    input-class="peer sr-only"
    option-class="peer flex gap-1"
    >
        <template #label="context">
            <div 
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{backgroundColor: context.option.value}"
            />
            <span class="sr-only">{{context.option.label}}</span>
        </template>
    </FormKit>
    <FormKit name="bande" label="bande" value="#ffffff" type="radio" :options="colors"></FormKit>
    <FormKit name="languette" label="languette" value="#ffffff" type="radio" :options="colors"></FormKit>
    <FormKit name="lacet" label="lacet" value="#ffffff" type="radio" :options="colors"></FormKit>
    <FormKit name="trimestre" label="trimestre" value="#ffffff" type="radio" :options="colors"></FormKit>



    <!-- <FormKit name="materiaux" label="materiaux" value="#ffffff" type="radio" :options="materiaux" :sections-schema="{
        inner: { $el: null},
        decorator: { $el: null },
    }" 
    input-class="peer sr-only"
    options-class="flex gap-4"
    >
        <template #label="context">
        <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{ backgroundImage: `url(${context.option.value})` }" />

        <span class="sr-only">{{ context.option.label }}</span>

        </template>
    </FormKit> -->

</FormKit>
</div>
</template>