<template>
    <span>{{ cooldown }}s</span>
</template>
<script setup lang="ts">
defineProps({
    cooldown: Number
})
</script>