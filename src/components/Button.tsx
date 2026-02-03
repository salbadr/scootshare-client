import { twMerge } from "tailwind-merge"
import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode,
    className: string,
}

export function Button({ children, className }: ButtonProps) {
    return (
        <button
            className={
                twMerge(`text-lg border text-zinc-800 rounded-lg 
                    py-3 px-8 text-center 
                    cursor-pointer font-bold`, className)

            }>
            {children}
        </button>
    )

}