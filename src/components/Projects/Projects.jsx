import React from "react";
import bookStore from "./../../assets/projects/bookStore.png";
import campusCommune from "../../assets/projects/campus-commune.png";
import counseling from "../../assets/projects/counceling.png";
import library from "../../assets/projects/library.png";

const Projects = () => {
    return (
        <section className="max-w-screen-xl pb-10 mx-auto flex flex-col justify-center items-center min-h-screen gap-8 md:gap-12">
            <h1 className="font-bold mb-2 text-center text-transparent lg:text-6xl text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                My Projects
            </h1>

            <section className="text-white px-2 md:px-10 lg:px-0 grid lg:grid-cols-2 gap-6  lg:gap-8">
                {/* Campus Commune */}
                <div
                    className="space-y-2  rounded-xl"
                    style={{ boxShadow: "0px 0px 10px 0px #9b59b6" }}
                >
                    <img
                        className="rounded-t-xl w-full max-h-80"
                        src={campusCommune}
                        alt=""
                    />
                    <div className="p-2">
                        <h1 className="text-lg text-purple-600 font-bold">
                            Campus commune
                        </h1>
                        <p className="text-justify">
                            “Campus Commune” is a reliable and student friendly
                            system.That will create strong bonding and
                            brotherhood among the students of a campus as well
                            as remove all the hustle in case of accommodation
                            and campus marketplace gap.
                        </p>
                    </div>
                </div>

                {/* Book store */}
                <div
                    className="space-y-2  rounded-xl"
                    style={{ boxShadow: "0px 0px 10px 0px #9b59b6" }}
                >
                    <img
                        className="rounded-t-xl w-full max-h-80"
                        src={bookStore}
                        alt=""
                    />
                    <div className="p-2">
                        <h1 className="text-lg text-purple-600 font-bold">
                            Online Secondhand Bookstore.
                        </h1>
                        <p className="text-justify">
                            The Online Secondhand Book Buying and Selling system
                            is an online based website. It is a platform where
                            any user can buy or sell secondhand books by staying
                            in their own place.
                        </p>
                    </div>
                </div>

                {/* Counseling And Mental Health */}
                <div
                    className="space-y-2  rounded-xl"
                    style={{ boxShadow: "0px 0px 10px 0px #9b59b6" }}
                >
                    <img
                        className="rounded-t-xl w-full max-h-80"
                        src={counseling}
                        alt=""
                    />
                    <div className="p-2">
                        <h1 className="text-lg text-purple-600 font-bold">
                            Counseling and Consultancy of Mental Health
                        </h1>
                        <p className="text-justify">
                            Globally, mental health problems are growing a
                            public health concern. Resources and services for
                            mental disorders are disproportionately low compared
                            to physical disorder.In this project we will try to
                            create such an interface which will help it’s users
                            to support mentally and resolve their mental problem
                            through experienced councilors.
                        </p>
                    </div>
                </div>

                {/* Library management App */}
                <div
                    className="space-y-2  rounded-xl"
                    style={{ boxShadow: "0px 0px 10px 0px #9b59b6" }}
                >
                    <img
                        className="rounded-t-xl w-full max-h-80"
                        src={library}
                        alt=""
                    />
                    <div className="p-2">
                        <h1 className="text-lg text-purple-600 font-bold">
                            Library Management System
                        </h1>
                        <p className="text-justify">
                            E-Library is a comprehensive library management
                            software facilitating member access to book
                            browsing, details, and borrowing. Librarians oversee
                            critical modules including member maintenance, book
                            management, and transaction tracking, streamlining
                            traditional library operations effectively.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Projects;
