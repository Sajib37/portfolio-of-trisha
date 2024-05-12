import React from "react";
import "./../../App.css";
import profile from "../../assets/profile-1.png";
const About = () => {
    return (
        <section className="max-w-screen-xl text-white mx-auto  flex gap-12 items-center justify-center flex-col py-8 md:pb-14 pb-12">
            <div>
                <h1 className=" font-bold text-transparent lg:text-6xl md:text-4xl text-3xl bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                    About <span className="text-white">Me</span>
                </h1>
            </div>

            <div className="flex lg:gap-24 gap-12 flex-col lg:flex-row">
                <div className="wrapper">
                    <div className="box p-14 bg-[#9b59b6] w-80 md:w-96  flex items-center justify-center">
                        <img className="w-full" src={profile} alt="" />
                    </div>
                </div>

                <div className="space-y-6 flex flex-col items-center justify-center">
                    <h1 className="md:text-3xl px-2 text-2xl font-bold text-white text-center  max-w-sm md:max-w-xl">
                        Hey, I'm delighted to see you here.
                    </h1>
                    <div className="px-4 space-y-2 md:space-y-4 lg:space-y-6 text-justify">
                        <p>
                            
                            Driven by a fervent passion for data science,
                            machine learning, project management, and project
                            leadership, I embody the essence of innovation and
                            strategic thinking.
                        </p>
                        <p>
                            With a meticulous approach to problem-solving and a
                            flair for creativity, I thrive in the ever-evolving
                            landscape of technology. My diverse skill set,
                            cultivated through hands-on experience and
                            continuous learning, equips me to tackle complex
                            challenges with confidence and precision.
                        </p>
                        <p>
                            Whether it's architecting sophisticated algorithms
                            or orchestrating seamless project workflows, I am
                            dedicated to delivering impactful results that drive
                            organizational growth. Let's collaborate and
                            transform ideas into tangible successes.
                        </p>
                    </div>
                    <button
                        className="p-2 md:p-3 flex items-center gap-1 rounded-full bg-purple-600 text-white transition-shadow hover:shadow-none font-semibold "
                        style={{ boxShadow: "0px 0px 5px 0px #FF6AC2" }}
                    >
                        <a href="#contact">Contact With me</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
