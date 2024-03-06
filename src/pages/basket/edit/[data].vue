<script setup lang="ts">
import FormBDD from "@/components/FormBDD.vue";
import {useRoute} from "vue-router/auto"
const route=useRoute("/basket/edit/[data]")
</script>
<template>
  <FormBDD :data="JSON.parse(route.params.data)" />
</template>