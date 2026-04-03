export const ScooterTypes = {
    'electric': 'Electric',
    'gas': 'Gas',
    'kick': 'Kick',
} as const

export type ScooterType = typeof ScooterTypes[keyof typeof ScooterTypes]

type BaseScooter = {
    id: number,
    name: string,
    price: number,
    image?: string,
    description: string,
    location: string,
    weight: number,
}

type KickScooter = BaseScooter & {
    type: 'Kick',
    range: null,
    energy_level: null,
    speed: null
}

type PoweredScooter = BaseScooter & {
    type: 'Electric' | 'Gas',
    range: number,
    energy_level: number,
    speed: number
}

export type Scooter = KickScooter | PoweredScooter

