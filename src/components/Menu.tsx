import { NavLink } from "react-router-dom";

export type NavLinkClassNames = {
    isActive: boolean;
}

export type NavLinks = {
    id: string,
    to: string;
    name: string;
    end?: boolean;
}
type MenuProps = {
    navLinks: NavLinks[],
    navClassNames?: string,
    listClassNames?: string,
    renderClassNames?: ({ isActive }: NavLinkClassNames) => string,
    openMobileMenu?: boolean,
    onClickHandler?: () => void

}

export function Menu({
    navLinks,
    navClassNames,
    listClassNames,
    renderClassNames,
    onClickHandler,
    openMobileMenu }: MenuProps) {
    return (
        <nav className={navClassNames} aria-hidden={!openMobileMenu}>
            <ul className={listClassNames}>
                {navLinks.map((navLink) => (
                    <li key={navLink.id}>
                        <NavLink
                            className={renderClassNames}
                            to={navLink.to}
                            onClick={onClickHandler}

                            end={navLink.end}
                        >
                            {navLink.name}
                        </NavLink >
                    </li>)
                )
                }
            </ul>
        </nav>)
}
