import Image from "next/image";
import React from "react";
import BG from "./../../assets/BG.png";
import editBrightness from "./../../assets/edit-brightness.png";
import imageHero from "./../../assets/image 1.png";

function Hero() {
    return (
        <section
            className="h-screen"
        >
            <Image
                src={BG}
                alt="Background"
                className="h-full w-full absolute -z-10"
                width={200}
                height={200}
            />

            <div className="flex flex-col h-full gap-16 px-8">
                <div className="flex flex-col justify-center items-start mt-32 gap-4">
                    <span className="flex items-center justify-between gap-2 bg-purple-200 rounded-full px-4 py-1">
                        <Image
                            src={editBrightness}
                            alt="Edit Brightness"
                            width={16}
                            height={16}
                            className="h-max"
                        />
                        <p className="text-purple-800 text-sm">v3.1 released. <span className="underline">Learn more</span></p>
                    </span>
                    <h2 className="font-bold text-5xl">Your data with real-time analytics</h2>
                    <p className="leading-6 text-slate-500">Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
                    <div className="flex flex-col gap-4">
                        <a className="bg-purple-800 text-white px-6 py-3 rounded-full shadow-lg font-bold">Start free trial</a>
                        <a className="bg-white text-purple-800 px-6 py-3 rounded-full shadow-lg font-bold">Learn more</a>
                    </div>
                </div>
                <Image
                    src={imageHero}
                    alt="Image Hero"
                    width={1024}
                    height={1024}
                    className="w-full"
                />
            </div>

        </section>
    );
}

export default Hero;