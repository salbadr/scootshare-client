import { PiLightning } from "react-icons/pi";

import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { Card } from "@/components/Card";

import type { IconType } from "react-icons";
import { useId } from 'react';



type CardsType = {
    id: string,
    icon?: IconType,
    title?: string,
    heading: string,
    description: string
}
export default function Home() {


    const welcomeCards: CardsType[] = [
        {
            id: useId(),
            icon: PiLightning,
            heading: 'Quick & Easy',
            description: 'Unlock and ride in seconds with our mobile app'
        },
        {
            id: useId(),
            icon: FaMapMarkerAlt,
            heading: 'Anywhere You Go',
            description: 'Find scooters near you in all major city areas'
        },
        {
            id: useId(),

            icon: IoShieldOutline,
            heading: 'Safe & Reliable',
            description: 'Regular maintenance and safety checks on all scooters'
        },
        {
            id: useId(),

            icon: FaRegClock,
            heading: '24/7 Available',
            description: 'Ride whenever you need, day or night'
        }
    ]

    const stepsCards: CardsType[] = [
        {
            id: useId(),

            title: '01',
            heading: 'Quick & Easy',
            description: 'Unlock and ride in seconds with our mobile app'
        },
        {
            id: useId(),

            title: '02',
            heading: 'Anywhere You Go',
            description: 'Find scooters near you in all major city areas'
        },
        {
            id: useId(),

            title: '03',
            heading: 'Safe & Reliable',
            description: 'Regular maintenance and safety checks on all scooters'
        },
        {
            id: useId(),

            title: '04',
            heading: '24/7 Available',
            description: 'Ride whenever you need, day or night'
        }
    ]
    return (
        <section className="w-full h-full">
            {
                //Main Welcome Section 
            }
            <div >
                <div className="text-center">
                    <h2 className="text-4xl mb-3 font-bold">Why Choose ScootShare?</h2>
                    <p className="text-stone-500">Experience the easiest and most sustainable way to get around the city</p>
                </div>
                <div className="flex justify-evenly gap-10 flex-wrap items-center mt-20">

                    {welcomeCards.map(card => {
                        const Icon = card.icon!;
                        return (
                            <Card key={card.id} className="text-center">
                                {<Icon className="text-4xl text-amber-600" aria-hidden="true" />}
                                <h3 className="text-2xl font-semibold">{card.heading}</h3>
                                <p className="w-3xs ">{card.description}</p>
                            </Card>
                        )
                    })}
                </div>
            </div>
            <div className="bg-zinc-50 pt-30">
                <div className="text-center">
                    <h2 className="text-4xl mb-3 font-bold">How it works?</h2>
                    <p className="text-stone-500">Get riding in just four simple steps</p>
                </div>
                <div className="flex justify-evenly gap-10 flex-wrap items-center mt-20">

                    {stepsCards.map(card => {
                        return (
                            <Card key={card.id} alignment="left">
                                <h2 className="text-6xl text-amber-100">{card.title}</h2>
                                <h3 className="text-2xl font-semibold">{card.heading}</h3>
                                <p className="w-3xs">{card.description}</p>
                            </Card>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}