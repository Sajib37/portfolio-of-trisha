import React from "react";
import { FaCalendar } from "react-icons/fa";
import "./../../../App.css";

const Academic = () => {
    return (
        <div>
            <h1 className="text-xl md:text-3xl mb-4 font-bold">
                Academic Journey :
            </h1>
            <ol className="relative border-s mx-auto border-purple-600 dark:border-gray-700 max-w-xs md:max-w-2xl">
                <li className="mb-10 relative container ms-4">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full top-1 -left-[23px] border border-purple-600 "></div>
                    <div className="leftEffect"></div>
                    <div className="relative rounded-lg w-full p-1 md:p-3 timeline-box bg-transparent border-2 border-purple-600">
                        <span className="flex gap-2 items-center text-base">
                            <FaCalendar /> 2019 - 2024
                        </span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                            Jagannath University (BSc)
                        </h1>
                        <p>
                            I Am pursuing my BSC in Computer Science and
                            Engineering.As i'm a tech enthusiast ia want to
                            explore and crack the different field of tech.
                        </p>
                    </div>
                </li>
                <li className="mb-10 ms-4 relative container">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full top-1 -left-[23px] border border-purple-600 "></div>
                    <div className="leftEffect"></div>
                    <div className="relative rounded-lg w-full p-1 md:p-3 timeline-box bg-transparent border-2 border-purple-600">
                        <span className="flex gap-2 items-center text-base">
                            <FaCalendar /> 2016 - 2017
                        </span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                            Noakhali Govt. college
                        </h1>
                        <p>
                            I achieved my Higher Secondary School Certificate in
                            Science Background.
                        </p>
                    </div>
                </li>
                <li className="mb-10 ms-4 relative container">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full top-1 -left-[23px] border border-purple-600 "></div>
                    <div className="leftEffect"></div>
                    <div className="relative w-full rounded-lg p-1 md:p-3 timeline-box bg-transparent border-2 border-purple-600">
                        <span className="flex gap-2 items-center text-base">
                            <FaCalendar /> 2014 - 2015
                        </span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                            Thaker Hat Ahmeed Ullah High School (SSC)
                        </h1>
                        <p>
                            I achieved my secondary school certificate also in
                            science background.
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    );
};

export default Academic;
