import Image from "next/image";
import React from "react";
import ClientLogos from "./../../assets/Client logos.png";

function SignupForm() {
    return (
        <section className="flex flex-col gap-8 mt-20 px-8 lg:px-60 lg:flex-row-reverse">
            <div className="w-full h-[480px] bg-purple-100 p-4 rounded-md lg:w-6/12">
                <div className="flex flex-col items-center gap-4 p-10 bg-white -mt-20 rounded-lg shadow-2xl">
                    <h3 className="text-2xl font-bold">Sign Up</h3>
                    <button className="py-3 px-6 w-full bg-purple-700 text-white rounded-md">Start your free trial</button>
                    <input className="py-3 px-6 w-full rounded-md border-2" placeholder="Your primary email"/>
                    <input className="py-3 px-6 w-full rounded-md border-2" placeholder="Password"/>
                    <input className="py-3 px-6 w-full rounded-md border-2" placeholder="Re-type Password"/>
                    <h4 className="font-bold">OR</h4>
                    <button
                        className="px-4 py-2 border flex gap-2 bg-white border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <Image 
                            src={"https://www.svgrepo.com/show/475656/google-color.svg"} 
                            loading="lazy" 
                            alt="google logo" 
                            width={32} 
                            height={32}
                            className="w-6 h-6"
                        />
                        <span>Login with Google</span>
                    </button>
                    <hr className="w-full"/>
                    <span className="text-xs">Already have an account? <a href="#" className="text-purple-700 font-bold">Login</a></span>
                </div>
            </div>
            <div className="w-full flex flex-col justify-between gap-8 lg:w-6/12">
                <h2 className="text-3xl font-bold text-purple-950">See why the world’s best companies use Qubly to become truly data-driven.</h2>
                <div className="flex items-center justify-between">
                    <hr className="w-4/12"/>
                    <span className="text-slate-500">Trusted by</span>
                    <hr className="w-4/12"/>
                </div>
                <Image
                    src={ClientLogos}
                    alt="Client Logos"
                    width={1024}
                    height={1024}
                    className="w-8/12 p-8"
                />
            </div>
        </section>
    );
}

export default SignupForm;