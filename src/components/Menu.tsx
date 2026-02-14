import { NavLink } from "react-router-dom";

export type NavLinkClassNames = {
    isActive: boolean;
}

export type NavLinks = {
    id: string,
    to: string;
    name: string;
}
type MenuProps = {
    navLinks: NavLinks[],
    renderClassNames?: ({ isActive }: NavLinkClassNames) => string,
    openMobileMenu?: boolean,
    onClickHandler?: () => void,
}

export function Menu({ navLinks, renderClassNames }: MenuProps) {
    return (
        <nav className="hidden md:flex">
            <ul className="md:flex gap-5">
                {navLinks.map((navLink) => (
                    <li key={navLink.id}>
                        <NavLink
                            className={renderClassNames}
                            to={navLink.to}>
                            {navLink.name}
                        </NavLink >
                    </li>)
                )
                }
            </ul>
        </nav>)
}


export function MobileMenu({ navLinks, renderClassNames, onClickHandler, openMobileMenu }: MenuProps) {
    return (
        <nav className="md:hidden flex w-full flex-col" aria-hidden={!openMobileMenu}>
            <ul className="space-y-4 mt-5" >
                {navLinks.map((navLink) => (
                    <li key={navLink.id}>
                        <NavLink
                            className={renderClassNames}
                            onClick={onClickHandler}
                            to={navLink.to}>
                            {navLink.name}
                        </NavLink >
                    </li>)
                )
                }
            </ul>
        </nav>)
}