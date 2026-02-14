import { Menu, type NavLinkClassNames, type NavLinks } from "@/components/Menu"
import { useId } from "react"
import { Outlet } from "react-router-dom"

export function HostLayout() {
    const navLinks: NavLinks[] = [
        {
            id: useId(),
            to: '/host',
            name: 'Dashboard',
        },
        {
            id: useId(),
            to: '/host/income',
            name: 'Income'
        },
        {
            id: useId(),
            to: '/host/reviews',
            name: 'Reviews',
        },

    ]

     function renderClassNames({ isActive }: NavLinkClassNames) {
            return `hover:text-zinc-900 transition-colors w-full p-2  ${isActive ? 'text-amber-600' : ''
                }
            `;
        }
    return (
        <section className="w-full h-full bg-amber-50">
            <section className="py-10 px-8">
                <Menu navLinks={navLinks} renderClassNames={renderClassNames}/>

            </section>

            <Outlet />
        </section>
    )
}