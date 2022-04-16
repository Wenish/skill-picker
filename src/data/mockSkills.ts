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
        description: 'Revive an ally player with full health.',
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
        description: 'Gain every second you move 1 shield up to 20.',
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
        title: 'Swiftness',
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
        title: 'Animate Flesh Golem',
        description: 'Exploit a fresh corpse to create a flesh golem.',
        cooldown: 40,
        type: SkillType.ULTIMATE,
        icon: 'Animate_Flesh_Golem.jpg'
    },

    {
        id: '13',
        title: 'Blackout',
        description: 'Disables skills from nearby enemies for 6 seconds.',
        cooldown: 40,
        type: SkillType.NORMAL,
        icon: 'Blackout.jpg'
    },

    {
        id: '14',
        title: 'Signet of Return',
        description: '5 seconds after taking damage gain 50 health back.',
        cooldown: 30,
        type: SkillType.PASSIVE,
        icon: 'Signet_of_Return.jpg'
    },

    {
        id: '15',
        title: 'Grenths Grasp',
        description: 'For 10 seconds lifesteal 70% of your damage dealt.',
        cooldown: 60,
        type: SkillType.ULTIMATE,
        icon: 'Grenths_Grasp.jpg'
    },

    {
        id: '16',
        title: 'Sundering Weapon',
        description: 'Your attacks deal 5 more damage.',
        cooldown: 0,
        type: SkillType.PASSIVE,
        icon: 'Sundering_Weapon.jpg'
    },

    {
        id: '17',
        title: 'Smoke Poweder Defense',
        description: 'Throw a smoke poweder which restricts enemy vision.',
        cooldown: 40,
        type: SkillType.NORMAL,
        icon: 'Smoke_Powder_Defense.jpg'
    },

    {
        id: '18',
        title: 'Assassin Strike',
        description: 'Jump to an enemy and strike him for 10 damage.',
        cooldown: 40,
        type: SkillType.NORMAL,
        icon: 'Assassin_Remedy.jpg'
    },

    {
        id: '19',
        title: 'Essence Strike',
        description: 'Cast a lightning which does 30 damage.',
        cooldown: 35,
        type: SkillType.NORMAL,
        icon: 'Essence_Strike.jpg'
    },

    {
        id: '20',
        title: 'Caltrops',
        description: 'Place a trap on the floor, which deals 5 damage per second when a enemy walks over it.',
        cooldown: 35,
        type: SkillType.NORMAL,
        icon: 'Caltrops.jpg'
    },

    {
        id: '21',
        title: 'Preservation',
        description: 'Summon a ghost which heals nearby allys for 20 health over 5 seconds every 10 seconds.',
        cooldown: 70,
        type: SkillType.ULTIMATE,
        icon: 'Preservation.jpg'
    },

    {
        id: '22',
        title: 'Shadow Form',
        description: 'For 15 seconds move 10% faster and only receive 50% of incoming damage.',
        cooldown: 70,
        type: SkillType.ULTIMATE,
        icon: 'Shadow_Form.jpg'
    },

    {
        id: '23',
        title: 'Vital Weapon',
        description: 'When you strik an enemy it also deals 3 damage to nearby enemies.',
        cooldown: 0,
        type: SkillType.PASSIVE,
        icon: 'Vital_Weapon.jpg'
    },

    {
        id: '24',
        title: 'Ghostmirror Light',
        description: 'Creates a fake mirror image of yourself.',
        cooldown: 25,
        type: SkillType.NORMAL,
        icon: 'Ghostmirror_Light.jpg'
    },

    {
        id: '25',
        title: 'Apply Poison',
        description: 'Your ranged attacks poison the enemy for 5 seconds which deals 2 damage per second.',
        cooldown: 0,
        type: SkillType.PASSIVE,
        icon: 'Apply_Poison.jpg'
    },

    {
        id: '26',
        title: 'Barrage',
        description: 'Shot a quick volley of arrows each arrow deals 20 damage.',
        cooldown: 50,
        type: SkillType.ULTIMATE,
        icon: 'Barrage.jpg'
    },

    {
        id: '27',
        title: 'Dodge',
        description: 'Quickly dash a short distance into a direction.',
        cooldown: 30,
        type: SkillType.NORMAL,
        icon: 'Dodge.jpg'
    },

    {
        id: '28',
        title: 'Pin Down',
        description: 'Shot an arrow which slows the enemy for 30% over 5 seconds.',
        cooldown: 35,
        type: SkillType.NORMAL,
        icon: 'Pin_Down.jpg'
    }
]
