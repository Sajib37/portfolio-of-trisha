import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
    FaDownload,
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
import "./../../App.css";

import image from "../../assets/profile-1.png";

const Home = () => {
    return (
        <section className="max-w-screen-xl relative flex gap-6 justify-between items-center lg:flex-row flex-col min-h-[85vh]    mx-auto ">
            <div className=" md:space-y-4 space-y-2 md:mt-10 mt-8   text-white px-4 lg:w-1/2">
                <h1 className="text-xl md:text-4xl lg:text-5xl text-white font-bold">
                    Hello, It's me !
                </h1>
                <h1 className="leftMove mb-28 lg:text-4xl md:text-3xl text-2xl text-white font-serif font-extrabold">
                    Jannatul Mawya
                </h1>
                <span className=" text-white  font-bold font-playfair text-xl md:text-2xl ">
                    I'm a
                    <TypeAnimation
                        sequence={[
                            " Data Science Specialist",
                            1000,
                            " Machine Learning Specialist",
                            1000,
                            " Project Associate",
                            1000,
                        ]}
                        style={{ color: "#9b59b6", fontWeight: "bold" }}
                        repeat={Infinity}
                        speed={10}
                    />
                </span>

                <p className="max-w-3xl text-base rightMove">
                    I am a Data Science enthusiast.A versatile professional in
                    Machine learning,Data science alongside with Project
                    management,Critical thinking and leadership.
                </p>

                <div className=" flex gap-4 topMove ">
                    <a
                        target="_blank"
                        className="social-icon rounded-full p-2 cursor-pointer"
                        href="https://www.linkedin.com/in/jannatul-mawya-b68923269/"
                    >
                        <FaLinkedin className="md:text-2xl text-xl " />
                    </a>
                    <a
                        target="_blank"
                        className="social-icon rounded-full p-2 cursor-pointer"
                        href="https://github.com/JannatTrisha"
                    >
                        <FaGithub className="md:text-2xl text-xl " />
                    </a>
                    <a
                        target="_blank"
                        className="social-icon rounded-full p-2 cursor-pointer"
                        href="https://www.facebook.com/jannat.trisha.543?mibextid=ZbWKwL"
                    >
                        <FaFacebook className="md:text-2xl text-xl " />
                    </a>
                </div>
                <button className="p-2 md:px-3 topMove rounded-full bg-purple-600 text-white shadow-lg hover:shadow-purple-800  font-semibold ">
                    <a
                        className="flex items-center gap-1"
                        href="resume.pdf"
                        download
                    >
                        Download CV <FaDownload />
                    </a>
                </button>
            </div>

            <div className="  lg:absolute lg:right-0 lg:bottom-0 w-4/5 md:w-3/5 lg:w-5/12 ">
                <img className="w-full l" src={image} alt="" />
            </div>
        </section>
    );
};

export default Home;
