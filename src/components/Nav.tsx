import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import { useState } from "react";
import { Menu, type NavLinkClassNames } from "./Menu";



export type NavLinks = {
    id: string,
    to: string;
    name: string;
}
//Navigation
export default function Nav({ navLinks }: { navLinks: NavLinks[] }) {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    function handleMobileMenuToggle() {
        setOpenMobileMenu(!openMobileMenu)
    }

    function renderClassNames({ isActive }: NavLinkClassNames) {
        const activeClass = isActive ? 'text-amber-600 rounded-sm bg-amber-100 md:bg-white md:rounded-none ' : ''
        return `hover:text-zinc-900 transition-colors w-full p-2  ${activeClass}`;
    }


    return (<header className="flex z-50 bg-white justify-between items-center flex-wrap
    border-t border-b border-gray-300 px-6 py-3 sticky top-0 shadow-md shadow-stone-200">
        <button>
            <Link to="/">Logo</Link>
        </button>
        <Menu navLinks={navLinks} navClassNames={'hidden md:flex'} listClassNames={'md:flex gap-5'} renderClassNames={renderClassNames} />

        <button
            className="md:hidden text-lg"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
            aria-expanded={openMobileMenu}
        >
            {!openMobileMenu ? <RxHamburgerMenu /> : <MdClose />}
        </button>


        {
            openMobileMenu && <Menu
                navClassNames={'md:hidden flex w-full flex-col'}
                listClassNames={'space-y-4 mt-5'}
                navLinks={navLinks}
                renderClassNames={renderClassNames}
                onClickHandler={handleMobileMenuToggle}
                openMobileMenu={openMobileMenu} />
        }
    </header>

    )
}