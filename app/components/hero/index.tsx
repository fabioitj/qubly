import Image from "next/image";
import React from "react";
import BG from "./../../assets/BG.svg";
import editBrightness from "./../../assets/edit-brightness.png";
import imageHero from "./../../assets/image 1.png";
import Badge from "../badge";

function Hero() {
    return (
        <section>
            <Image
                src={BG}
                alt="Background"
                className="h-screen w-full absolute top-0 -z-10"
                width={400}
                height={400}
            />

            <div className="flex flex-col items-center h-screen gap-16 px-8 lg:px-60 lg:flex-row">
                <div className="flex flex-col justify-center items-start mt-32 gap-4 lg:w-6/12">
                    <Badge key={0} image={editBrightness}>
                        <p className="text-purple-800 text-xs">v3.1 released. <span className="underline">Learn more</span></p>
                    </Badge>
                    <h2 className="font-bold text-5xl">Your data with real-time analytics</h2>
                    <p className="leading-6 text-slate-500">Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <a className="bg-purple-800 text-white text-center px-6 py-3 rounded-full shadow-lg font-bold">Start free trial</a>
                        <a className="bg-white text-purple-800 text-center px-6 py-3 rounded-full shadow-lg font-bold">Learn more</a>
                    </div>
                </div>
                <Image
                    src={imageHero}
                    alt="Image Hero"
                    width={1024}
                    height={1024}
                    className="w-full lg:w-6/12 lg:h-fit max-w-lg"
                />
            </div>
        </section>
    );
}

export default Hero;