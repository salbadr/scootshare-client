import { PiLightning } from "react-icons/pi";

import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { Card } from "@/components/Card";

import { useId } from 'react';

import { Button } from "@/components/Button";
import { siteImage } from "@/helper";
import type { CardsType } from "@/types";


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
            <section className="bg-amber-50 p-20 flex flex-wrap justify-between space-y-4">
                <div className="w-sm md:w-2xl space-y-4">
                    <h1 className="text-2xl md:text-6xl font-bold">Ride the Future of Urban Mobility</h1>
                    <p className="text-wrap">Fast, eco-friendly, and convenient scooter sharing for your daily commute.
                        Get where you need to go with Scoot Share
                    </p>
                    <div className="flex md:w-lg flex-wrap justify-between gap-2 md:gap-0 ">
                        <Button className="bg-amber-300 w-full md:w-60 border-amber-300 ">Browse Scooters</Button>
                        <Button className="bg-white w-full md:w-60 border-2 border-amber-300">Learn More</Button>

                    </div>

                </div>
                <div className="w-md md:w-2xl">
                    <img className="aspect-3/2 object-cover border-transparent border rounded-xl" src={siteImage('homepage_banner.jpg')} />

                </div>
            </section>
            <section className="py-30 px-10 md:px-0 border-b-2 border-zinc-200">
                <div className="text-center">
                    <h2 className="text-4xl mb-3 font-bold">Why Choose ScootShare?</h2>
                    <p className="text-zinc-500">Experience the easiest and most sustainable way to get around the city</p>
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
            </section>
            <section className="bg-zinc-50 py-30">
                <div className="text-center">
                    <h2 className="text-4xl mb-3 font-bold">How it works?</h2>
                    <p className="text-zinc-500">Get riding in just four simple steps</p>
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
            </section>

            <section className="bg-amber-300 py-20">
                <div className="text-center space-y-5">
                    <h2 className="text-4xl text-zinc-800 mb-4 font-bold">Ready to Start Your Journey</h2>
                    <p className="text-lg text-zinc-800 font-semi-bold">Get riding in just four simple steps</p>
                    <Button className="bg-white text-lg border text-zinc-800 rounded-lg py-3 px-8 border-white cursor-pointer font-bold">Browse Scooters</Button>
                </div>
            </section>
        </section>
    )
}