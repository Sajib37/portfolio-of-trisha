import React, { useState, useEffect } from "react";
import "./App.css";

import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { LuArrowUpCircle } from "react-icons/lu";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Journey from "./components/Journey/Journey";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

const App = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <nav className="w-full h-14 hidden md:block bg-bg1 z-20 fixed top-0 left-0">
                <Navbar />
            </nav>

            {/* For sidebar */}
            <span
                onClick={handleOpen}
                className="text-white text-3xl  p-1 fixed md:hidden top-2 z-40 left-2"
            >
                {open ? <RxCross2 /> : <MdOutlineMenu />}
            </span>
            <span className="md:hidden fixed top-2 z-30 right-3">
                <h1 className=" font-playfair font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                    JMT
                </h1>
            </span>
            <div
                className={`fixed top-0 left-0  z-20 md:hidden transition-transform duration-700 ease-in-out ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Sidebar handleOpen={handleOpen}></Sidebar>
            </div>

            <section
                id="home"
                className=" font-poppins  pt-10 md:pt-14 bg-bg1"
            >
                <Home></Home>
            </section>

            <section
                id="about"
                className="min-h-screen font-poppins pt-10 md:pt-14 bg-bg2"
            >
                <About></About>
            </section>

            <section
                id="journey"
                className="min-h-screen  font-poppins pt-10 md:pt-14 bg-bg1"
            >
                <Journey></Journey>
            </section>
            <section
                id="skills"
                className="min-h-screen font-poppins pt-10 md:pt-14 bg-bg2"
            >
                <Skills></Skills>
            </section>
            <section
                id="projects"
                className="min-h-screen  font-poppins pt-10 md:pt-14 bg-bg1"
            >
                <Projects></Projects>
            </section>
            <section
                id="contact"
                className="min-h-screen font-poppins pt-10 md:pt-14  bg-bg2"
            >
                <Contact></Contact>
            </section>
            <section className="bg-bg1 font-poppins">
                <Footer></Footer>
            </section>
        </>
    );
};

export default App;
