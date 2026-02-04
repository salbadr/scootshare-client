import { ScooterTypes, type ScooterType } from "@/types/scooter"
import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type BadgeProps = {
    children: ReactNode,
    type: ScooterType,
    className?: string
}

export function Badge({ type, children, className }: BadgeProps) {

    const getBadgeColor = (type: ScooterType) => {

        switch (type) {
            case ScooterTypes.electric:
                return 'bg-lime-600 text-white'
            case ScooterTypes.gas:
                return 'bg-amber-600 text-white'
            case ScooterTypes.kick:
                return 'bg-zinc-600 text-white'

        }

    }
    return (
        <div className=
            {twMerge("border rounded-md p-1 w-24 text-center", getBadgeColor(type), className)}
        >

            {children}
        </div>
    )
}