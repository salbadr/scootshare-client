import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
    children: ReactNode
    alignment?: 'center' | 'left',
    className?: string
}

export function Card({ children, alignment = 'center', className }: CardProps) {

    return (
        <article
            className={
                twMerge(`card border 
                        border-solid rounded-xl border-zinc-200
                        flex justify-evenly items-${alignment} 
                        flex-col hover:shadow-lg transition-shadow duration-300 p-6 gap-6`, className)

            }>
            {children}
        </article>

    )
}