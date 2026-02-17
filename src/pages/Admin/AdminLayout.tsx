import { Card } from "@/components/Card"
import { Menu, type NavLinkClassNames, type NavLinks } from "@/components/Menu"
import { useId } from "react"
import { Outlet } from "react-router-dom"

export function AdminLayout() {
    const navLinks: NavLinks[] = [
        {
            id: useId(),
            to: '',
            name: 'Dashboard',
            end: true,
        },
        {
            id: useId(),
            to: 'income',
            name: 'Income'
        },
        {
            id: useId(),
            to: 'scooters',
            name: 'Scooters'
        },
        {
            id: useId(),
            to: 'reviews',
            name: 'Reviews',
        },

    ]

    function renderClassNames({ isActive }: NavLinkClassNames) {
        const activeClass = isActive ? 'text-amber-600' : ''
        return `hover:text-zinc-900 transition-colors w-full p-2  ${activeClass}`;
    }

    return (
        <section className="w-full h-full grid grid-cols-[0.15fr_0.85fr] gap-8">
            <Card className="bg-white justify-start hover:shadow-none" alignment="left">
                <Menu navLinks={navLinks}
                    listClassNames={'space-y-4'}
                    renderClassNames={renderClassNames} />

            </Card>

            <Outlet />


        </section>
    )
}