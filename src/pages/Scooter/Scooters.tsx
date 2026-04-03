
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { scooterImage } from "@/helper";
import { useScooters } from "@/hooks/useScooters";

export default function Scooters() {
    const { isLoading, data: scooters } = useScooters();

    if (isLoading) return <div>Loading...</div>

    if (!scooters) {
        return <div>No Scooters....</div>
    }


    return (
        <section className="w-full h-full bg-amber-50">
            <section className="p-10">
                <h1 className="text-2xl md:text-4xl font-semi-bold">Available Scooters Near You</h1>

            </section>
            <section className="grid md:grid-cols-3 gap-4 p-10">
                {scooters.map(scooter => (
                    <Card key={scooter.id} className="hover:cursor-pointer p-0 bg-white" alignment="left">
                        <Link to={`/scooters/${scooter.id}`}>
                            <img className="aspect-square object-cover border-none rounded-t-xl" alt={scooter.name} title={scooter.name} src={scooterImage(scooter.image)} />
                            <div className="p-3 space-y-4">
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-bold">{scooter.name}</h2>
                                    <p>${scooter.price}/hr</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoLocationOutline className="text-xl" aria-label="Location"/>
                                    <span>{scooter.location}</span>
                                </div>
                                <Badge type={scooter.type}>{scooter.type}</Badge>
                            </div>
                        </Link>

                    </Card>
                ))}

            </section>


        </section>
    )
}