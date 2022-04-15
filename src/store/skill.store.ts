import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { mockSkills, Skill, SkillType } from "../data/mockSkills";

export const useSkillStore = defineStore(
    'skill',
    () => {
        const skills = reactive<{
            [key: string]: Skill
        }>({})

        const loadSkills = async () => {
            mockSkills.forEach(skill => {
                skills[skill.id] = skill
            })
        }

        const getSkills = computed(() => {
            return Object.keys(skills).map((key) => skills[key])
        })

        const getSkillsPassive = computed(() => {
            return getSkills.value.filter((skill) => {
                return skill.type == SkillType.PASSIVE
            })
        })

        const getSkillsNormal = computed(() => {
            return getSkills.value.filter((skill) => {
                return skill.type == SkillType.NORMAL
            })
        })

        const getSkillsUltimate = computed(() => {
            return getSkills.value.filter((skill) => {
                return skill.type == SkillType.ULTIMATE
            })
        })


        loadSkills()

        return {
            skills,
            getSkills,
            getSkillsPassive,
            getSkillsNormal,
            getSkillsUltimate,
            loadSkills
        }
    },
)

