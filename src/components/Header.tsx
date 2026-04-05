import { Link } from "react-router-dom"

import { useId } from "react";
import HeaderNav, { type NavLinks } from "@/components/HeaderNav";


//Navigation
export default function Header() {

    const navLinks: NavLinks[] = [
        {
            id: useId(),
            to: '/',
            name: 'Home',
        },
        {
            id: useId(),
            to: '/scooters',
            name: 'Scooters'
        },

        {
            id: useId(),
            to: '/about',
            name: 'About',
        },
        {
            id: useId(),
            to: '/admin',
            name: 'Admin',
        },


    ]
    return (
        <header className="flex z-50 bg-white justify-between items-center flex-wrap
    border-t border-b border-gray-300 px-6 py-3 sticky top-0 shadow-md shadow-stone-200">
            <button>
                <Link to="/">Logo</Link>
            </button>
            <HeaderNav navLinks={navLinks} />
        </header>

    )
}