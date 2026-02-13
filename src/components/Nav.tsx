import { NavLink, Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import { useId, useState } from "react";

type NavLinkClassNames = {
    isActive: boolean;
}

type NavLinks = {
    id: string,
    to: string;
    name: string;
}
//Navigation
export default function Nav() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    function handleMobileMenuToggle() {
        setOpenMobileMenu(!openMobileMenu)
    }

    function generateClassNames({ isActive }: NavLinkClassNames) {
        return `hover:text-zinc-900 transition-colors w-full p-2  ${isActive ? 'text-amber-600 rounded-sm bg-amber-100 md:bg-white md:rounded-none md:bg-white ' : ''
            }
        `;
    }

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
            to: '/host',
            name: 'Host',
        },
        {
            id: useId(),
            to: '/about',
            name: 'About',
        },


    ]

    const renderMenu = () => {
        return (
            <nav className="hidden md:flex">
                <ul className="md:flex gap-5">
                    {generateLinks()}
                </ul>
            </nav>)
    }

    const renderMobileMenu = () => {
        return (
            <nav className="md:hidden flex w-full flex-col" aria-hidden={!openMobileMenu}>
                <ul className="space-y-4 mt-5" >
                    {
                        generateLinks()
                    }
                </ul>
            </nav>
        )
    }

    const generateLinks = () => {
        return navLinks.map((navLink) => (
            <li key={navLink.id}>
                <NavLink
                    className={generateClassNames}
                    onClick={openMobileMenu ? handleMobileMenuToggle : undefined}
                    to={navLink.to}>
                    {navLink.name}
                </NavLink >
            </li>))
    }



    return (<header className="flex z-50 bg-white justify-between items-center flex-wrap
    border-t border-b border-gray-300 px-6 py-3 sticky top-0 shadow-md shadow-stone-200">
        <button>
            <Link to="/">Logo</Link>
        </button>
        {renderMenu()}

        <button
            className="md:hidden text-lg"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
            aria-expanded={openMobileMenu}
        >
            {!openMobileMenu ? <RxHamburgerMenu /> : <MdClose />}
        </button>


        {
            openMobileMenu && renderMobileMenu()
        }
    </header>

    )
}