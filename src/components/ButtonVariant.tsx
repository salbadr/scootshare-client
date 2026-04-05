import { Button } from "@/components/Button";
import type React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
    variant?: 'callout' | 'default',
    className?: string,

    value: string,

}
export function ButtonVariant({ variant = 'default', className, value, ...rest }: ButtonProps & React.ComponentPropsWithRef<'button'>) {

    const variants = {
        'callout': <Button
            className={
                twMerge(`bg-amber-300 w-full md:w-60 border-amber-300`, className)
            }

            {...rest}>{value}</Button>,
        'default': <Button
            className={
                twMerge(`bg-white w-full md:w-60 border-2 border-amber-300`, className)
            }
            {...rest}>{value}</Button>
    }

    return variants[variant]

}