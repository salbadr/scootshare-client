import Footer from '@/components/Footer'
import { Outlet } from "react-router-dom";
import Header from '@/components/Header';



export function Layout() {

   
    return (
        <>
            <Header />
            <main className="bg-amber-50">
                <Outlet />
            </main>
            <Footer />
        </>



    )

}