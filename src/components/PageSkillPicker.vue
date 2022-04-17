<template>
    <div class="page">
        <div class="title">Skill Picker</div>
        <div>
            <div class="skill-list-title">{{ skillSlotsStore.getSelectedSkillSlot?.type }}</div>
            <div class="skill-list">
                <Popper hover v-for="skill in skillSlotsStore.getSelectedSkillSlotSkills" :key="skill.id" :content="`${skill.title} - ${skill.description}`" arrow>
                <div class="skill-list-item"
                    @click="skillSlotsStore.selectSkill(skillSlotsStore.selectedSkillSlotIndex, skill.id)">
                    <div class="skill-list-item-image">
                        <img :src="getImageUrl(skill.icon)" />
                    </div>
                    <div class="skill-list-item-title">{{ skill.title }}</div>
                    <div class="skill-list-item-cooldown"><span v-if="skill.cooldown">{{ skill.cooldown }}&#9735;</span></div>
                </div>
                </Popper>
            </div>
        </div>
        <div class="skill-slots">
            <Popper v-for="(skillSlot, index) in skillSlotsStore.skillSlots" :key="index" hover :disabled="!skillStore.getSkillById(skillSlot.skillId || '')?.title" :content="`${skillStore.getSkillById(skillSlot.skillId || '')?.title || ''} - ${skillStore.getSkillById(skillSlot.skillId || '')?.description || ''}`" arrow>
                <div :class="['skill-slot', skillSlot.type.toLowerCase(), { selected: skillSlotsStore.selectedSkillSlotIndex == index }]"
                    @click="skillSlotsStore.selectedSkillSlotIndex = index">
                    <img :src="getImageUrl(skillStore.getSkillById(skillSlot.skillId).icon)" v-if="skillSlot.skillId"/>
                </div>
            </Popper>
        </div>
        <button @click="skillSlotsStore.resetSkillSelection()">Reset skill selection</button>
    </div>
</template>
<script setup lang="ts">
import Popper from "vue3-popper";
import { useSkillsStore } from '../store/skills.store';
import { useSkillSlotsStore } from '../store/skillSlots.store';

const skillStore = useSkillsStore()
const skillSlotsStore = useSkillSlotsStore()

const getImageUrl = (name: string) => {
  return new URL(`../assets/skillIcons/${name}`, import.meta.url).href
}
</script>
<style scoped>
.page-wrapper {
    display: grid;
    justify-items: center;
    height: 100%;
}

.page {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    width: min(100% - 2rem, 350px);
    margin-inline: auto;
    gap: 2rem;
    height: 100%;
    justify-content: center;
}

.title {
    font-size: 2.4rem;
    text-align: center;
}

.skill-list-title {
    text-align: left;
}

.skill-list {
    display: flex;
    flex-direction: column;
    height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid var(--border-color);
    background-color: var(--surface-2);
    border-radius: var(--border-radius);
}

.skill-list-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: center;
    gap: 0.2rem;
    align-items: center;
    cursor: pointer;
    padding: 0.4rem;
}

.skill-list-item:hover {
    background-color: var(--surface-4);
}

.skill-list-item-title {
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.skill-list-item-image {
    width: 3rem;
    height: 3rem;
    margin: 0.3rem;
    background-color: var(--surface-3);
}

.skill-list-item-image > img {
    width: 100%;
    height: 100%;
}

.skill-slots {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2rem;
    background-color: var(--surface-2);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
}

.skill-slot {
    width: 50px;
    height: 50px;
    background-color: var(--surface-3);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
}

.skill-slot:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
    background-color: var(--surface-4);
}

.skill-slot > img {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
}

.skill-slot.selected {
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.9);
}

.skill-slot.passive {
    width: 40px;
    height: 40px;
    margin-right: 2rem;
}


.skill-slot.ultimate {
    margin-left: 1rem;
}
</style>