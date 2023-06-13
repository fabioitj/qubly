import React from "react";
import Badge from "../badge";
import Eye from "./../../assets/eye.png";
import Image from "next/image";

import Card1 from "./../../assets/card1.png";
import Card2 from "./../../assets/card2.png";
import Card3 from "./../../assets/card3.png";

function WhyQublyCard({image, title, subtitle}: {image: any, title: string, subtitle: string}) {
    return (
        <div className="flex flex-col items-center gap-4 shadow-lg p-4 rounded-lg lg:shadow-none">
            <Image
                src={image}
                alt="Card Why Qubly"
                width={32}
                height={32}
            />
            <h3 className="font-bold">{title}</h3>
            <p className="text-center">{subtitle}</p>
        </div>
    )
}

function WhyQubly() {

    const cards = [
        {
            image: Card1,
            title: "Valuable business insights",
            subtitle: "Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights."
        },
        {
            image: Card2,
            title: "Powerful Algorithms",
            subtitle: "With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data."
        },
        {
            image: Card3,
            title: "Data in real-time",
            subtitle: "Collect data in real-time from multiple channels and move it into a data lake, in its original format."
        },
    ]

    return (
        <section className="flex flex-col items-center gap-8 mt-20 px-8 lg:px-60">
            <Badge image={Eye}>
                <p className="text-purple-800 text-xs">Why Qubly</p>
            </Badge>
            <h2 className="text-3xl font-bold text-purple-950">Get actionable insights from Big Data in 3 steps</h2>
            <p className="text-slate-500 text-sm lg:px-44 lg:text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <div className="flex flex-col gap-4 w-full lg:flex-row">
                {
                    cards && cards.map((card, index) => {
                        return <WhyQublyCard key={index} image={card.image} title={card.title} subtitle={card.subtitle}/>
                    })
                }
            </div>
        </section>
    )
}

export default WhyQubly;