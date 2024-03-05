<script setup lang="ts">

import AfficheMaison from '@/components/AfficheMaison.vue';
import { supabase } from "@/supabase";
console.log("supabase :", supabase); 

const { data: lesMaisons, error } = await supabase.from('Maison').select('*').order('id');

</script>



<template>
        <div class="flex flex-wrap">
            <div v-for="maison in lesMaisons" :key="maison.id">
                <RouterLink :to="{ name:'maisons-edit', params:{id:maison.id}}">
                    <AfficheMaison v-bind="maison" />
                </RouterLink>
            </div>
        </div>
</template>