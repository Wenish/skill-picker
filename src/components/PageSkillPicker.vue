<template>
    <div class="page">
        <div class="title">Skill Picker</div>
        <div>
            <div class="skill-list-title">Passive / Normal / Ultimate</div>
            <div class="skill-list">
                <div class="skill-list-item" v-for="skill in skills" :key="skill.id">
                    <div class="skill-list-item-image"></div>
                    <div class="skill-list-item-title">{{ skill.title }}</div>
                    <div class="skill-list-item-cooldown">{{ skill.cooldown }}&#9735;</div>
                </div>
            </div>
        </div>
        <div class="skill-slots">
            <div class="skill-slot passive"></div>
            <div class="skill-slot normal"></div>
            <div class="skill-slot normal selected"></div>
            <div class="skill-slot normal"></div>
            <div class="skill-slot ultimate"></div>
        </div>
    </div>
</template>
<script setup lang="ts">import { useSkillStore } from '../store/skill.store';

const { skills } = useSkillStore()
</script>
<style>
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
    border: 1px solid grey;
    height: 350px;
    overflow-y: scroll;

}

.skill-list-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: center;
    gap: 0.2rem;
    align-items: center;
    cursor: pointer;
    padding-block: 0.3rem;
}

.skill-list-item:hover {
    background-color: antiquewhite;
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
    background-color: grey;
}

.skill-slots {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.skill-slot {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    background-color: hsl(0, 0%, 80%);
    cursor: pointer;
}

.skill-slot:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
    background-color: hsl(0, 0%, 76%);
}

.skill-slot.selected {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
}

.skill-slot.passive {
    width: 40px;
    height: 40px;
    margin-right: 2rem;
}

.skill-slot.normal {
    border-width: 3px;
}

.skill-slot.ultimate {
    margin-left: 1rem;
    border-width: 3px;
    border-color: gold;
}

.skill-slot.ultimate:hover {
    box-shadow: 0px 0px 5px 1px rgba(206, 219, 20, 0.3);
}

.skill-slot.ultimate.selected {
    box-shadow: 0px 0px 5px 1px rgba(206, 219, 20, 0.3);
}
</style>