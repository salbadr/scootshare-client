import Nav from "@/components/Nav";
import Footer from '@/components/Footer'
import { Outlet } from "react-router-dom";
import { useId } from "react";
import type { NavLinks } from "./Menu";



export function Layout() {

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
    return (
        <>
            <Nav navLinks={navLinks} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>



    )

}