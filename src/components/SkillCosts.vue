<template>
    <span v-for="cost in costs" :key="cost">&#9670;</span>
</template>
<script setup lang="ts">
defineProps({
    costs: Number
})
</script>