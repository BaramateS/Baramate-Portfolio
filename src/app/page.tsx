'use client';

import Image from "next/image";
import NavBar from "./components/Navbar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import React, { useRef } from "react";

export default function Home() {

  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const projectSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    switch (sectionId) {
      case 'hero_section':
        heroSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about_section':
        aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'project_section':
        projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  return (
    <main>
      <NavBar scrollToSection={scrollToSection} />
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>
      <div ref={aboutSectionRef}>
        <AboutSection />
      </div>
      <div ref={projectSectionRef}>
        <ProjectSection />
      </div>
    </main>
  );
}
