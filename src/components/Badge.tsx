import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type BadgeProps = {
    children: ReactNode
    className?: string
}

export function Badge({ children, className }: BadgeProps) {

    return (
        <div className=
            {twMerge("border rounded-md p-1 w-24 text-center", className)}
        >

            {children}
        </div>
    )
}