import type { ReactNode } from "react";
import { clsx } from 'clsx';

type CardProps = {
    children: ReactNode
    alignment?: 'center' | 'left',
    className?: string
}

export function Card({ children, alignment = 'center', className }: CardProps) {

    return (
        <div
            className={
                clsx(`card border 
                        border-solid rounded-xl border-zinc-200
                        flex justify-evenly items-${alignment} 
                        flex-col hover:shadow-lg transition-shadow duration-300 p-6 gap-6`, className)

            }>
            {children}
        </div>

    )
}