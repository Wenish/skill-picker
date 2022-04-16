export enum SkillType {
    PASSIVE = 'Passive',
    NORMAL = 'Normal',
    ULTIMATE = 'Ultimate'
}

export interface Skill {
    id: string
    title: string
    description: string
    cooldown: number
    type: SkillType
    icon: string
}

export const mockSkills: Skill[] = [
    {
        id: '1',
        title: 'Heal Party',
        description: 'Heals entire party for 20 over 5 seconds.',
        cooldown: 40,
        type: SkillType.NORMAL,
        icon: 'Heal_Party.jpg'
    },

    {
        id: '2',
        title: 'Shield Guard',
        description: 'Shields a player for 25.',
        cooldown: 30,
        type: SkillType.NORMAL,
        icon: 'Reversal_of_Fortune.jpg'
    },

    {
        id: '3',
        title: 'Shiedling Hands',
        description: 'Reduces incoming damage by 3 for 20 seconds.',
        cooldown: 40,
        type: SkillType.NORMAL,
        icon: 'Shielding_Hands.jpg'
    },

    {
        id: '4',
        title: 'Word of Healing',
        description: 'Heals for 30. Heals for 60 more if target ally is below 50% health over 5 seconds.',
        cooldown: 60,
        type: SkillType.ULTIMATE,
        icon: 'Word_of_Healing.jpg'
    },

    {
        id: '5',
        title: 'Barrier',
        description: 'Places a solid wall over 40 seconds.',
        cooldown: 60,
        type: SkillType.NORMAL,
        icon: 'Armor_of_Earth.jpg'
    },

    {
        id: '6',
        title: 'Resurrection',
        description: 'Resurrection an ally player with full health.',
        cooldown: 120,
        type: SkillType.ULTIMATE,
        icon: 'Light_of_Deliverance.jpg'
    },

    {
        id: '7',
        title: 'Draining Aura',
        description: 'Drain every second 1 life from enemies nearby.',
        cooldown: 0,
        type: SkillType.PASSIVE,
        icon: 'Arcane_Mimicry.jpg'
    },

    {
        id: '8',
        title: 'Way of the Wanderer',
        description: 'Gain every second you move 1 shield up to 50.',
        cooldown: 0,
        type: SkillType.PASSIVE,
        icon: 'Aegis.jpg'
    },

    {
        id: '9',
        title: 'Bloodsong',
        description: 'Summons a ghost which attacks enemies nearby.',
        cooldown: 60,
        type: SkillType.NORMAL,
        icon: 'Bloodsong.jpg'
    },

    {
        id: '10',
        title: 'Dash',
        description: 'You move 50% faster for 3 seconds.',
        cooldown: 30,
        type: SkillType.NORMAL,
        icon: 'Dash.jpg'
    },

    {
        id: '11',
        title: 'Critical Eye',
        description: 'You deal 5 more damage for 5 seconds.',
        cooldown: 40,
        type: SkillType.NORMAL,
        icon: 'Critical_Eye.jpg'
    },

    {
        id: '12',
        title: 'Test',
        description: 'Test',
        cooldown: 0,
        type: SkillType.NORMAL,
        icon: 'Blackout.jpg'
    },

    {
        id: '13',
        title: 'Test Suuuuuuuuuuuuuuuuuuuuuuper Long Text.',
        description: 'Test',
        cooldown: 0,
        type: SkillType.NORMAL,
        icon: 'Blackout.jpg'
    }
]
