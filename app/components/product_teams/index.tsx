import React from "react";
import Badge from "../badge";
import EletronicCircuit from "./../../assets/electronic-circuit.png";
import Group21 from "./../../assets/group21.png";
import Image from "next/image";

function ProductTeams() {
    return (
        <section className="flex flex-col gap-8 mt-20 px-8 lg:px-60 lg:flex-row-reverse lg:items-center lg:justify-center">
            <div className="flex flex-col gap-4 lg:w-6/12 lg:p-4">
                <Badge image={EletronicCircuit}>
                    <p className="text-purple-800 text-xs">For Product Teams</p>
                </Badge>
                <h2 className="text-3xl font-bold text-purple-950">Launch with the best stack</h2>
                <p className="ext-slate-500 text-sm">A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</p>
            </div>
            <Image
                src={Group21}
                alt="Group21"
                width={1024}
                height={1024}
                className="w-full lg:w-6/12 lg:p-8"
            />
        </section>
    )
}

export default ProductTeams;