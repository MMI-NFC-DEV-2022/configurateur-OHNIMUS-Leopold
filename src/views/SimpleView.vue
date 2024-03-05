<script setup lang="ts">

import { SchemaOffreMaison } from '@/types';
import AfficheMaison from '../components/AfficheMaison.vue';
// import donneesMaisons from '@/assets/data.json';

// const maMaison:SchemaOffreMaison = {
//     nomMaison: 'Maison2',
//     prix: 1000,
//     adresse: '123 rue',
//     nbrChambres: 3,
//     nbrSDB: 2,
//     surface: "30x40m²",
//     favori: true,
//     image: 'pexels-binyamin-mellish-106399.png'
// }
const res = await fetch('/data.json')
const tableauDeMaisons:SchemaOffreMaison[] = await res.json();
// const tableauDeMaisons:SchemaOffreMaison[] = donneesMaisons;


</script>

<template>
        <div class="flex">
                <!-- <AfficheMaison v-bind="maMaison" />
                <AfficheMaison v-bind:nom-maison="maMaison.nomMaison" :prix="maMaison.prix" :favori="maMaison.favori" :image="maMaison.image" />
                <AfficheMaison nom-maison="Maison" :favori="true" image="pexels-binyamin-mellish-106399.png" /> -->
                <AfficheMaison v-for="maison in tableauDeMaisons" v-bind="maison" :key="maison.id" />
        </div>
</template>