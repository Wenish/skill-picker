<template>
    <div class="container">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <div class="maxCharges" v-if="maxCharges">Max Charges: <SkillMaxCharges :max-charges="maxCharges" /></div>
        <div class="costs" v-if="costs">Costs: <SkillCosts :costs="costs" /></div>
        <div class="cooldown" v-if="cooldown">Cooldown: <SkillCooldown :cooldown="cooldown" /></div>
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const SkillMaxCharges = defineAsyncComponent(() => import('./SkillMaxCharges.vue'))
const SkillCosts = defineAsyncComponent(() => import('./SkillCosts.vue'))
const SkillCooldown = defineAsyncComponent(() => import('./SkillCooldown.vue'))

defineProps({
    title: String,
    description: String,
    maxCharges: Number,
    costs: Number,
    cooldown: Number
})
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.title {
    font-weight: bold;
}

.description {
    padding-block: 0.5rem;
}
</style>