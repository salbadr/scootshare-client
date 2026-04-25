import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import { useState } from "react";
import { Menu, type NavLinkClassNames } from "./Menu";
import { Button } from "./Button";



export type NavLinks = {
    id: string,
    to: string;
    name: string;
}
//Navigation
export default function HeaderNav({ navLinks }: { navLinks: NavLinks[] }) {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    function handleMobileMenuToggle() {
        setOpenMobileMenu(!openMobileMenu)
    }

    function renderClassNames({ isActive }: NavLinkClassNames) {
        const activeClass = isActive ? 'text-amber-600 rounded-sm bg-amber-100 md:bg-white md:rounded-none ' : ''
        return `hover:text-zinc-900 transition-colors w-full p-2  ${activeClass}`;
    }


    return (
        <>

            <Menu navLinks={navLinks} navClassNames={'hidden md:flex'} listClassNames={'md:flex gap-5'} renderClassNames={renderClassNames} />

            <Button
                className="md:hidden text-lg"
                onClick={handleMobileMenuToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={openMobileMenu}
            >
                {!openMobileMenu ? <RxHamburgerMenu /> : <MdClose />}
            </Button>


            {
                openMobileMenu && <Menu
                    navClassNames={'md:hidden flex w-full flex-col'}
                    listClassNames={'space-y-4 mt-5'}
                    navLinks={navLinks}
                    renderClassNames={renderClassNames}
                    onClickHandler={handleMobileMenuToggle}
                    openMobileMenu={openMobileMenu} />
            }
        </>

    )
}