import { defineStore } from "pinia";
import { ref } from "vue";

export const useSkillsStore = defineStore(
    'skills',
    () => {
       const skills = ref([])

       const loadSkills = async () => {
           skills.value = []
       }

       loadSkills()

       return {
           skills,
           loadSkills
       }
    }
)

export enum SkillType {
    PASSIVE,
    NORMAL,
    ULTIMATE
}

export interface Skill {
    id: string
    title: string
    description: string
    cooldown: number
    type: SkillType
}

