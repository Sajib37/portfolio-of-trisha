import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'

const NavLinks = () => {
    
    const [activeLink , setActiveLink]=useState('home')
    const handleActiveLink = (link) => {
        setActiveLink(link)
    }
    const getAnimationDelay = (index) => {
        return `${0.2*index}s`
    }
    return (
        <>
            <li style={{animationDelay: getAnimationDelay(1)}} className="topMove"><a onClick={()=>handleActiveLink('home')} className={`hover:text-purple-400 ${activeLink==='home'?'text-purple-400 underline underline-offset-4':''}`} href="#home">Home</a></li>
            <li style={{animationDelay: getAnimationDelay(2)}} className="topMove"><a onClick={()=>handleActiveLink('about')} className={`hover:text-purple-400 ${activeLink==='about'?'text-purple-400 underline underline-offset-4':''}`} href="#about">About</a></li>
            <li style={{animationDelay: getAnimationDelay(3)}} className="topMove"><a onClick={() => handleActiveLink('journey')} className={`hover:text-purple-400 ${activeLink === 'journey' ? 'text-purple-400 underline underline-offset-4' : ''}`} href="#journey">Experience</a></li>
            <li style={{animationDelay: getAnimationDelay(4)}} className="topMove"><a onClick={()=>handleActiveLink('skills')} className={`hover:text-purple-400 ${activeLink==='skills'?'text-purple-400 underline underline-offset-4':''}`} href="#skills">Skills</a></li>
            <li style={{animationDelay: getAnimationDelay(5)}} className="topMove"><a onClick={()=>handleActiveLink('projects')} className={`hover:text-purple-400 ${activeLink==='projects'?'text-purple-400 underline underline-offset-4':''}`} href="#projects">Projects</a></li>
            <li style={{animationDelay: getAnimationDelay(6)}} className="topMove"><a onClick={()=>handleActiveLink('contact')} className={`hover:text-purple-400 ${activeLink==='contact'?'text-purple-400 underline underline-offset-4':''}`} href="#contact">Contact</a></li>
        </>
    );
};

export default NavLinks;