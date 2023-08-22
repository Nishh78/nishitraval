import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function Home() {

    return (
        <>
            <Hero />
            <Projects />
            <Contact />
            <ScrollToTop />
        </>
    );
}

export default Home;
