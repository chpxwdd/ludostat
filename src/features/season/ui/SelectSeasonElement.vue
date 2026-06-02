<template>
    <div>
        <USelect v-model="season"
                 :items="seasons"></USelect>
    </div>
</template>

<script setup lang="ts">
const seasons = ref([
    2024,
    2025,
    2026
])

const season = ref(2026)
</script>

<style scoped></style>