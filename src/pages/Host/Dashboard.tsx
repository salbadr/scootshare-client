import { Outlet } from "react-router-dom"
export function Dashboard() {

    return (
        <section className="w-full h-full bg-amber-50">
            <section className="p-10">
                <h1 className="text-2xl md:text-4xl font-semi-bold">Host Dashboard here</h1>
            </section>
            <Outlet/>
        </section>
    )
}