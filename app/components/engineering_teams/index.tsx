import React from "react";
import Badge from "../badge";
import Group28 from "./../../assets/Group 28.png";
import Image6 from "./../../assets/image 6.png";
import Image from "next/image";

function EngineeringTeams() {
    return (
        <section className="flex flex-col gap-8 mt-20 px-8 lg:px-60 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-4 lg:w-6/12">
                <Badge image={Group28}>
                    <p className="text-purple-800 text-xs">For Engineering Teams</p>
                </Badge>
                <h2 className="text-3xl font-bold text-purple-950">Data-driven pipelines in minutes</h2>
                <p className="ext-slate-500 text-sm">Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.</p>
            </div>
            <Image
                src={Image6}
                alt="Group21"
                width={1024}
                height={1024}
                className="w-full lg:w-6/12"
            />
        </section>
    )
}

export default EngineeringTeams;