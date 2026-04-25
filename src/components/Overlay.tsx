import type { ReactNode } from "react";
import { Card } from "./Card";

type OverlayProps = {
    children:ReactNode
}
export function Overlay({children}: OverlayProps) {
    return (
        <>
            <div className="bg-zinc-500 fixed w-screen h-screen opacity-55 left-0 top-0 z-50" />
            <Card className="bg-white fixed z-60 md:w-lg inset-x-10 md:inset-x-[35%]">
                {children}
            </Card>
        </>


    )
}