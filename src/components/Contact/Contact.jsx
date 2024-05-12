import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section className="max-w-screen-xl mx-auto min-h-screen pb-10 flex flex-col items-center justify-center gap-8 lg:gap-20">
            <h1 className="font-bold mb-2 text-center text-transparent lg:text-6xl text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                Contact with me
            </h1>
            <section className="w-full px-2 md:px-10 lg:px-2 text-white  mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12">
            
                <div className=" p-8   relative skill-container flex w-full mx-auto md:w-2/3 lg:w-1/2 flex-col items-start gap-2 rounded-lg" style={{boxShadow: "2px 2px 10px 2px #9b59b6"}}>
                    <div className='upEffect absolute  rounded-lg top-0 left-0 '></div>
                    <h1 className="font-bold relative mb-4 text-center lg:text-2xl text-xl">Get in Touch:</h1>
                    <div className="flex justify-center relative items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#9b59b6] text-[#9b59b6]"><FaPhoneAlt /></div>
                        <div>
                            <p className="font-bold text-lg">Contact:</p>
                            <p className="font-bold text-gray-400">01903106521</p>
                        </div>
                    </div>
                    <div className="flex justify-center relative items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#9b59b6] text-[#9b59b6]"><MdEmail /></div>
                        <div>
                            <p className="font-bold text-lg">Email:</p>
                            <p className="font-bold text-gray-400">sajibhasan9811@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-center relative items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#9b59b6] text-[#9b59b6]"><FaMapMarkerAlt /></div>
                        <div>
                            <p className="font-bold text-lg">Location:</p>
                            <p className="font-bold text-gray-400">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                
            </section>
        </section>
    );
};

export default Contact;