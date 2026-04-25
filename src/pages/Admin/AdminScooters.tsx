import { ButtonVariant } from "@/components/ButtonVariant";
import { Card } from "@/components/Card";
import { scooterImage } from "@/helper";
import { useScooters } from "@/hooks/useScooters";
import { useState } from "react";
import { AdminScootersAdd } from "./AdminScootersAdd";

export function AdminScooters() {
    const { isLoading, data: scooters } = useScooters();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isLoading) {
        return (
            <section>
                Loading
            </section>
        )
    }


    if (!scooters) {
        return (
            <section>
                There are no scooters
            </section>
        )
    }

    const handleAddScooter = () => {
        setIsModalOpen(true)
        
    }

    return (
        <>
            <section>
                <section className="mb-10 flex md:justify-between flex-col gap-5 md:flex-row ">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-semi-bold">Scooters Inventory</h1>
                        <p>
                            Manage your scooter fleet
                        </p>
                    </div>
                    <ButtonVariant variant="callout" value='Add Scooter' onClick={handleAddScooter} />


                </section>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <Card className="bg-white gap-2 hover:shadow-none" alignment="left">
                        <h2>Total Scooters</h2>
                        <p className="font-bold text-xl">6</p>
                    </Card>
                    <Card className="bg-white gap-2 hover:shadow-none" alignment="left">
                        <h2>Available</h2>
                        <p className="font-bold text-xl">3</p>

                    </Card>
                    <Card className="bg-white gap-2 hover:shadow-none" alignment="left">
                        <h2>Currently Rented</h2>
                        <p className="font-bold text-xl">2</p>

                    </Card>
                </section>
                <Card className="bg-white hover:shadow-none mb-10 " alignment="left">
                    <label htmlFor="search" className="sr-only">Search Scooters</label>
                    <input className="border p-2 focus:outline-2 focus:outline-zinc-300 rounded-2xl h-10 border-zinc-100 bg-zinc-100" id="search" name="search" placeholder="Search Scooters" type="search" />
                </Card>
                <Card className="bg-white hover:shadow-none scroll-smooth overflow-x-auto p-10" alignment="left">

                    <h2 className="font-bold">Scooter List ({scooters.length})</h2>
                    <table className="w-5xl md:w-full mt-5 [&_td]:py-5 [&_th]:pb-3">
                        <thead className="font-bold">
                            <tr className="border-b border-zinc-300 text-left">
                                <th>
                                    Scooter
                                </th>
                                <th>
                                    Price/Hour
                                </th>
                                <th>
                                    Type
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {scooters.map((scooter) => (
                                <tr className="border-b border-zinc-300 hover:bg-amber-50" key={scooter.id}>
                                    <td className="flex gap-2 items-center p-2">
                                        <img className="aspect-square object-cover border-none rounded-xl w-10" alt={scooter.name} title={scooter.name} src={scooterImage(scooter.image)} />
                                        {scooter.name}
                                    </td>
                                    <td>
                                        ${scooter.price}/hr
                                    </td>
                                    <td>
                                        {scooter.type}
                                    </td>
                                    <td>
                                        Edit
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </Card>
            </section>

                            

          {isModalOpen && <AdminScootersAdd close={()=>setIsModalOpen(false)}/>}
        </>
    )
}