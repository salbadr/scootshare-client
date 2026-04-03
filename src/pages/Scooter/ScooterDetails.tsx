
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom"

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { scooterImage } from "@/helper";
import { useScooterDetails } from "@/hooks/useScooterDetails";

export function ScooterDetails() {
    const { id } = useParams();

    const { isLoading, data: scooter } = useScooterDetails(id);

    if (isLoading) return <div>Loading...</div>

    if (!scooter) {
        return <div>No Scooter Details....</div>
    }

    return (

        <section className="w-full h-full bg-amber-50">
            <h1 className="p-10 text-2xl md:text-4xl font-semi-bold">Scooter Details for {scooter.name}</h1>
            <section className="flex justify-center pb-20">
                <Card key={scooter.id} className=" flex justify-center pb-20 bg-white w-4xl" alignment="left">
                    <img className="aspect-square object-cover border-none rounded-xl" alt={scooter.name} title={scooter.name} src={scooterImage(scooter.image)} />
                    <div className="p-3 space-y-4">
                        <h2 className="text-lg font-bold">Price: ${scooter.price}/hr</h2>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <IoLocationOutline className="text-xl" aria-label="Location" />
                                <span>{scooter.location}</span>
                            </div>
                            <div className="grid grid-cols-[80px_80px] pr-20">
                                <label className="font-bold">Weight:</label>
                                <span>{scooter.weight} kg</span>
                                {scooter.type !== 'Kick' &&
                                    <>
                                        <label className="font-bold">Range:</label>
                                        <span>{scooter.range} km</span>
                                        <label className="font-bold">Speed:</label>
                                        <span>{scooter.speed} km/hr</span>
                                        <label className="font-bold">Energy:</label>
                                        <span>{scooter.energy_level}%</span>
                                    </>
                                }
                            </div>
                        </div>


                        <Badge type={scooter.type}>{scooter.type}</Badge>
                        <p className="w-2xl">
                            {scooter.description}
                        </p>
                        <Button className="bg-amber-300 w-full  border-amber-300 ">Rent Scooter</Button>
                    </div>

                </Card>
            </section>

        </section>
    )
}