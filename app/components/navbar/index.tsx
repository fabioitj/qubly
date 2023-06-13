"use client"
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./../../assets/Logo.png";
import Menu from "./../../assets/Menu.png";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className="flex w-full justify-between items-center p-4 absolute left-0 top-0 lg:px-60"
        >
            <Image
                src={Logo}
                alt="Logo"
                width={40}
                height={40}
            />

            <Image
                src={Menu}
                alt="Menu"
                width={40}
                height={40}
                className="p-2 lg:hidden"
                onClick={() => setShowMenu(showMenu => !showMenu)}
            />

            <ul className={"flex-col bg-white gap-2 absolute right-4 top-16 shadow-lg rounded-lg p-2 " + (showMenu ? "flex" : "hidden") + " lg:flex lg:flex-row lg:static lg:shadow-none lg:gap-4"}>
                <li className="block p-4"><a className="w-full font-bold" href="#">About</a></li>
                <li className="block p-4"><a className="w-full font-bold" href="#">Pricing</a></li>
                <li className="block p-4"><a className="w-full font-bold" href="#">Contact Us</a></li>
                <li className="block p-4"><a className="w-full font-bold" href="#">Login</a></li>
                <li className="block border-purple-800 border-2 m-2 rounded-full lg:hover:bg-purple-800 lg:transition-colors"><a className="block text-purple-800 lg:hover:text-white lg:transition-colors px-6 py-2 font-bold" href="#">Start free trial</a></li>
            </ul>
        </div>
    );
}

export default Navbar;