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
}

export const mockSkills: Skill[] = [
    {
        id: '1',
        title: 'Heal Party',
        description: 'Heals entire party for 20 over 5 seconds',
        cooldown: 40,
        type: SkillType.NORMAL
    },

    {
        id: '2',
        title: 'Shield Guard',
        description: 'Shields a player for 25.',
        cooldown: 30,
        type: SkillType.NORMAL
    },

    {
        id: '3',
        title: 'Shiedling Hands',
        description: 'Reduces incoming damage by 3 for 20 seconds.',
        cooldown: 40,
        type: SkillType.NORMAL
    },

    {
        id: '4',
        title: 'Word of Healing',
        description: 'Heals for 30. Heals for 60 more if target ally is below 50% health over 5 seconds.',
        cooldown: 60,
        type: SkillType.ULTIMATE
    },

    {
        id: '5',
        title: 'Barrier',
        description: 'Places a solid wall over 40 seconds',
        cooldown: 60,
        type: SkillType.NORMAL
    },

    {
        id: '6',
        title: 'Resurrection',
        description: 'Resurrection an ally player with full health',
        cooldown: 120,
        type: SkillType.ULTIMATE
    },

    {
        id: '7',
        title: 'Draining Aura',
        description: 'Drain every second 1 life from enemies nearby.',
        cooldown: 0,
        type: SkillType.PASSIVE
    },

    {
        id: '8',
        title: 'Way of the Wanderer',
        description: 'Gain every second you move 1 shield up to 50',
        cooldown: 0,
        type: SkillType.PASSIVE
    },

    {
        id: '9',
        title: 'Test Suuuuuuuuuuuuuuuuuuuuuuper Long Text',
        description: 'Test',
        cooldown: 0,
        type: SkillType.NORMAL
    },

    {
        id: '10',
        title: 'Test',
        description: 'Test',
        cooldown: 0,
        type: SkillType.NORMAL
    },

    {
        id: '11',
        title: 'Test',
        description: 'Test',
        cooldown: 0,
        type: SkillType.NORMAL
    },

    {
        id: '12',
        title: 'Test',
        description: 'Test',
        cooldown: 0,
        type: SkillType.NORMAL
    },

    {
        id: '13',
        title: 'Test',
        description: 'Test',
        cooldown: 0,
        type: SkillType.NORMAL
    }
]
