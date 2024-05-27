'use client';

import Link from "next/link"
import React from "react";

interface NavBarProps {
    scrollToSection: (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {

    return (
        <nav className="z-50 flex justify-between w-full pt-2 pb-2 fixed bg-white drop-shadow-lg">
            <div className="flex mx-7 p-3">
                <Link href="/">
                    <b className="text-black">BARAMATE SAIJANYOON</b>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex justify-middle mx-7 text-black">
                    <li className="mx-1 p-2 px-4 transition ease-in hover:bg-orange-500 hover:text-white cursor-pointer focus:bg-orange-500 focus:text-white rounded-full"><a href="#HeroBanner" onClick={(e) => scrollToSection(e, 'hero_section')}>Home</a></li>
                    <li className="mx-1 p-2 px-4 transition ease-in hover:bg-orange-500 hover:text-white cursor-pointer focus:bg-orange-500 focus:text-white rounded-full"><a href="#AboutSection" onClick={(e) => scrollToSection(e, 'about_section')}>About</a></li>
                    <li className="mx-1 p-2 px-4 transition ease-in hover:bg-orange-500 hover:text-white cursor-pointer focus:bg-orange-500 focus:text-white rounded-full"><a href="#ProjectSection" onClick={(e) => scrollToSection(e, 'project_section')}>Project</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;