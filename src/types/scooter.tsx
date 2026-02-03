export const ScooterTypes = {
    'electric': 'Electric',
    'gas': 'Gas',
    'kick': 'Kick',
} as const

export type ScooterType = typeof ScooterTypes[keyof typeof ScooterTypes]

export type Scooter = {
    id: number,
    name: string,
    price: number,
    image?: string,
    type: ScooterType,
    description: string
}
 
