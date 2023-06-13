import Image from "next/image";
import React from "react";
import Path606 from "./../../assets/Path 606.svg";
import Profile from "./../../assets/Profile.png";
import Tonkean from "./../../assets/Tonkean.png";
import BigSpring from "./../../assets/BigSpring.png";
import Clearbit from "./../../assets/Clearbit.png";
import Mine from "./../../assets/Mine.png";
import Shake from "./../../assets/Shake.png";

function Testimonial() {
    return (
        <section className="h-screen mt-20">

            <Image
                src={Path606}
                alt="Path 606"
                width={1024}
                height={1024}
                className="hidden lg:block w-full h-full absolute -z-10"
            />

            <div className="flex flex-col justify-center items-center h-full gap-4 px-8 lg:px-60 lg:gap-6">
                <p className="text-2xl text-center lg:text-xl text-purple-950 font-semibold">&quot;What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process&quot;</p>
                <Image
                    src={Profile}
                    alt="Profile"
                    width={96}
                    height={96}
                />
                <p className="font-bold">Guillaume Cabane<br/>CTO @ BigSpring</p>
                <hr className="w-full"/>
                <div className="flex flex-wrap items-center py-4 w-full justify-between">
                    <Image
                        src={Tonkean}
                        alt="Tonkean"
                        width={1024}
                        height={1024}
                        className="w-6/12 lg:w-1/5 p-2 lg:p-16"
                    />
                    <Image
                        src={BigSpring}
                        alt="BigSpring"
                        width={1024}
                        height={1024}
                        className="w-6/12 lg:w-1/5 p-2 lg:p-16"
                    />
                    <Image
                        src={Clearbit}
                        alt="Clearbit"
                        width={1024}
                        height={1024}
                        className="w-4/12 lg:w-1/5 p-2 lg:p-16"
                    />
                    <Image
                        src={Mine}
                        alt="Mine"
                        width={1024}
                        height={1024}
                        className="w-4/12 lg:w-1/5 p-2 lg:p-16"
                    />
                    <Image
                        src={Shake}
                        alt="Shake"
                        width={1024}
                        height={1024}
                        className="w-4/12 lg:w-1/5 p-2 lg:p-16"
                    />
                </div>
            </div>

        </section>
    );
}

export default Testimonial;