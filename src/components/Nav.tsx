import { NavLink } from "react-router-dom"
import './Nav.css'

type NavLinkClassNames = {
    isActive: boolean;
}

export default function Nav() {

    function generateClassNames({ isActive }: NavLinkClassNames) {
        let className = "w-[100px] text-center hover:text-zinc-900";
        if (isActive) {
            className += ' active'
        }

        return className

    }

    return (<nav className="flex justify-between border-t-1 border-b-1 border-gray-300 px-16 py-3 sticky top-0 shadow-md shadow-stone-200">
        <div>
            <span>Logo</span>
        </div>

        <div className="flex justify-evenly ">
            <NavLink className={generateClassNames} to={'/'}>Home</NavLink >
            <NavLink className={generateClassNames} to={'/about'}>About</NavLink >
        </div>


    </nav>)
}