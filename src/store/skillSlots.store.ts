import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { SkillType } from "../data/mockSkills";
import { useSkillsStore } from "./skills.store";

export interface SkillSlot {
    type: SkillType
    skillId: string | null
}

export const useSkillSlotsStore = defineStore(
    'skillSlots',
    () => {
        const skillSlots = ref<SkillSlot[]>([
            {
                type: SkillType.PASSIVE,
                skillId: null
            },
            {
                type: SkillType.NORMAL,
                skillId: null
            },
            {
                type: SkillType.NORMAL,
                skillId: null
            },
            {
                type: SkillType.NORMAL,
                skillId: null
            },
            {
                type: SkillType.ULTIMATE,
                skillId: null
            }
        ])
        const selectedSkillSlotIndex = ref(0)

        const getSelectedSkillSlot = computed(() => {
            return selectedSkillSlotIndex.value != null ? skillSlots.value[selectedSkillSlotIndex.value] : null
        })

        const getSelectedSkillSlotSkills = computed(() => {
            const skills = useSkillsStore()
            return getSelectedSkillSlot ? skills.getSkills.filter((skill) => {
                return skill.type == getSelectedSkillSlot.value?.type && skill.id != getSelectedSkillSlot.value.skillId && !skillSlots.value.find((skillSlot) => skillSlot.skillId == skill.id)
            }) : []
        })

        const selectSkill = (skillSlotIndex: number, skillId: string) => {
            skillSlots.value.forEach((skillSlot) => {
                if(skillSlot.skillId == skillId) {
                    skillSlot.skillId = null
                }
            })
            skillSlots.value[skillSlotIndex].skillId = skillId
            /*
            if(selectedSkillSlotIndex.value < skillSlots.value.length - 1) {
                selectedSkillSlotIndex.value++
            }
            */
        }

        return {
            skillSlots,
            selectedSkillSlotIndex,
            getSelectedSkillSlot,
            getSelectedSkillSlotSkills,
            selectSkill
        }
    },
    {
        persist: {
            paths: ['skillSlots']
        }
    }
)

