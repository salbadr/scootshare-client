import { siteImage } from "@/helper";
import { useId } from "react";
import { Card } from "@/components/Card";
import { FaMapMarkerAlt, } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import type { CardsType } from "@/types";

export default function About() {
    const stepsCards: CardsType[] = [
        {
            id: useId(),
            icon: IoShieldOutline,
            heading: 'Safety First',
            description: 'We prioritize the safety of our riders with regular maintenance and safety features on all our scooter'
        },
        {
            id: useId(),
            icon: PiLightning,
            heading: 'Sustainability',
            description: 'Our electric scooters help reduce carbon emissions and promote eco-friendly transportation.'
        },
        {
            id: useId(),

            icon: FiUsers,
            heading: 'Community',
            description: 'We build strong communities by connecting people and making cities more accessible.'
        },
        {
            id: useId(),

            icon: FaMapMarkerAlt,
            heading: 'Accessibility',
            description: 'Making urban mobility accessible to everyone, everywhere, at any time.'
        }
    ]

    return (
        <section className="w-full h-full">
            <section className="bg-amber-50 p-20 flex flex-wrap justify-center space-y-4">
                <div className="w-sm md:w-2xl space-y-4 text-center">
                    <h1 className="text-2xl md:text-6xl font-semi-bold">About ScootShare</h1>
                    <p className="text-center text-wrap">We're on a mission to revolutionize urban transportation by making it more sustainable,
                        accessible, and convenient for everyone.

                    </p>
                </div>
            </section>
            <section className="p-20 flex flex-wrap justify-around space-y-4 border-b-2 border-zinc-200">
                <div className="w-sm md:w-2xl space-y-4">
                    <h2 className="text-4xl font-bold">Our Mission</h2>
                    <p className="text-wrap">
                        ScootShare was founded in 2020 with a simple goal: to make cities more livable by providing an easy, affordable, and eco-friendly way to get around.
                    </p>
                    <p className="text-wrap">
                        We believe that the future of urban mobility is electric, shared, and accessible to all. Our scooters are designed to seamlessly integrate into your daily life, whether you're commuting to work, running errands, or exploring your city.
                    </p>
                    <p className="text-wrap">
                        Every ride on a ScootShare scooter helps reduce traffic congestion and carbon emissions, contributing to cleaner, healthier cities for everyone.
                    </p>
                </div>
                <div className="w-sm">
                    <img className="w-sm aspect-auto object-cover border-transparent border rounded-xl" src={siteImage('mission_image.jpg')} />
                </div>
            </section>
            <section className="bg-zinc-50 py-30">
                <div className="text-center">
                    <h2 className="text-4xl mb-3 font-bold">Our Values</h2>
                    <p className="text-zinc-500">The principles that guide everything we do</p>
                </div>
                <div className="flex justify-evenly gap-10 flex-wrap items-center mt-20">
                    {stepsCards.map(card => {
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
            <section className="bg-amber-300 py-20">
                <div className="text-center space-y-5">
                    <h2 className="text-4xl text-zinc-800 mb-4 font-bold">Join the Movement</h2>
                    <p className="text-lg text-zinc-800 font-semi-bold mb-4">Be part of the solution to urban congestion and pollution. Start riding with ScootShare today.</p>
                </div>
            </section>

        </section>
    )
}