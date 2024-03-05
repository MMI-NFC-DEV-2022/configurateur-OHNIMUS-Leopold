<script setup lang="ts">
import type { ChaussureImage } from '@/types-images';

withDefaults(defineProps<ChaussureImage>(), {
    orientation: 'cote',
    bandes: 'bleu',
    cuir: 'bleu',
    mousse: 'bleu'
})

</script>

<template>
    <div class="relative">
        <img :src="`/images/${orientation}/base.png`" class="h-auto w-full" alt="">

    </div>
</template>