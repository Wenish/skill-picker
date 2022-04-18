<template>
    <span v-for="maxCharge in maxCharges" :key="maxCharge">&#10073;</span>
</template>
<script setup lang="ts">
defineProps({
    maxCharges: Number
})
</script>