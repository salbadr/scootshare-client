import { Link } from "react-router-dom"
export default function Nav() {
    return (<nav className="flex justify-between border-t-1 border-b-1 border-gray-300 px-16 py-3 sticky top-0 shadow-md shadow-stone-200">
        <div>
            <span>Logo</span>
        </div>

        <div className="flex justify-evenly ">
            <Link className="w-[100px] text-center" to={'/'}>Home</Link>
            <Link className="w-[100px] text-center" to={'/about'}>About</Link>
        </div>


    </nav>)
}