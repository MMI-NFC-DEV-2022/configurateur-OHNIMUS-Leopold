<script setup lang="ts">
import { defineProps } from 'vue';
import { ref } from 'vue';
import { supabase } from '@/supabase';
// import { ref } from 'vue';
// import { type Tables } from '@/supabase-types';
import { type Database } from '@/supabase-types';

const props = defineProps<Database['public']['Tables']['Quartier']['Row']>();
// const quartier = ref<Tables<'Quartier'>>;
// props.idCommune


const commune = ref<Database['public']['Tables']['Commune']['Row'] | null>(null);

// Fonction pour récupérer les données de la commune correspondant à l'idCommune de la table Quartier
async function fetchCommune() {
    const { data, error } = await supabase
        .from<Database['public']['Tables']['Commune']['Row']>('Commune')
        .select('*')
        .eq('id', props.idCommune)
        .single();

    if (error) {
        console.error('Erreur lors de la récupération de la commune:', error);
    } else {
        commune.value = data;
    }
}

fetchCommune();

</script>

<template>
    <div>
        <div class="py-2">{{ nomQuartier }}</div>
        <div class="py-2">idQuartier {{ id }}</div>
        <div class="py-2">idCommune {{ idCommune }}</div>
        <div class="py-2">nomCommune {{ commune?.nomCommune }}</div>
    </div>
</template>
