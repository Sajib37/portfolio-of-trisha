import React from "react";

import planning from"./../../assets/icons/planning.png"
import management from"./../../assets/icons/management.png"
import risk from"./../../assets/icons/risk.png"
import thinking from"./../../assets/icons/thinking.png"
import web from"./../../assets/icons/web-development.png"
import data from"./../../assets/icons/data-science.png"

const Skills = () => {
    return (
        <section className="max-w-screen-xl flex flex-col items-center gap-6 md:gap-10  justify-center mx-auto px-2 py-8 pb-12 min-h-screen text-white ">
            <h1 className="font-bold  mb-4 text-center text-transparent lg:text-5xl md:text-4xl text-3xl bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                <span className="text-white">My</span> Skills
            </h1>

            <section className="flex w-full  flex-col gap-10 md:gap-16 items-center justify-center lg:justify-around">
                

                <div className="skill  relative skill-container  list-none   w-full px-3 p-2 rounded-lg">
                    <h1 className="text-xl text-center md:text-3xl font-bold mb-4 md:mb-6">
                        Technical Skills:
                    </h1>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10">
                        
                        {/* Project Planning */}
                        <div className="bg-[#113f5d] p-4 border-2 border-purple-400  space-y-1 md:space-y-2 rounded-lg text-center">
                            <img className="w-20 mx-auto" src={planning} alt="" />
                            <h1 className="text-lg text-Primary md:text-xl font-semibold">Project Planning</h1>
                            <p className="">Lorem ipsum dolor sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, possimus.</p>
                        </div>
                        {/* Project Management */}
                        <div className="bg-[#113f5d] p-4 border-2 border-purple-400   space-y-1 md:space-y-2 rounded-lg text-center">
                            <img className="w-20 mx-auto" src={management} alt="" />
                            <h1 className="text-lg text-Primary md:text-xl font-semibold">Project Management</h1>
                            <p className="">Lorem ipsum dolor sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, possimus.</p>
                        </div>
                        {/* rsik Assesment*/}
                        <div className="bg-[#113f5d] p-4 border-2 border-purple-400   space-y-1 md:space-y-2 rounded-lg text-center">
                            <img className="w-20 mx-auto" src={risk} alt="" />
                            <h1 className="text-lg text-Primary md:text-xl font-semibold">Risk Assesment</h1>
                            <p className="">Lorem ipsum dolor sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, possimus.</p>
                        </div>
                        {/* Critical Thinking */}
                        <div className="bg-[#113f5d] p-4 border-2 border-purple-400   space-y-1 md:space-y-2 rounded-lg text-center">
                            <img className="w-20 mx-auto" src={thinking} alt="" />
                            <h1 className="text-lg text-Primary md:text-xl font-semibold">Critical Thinking</h1>
                            <p className="">Lorem ipsum dolor sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, possimus.</p>
                        </div>
                        {/* Web Development */}
                        <div className="bg-[#113f5d] p-4 border-2 border-purple-400   space-y-1 md:space-y-2 rounded-lg text-center">
                            <img className="w-20 mx-auto" src={web} alt="" />
                            <h1 className="text-lg text-Primary md:text-xl font-semibold">Web Development</h1>
                            <p className="">Lorem ipsum dolor sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, possimus.</p>
                        </div>
                        {/* Data Science */}
                        <div className="bg-[#113f5d] p-4 border-2 border-purple-400   space-y-1 md:space-y-2 rounded-lg text-center">
                            <img className="w-20 mx-auto" src={data} alt="" />
                            <h1 className="text-lg text-Primary md:text-xl font-semibold">Data Science</h1>
                            <p className="">Lorem ipsum dolor sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, possimus.</p>
                        </div>
                    </div>
                </div>



                <div className="skill relative skill-container   list-none  md:w-4/5 w-full px-3   ">
                    <h1 className="text-xl md:text-3xl text-center font-bold">
                        Language and Tools:
                    </h1>

                    <div className="relative border-2 mt-4 p-4 rounded-lg border-purple-600">
                        <li>
                            <div className="flex justify-between px-2 mb-2">
                                <h3>Javascript</h3>
                                <h3>90%</h3>
                            </div>
                            <span className="bar">
                                <span className="w-[90%] bg-purple-400"></span>
                            </span>
                        </li>
                        <li>
                            <div className="flex justify-between px-2 mb-2">
                                <h3>React js</h3>
                                <h3>60%</h3>
                            </div>
                            <span className="bar">
                                <span className="bg-purple-400 w-[60%]"></span>
                            </span>
                        </li>
                        <li>
                            <div className="flex justify-between px-2 mb-2">
                                <h3>Python</h3>
                                <h3>80%</h3>
                            </div>
                            <span className="bar">
                                <span className="bg-purple-400 w-[80%]"></span>
                            </span>
                        </li>
                        <li>
                            <div className="flex justify-between px-2 mb-2">
                                <h3>CPP</h3>
                                <h3>90%</h3>
                            </div>
                            <span className="bar">
                                <span className="bg-purple-400 w-[90%]"></span>
                            </span>
                        </li>
                        <li>
                            <div className="flex justify-between px-2 mb-2">
                                <h3>Mysql</h3>
                                <h3>95%</h3>
                            </div>
                            <span className="bar">
                                <span className="bg-purple-400 w-[95%]"></span>
                            </span>
                        </li>
                        <li>
                            <div className="flex justify-between px-2 mb-2">
                                <h3>Firebase</h3>
                                <h3>85%</h3>
                            </div>
                            <span className="bar">
                                <span className="bg-purple-400 w-[85%]"></span>
                            </span>
                        </li>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Skills;
