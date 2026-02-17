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
        <section className="w-full h-full">
            <section className="py-10">
                <Menu navLinks={navLinks} renderClassNames={renderClassNames} />

            </section>

            <Outlet />
        </section>
    )
}