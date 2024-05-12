import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_sdrqkey", "template_32jirof", form.current, {
                publicKey: "NyFYJGObUaA1UQvOZ",
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your message has been send seuccessfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
                (error) => {
                    Swal.fire({
                        title: "OOPs! message did not send!",
                        text: "Try again later..",
                        icon: "question",
                    });
                }
            );
    };

    return (
        <section className="max-w-screen-xl mx-auto min-h-screen pb-10 flex flex-col items-center justify-center gap-8 lg:gap-20">
            <h1 className="font-bold mb-2 text-center text-transparent lg:text-6xl text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                Contact with me
            </h1>
            <section className="w-full px-2 md:px-10 lg:px-2 text-white  mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12">
                <div
                    className=" p-8   relative skill-container flex w-full mx-auto md:w-2/3 lg:w-1/2 flex-col items-start gap-2 rounded-lg"
                    style={{ boxShadow: "2px 2px 10px 2px #9b59b6" }}
                >
                    <div className="upEffect absolute  rounded-lg top-0 left-0 "></div>
                    <h1 className="font-bold relative mb-4 text-center lg:text-2xl text-xl">
                        Get in Touch:
                    </h1>
                    <div className="flex justify-center relative items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#9b59b6] text-[#9b59b6]">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Contact:</p>
                            <p className="font-bold text-gray-400">
                                +880 1630647999
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center relative items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#9b59b6] text-[#9b59b6]">
                            <MdEmail />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Email:</p>
                            <p className="font-bold text-gray-400">
                                jnucsetrisha99@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center relative items-center gap-2">
                        <div className="text-2xl flex items-center justify-center w-14 h-14 p-2 rounded-full border-2 border-[#9b59b6] text-[#9b59b6]">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Location:</p>
                            <p className="font-bold text-gray-400">
                                Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div
                    className=" rounded-lg w-full mx-auto lg:w-1/2 py-4 px-2 md:px-4"
                    style={{ boxShadow: "2px 2px 10px 2px #9b59b6" }}
                >
                    <h1 className="font-bold text-2xl mb-4 text-center md:text-3xl">
                        Contact Form
                    </h1>
                    <form
                        className="flex flex-col"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <label className="font-semibold">Name</label>
                        <input
                            className="p-2 mb-2 rounded-lg"
                            placeholder="Enter your name"
                            type="text"
                            name="from_name"
                        />
                        <label className="font-semibold">Email</label>
                        <input
                            className="p-2 mb-2 rounded-lg"
                            placeholder="Enter your Email"
                            type="email"
                            name="from_email"
                        />
                        <label className="font-semibold">Message</label>
                        <textarea
                            className="p-2 text-black mb-2 rounded-lg"
                            placeholder="Write your message here"
                            name="message"
                        />
                        <input
                            className="bg-[#9b59b6] rounded-full p-2 mt-4 text-black border-2 w-32 md:w-36 mx-auto border-purple-500"
                            type="submit"
                            value="Send"
                        />
                    </form>
                </div>
            </section>
        </section>
    );
};

export default Contact;
