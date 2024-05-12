import React from "react";
import { FaCalendar } from "react-icons/fa";
import "./../../../App.css"
const Experience = () => {
    return (
        <section>
            <h1 className="text-xl md:text-3xl mb-4 font-bold">Experience :</h1>
            <ol className="relative border-s border-purple-600 dark:border-gray-700 mx-auto max-w-xs md:max-w-2xl">
                <li className="mb-10 container relative ms-4">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full top-1 -left-[23px] border border-purple-600 "></div>
                    <div className="leftEffect"></div>

                    <div className="relative rounded-lg w-full p-1 md:p-3 timeline-box bg-transparent border-2 border-purple-600">
                        <h1 className="text-lg md:text-xl font-semibold mb-2 ">
                            Women In Digital-
                            <span className="text-Primary">intern</span>
                        </h1>
                        <p>
                            Here I have started learning on
                            Blockchain.Blockchain is a revolutionary technology
                            that has gained significant attention and popularity
                            in recent years. I also work on a thesis titled,
                            “Attribute based access control using hyperledger
                            blockchain”.
                        </p>
                    </div>
                </li>

                <li className="mb-10 container relative ms-4">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full top-1 -left-[23px] border border-purple-600 "></div>
                    <div className="leftEffect"></div>

                    <div className="relative rounded-lg w-full p-1 md:p-3 timeline-box bg-transparent border-2 border-purple-600">
                        <h1 className="text-lg md:text-xl font-semibold mb-2 ">
                            Women In Digital-
                            <span className="text-Primary">
                                Blockchain Trainer
                            </span>
                        </h1>
                        <p>
                            Here iam working as a Blockchain Trainer and took
                            several nationwide codingcamp in many universities
                            of Bangladesh.
                        </p>
                    </div>
                </li>

                <li className="mb-10 container relative ms-4">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full top-1 -left-[23px] border border-purple-600 "></div>
                    <div className="leftEffect"></div>

                    <div className="relative rounded-lg w-full p-1 md:p-3 timeline-box bg-transparent border-2 border-purple-600">
                        <h1 className="text-lg md:text-xl font-semibold mb-2 ">
                            Farhana’s Brainstation-
                            <span className="text-Primary">
                                Project Associate(Volunteer)
                            </span>
                        </h1>
                        <p>
                            Here Iam working as an IT specialist.And doing a
                            project under SDG for ensuring quality education..
                        </p>
                    </div>
                </li>
                <li className="mb-10 container relative ms-4">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full top-1 -left-[23px] border border-purple-600 "></div>
                    <div className="leftEffect"></div>

                    <div className="relative rounded-lg w-full p-1 md:p-3 timeline-box bg-transparent border-2 border-purple-600">
                        <h1 className="text-lg md:text-xl font-semibold mb-2 ">
                            SimpliSolve-
                            <span className="text-Primary">
                                Data Science(Trainee)
                            </span>
                        </h1>
                        <p>
                            Here iam working remotely in Data Science track.And
                            learning different types of ML models and works with
                            different datasets..
                        </p>
                    </div>
                </li>
            </ol>
        </section>
    );
};

export default Experience;
