import React from "react";
import Header from "./.GlobalComponents/Header"
import Hero from "./CyberSecurity/Hero"
import Results from "./CyberSecurity/Results"
import Class from "./CyberSecurity/Class"
import Opportunity from "./CyberSecurity/Opportunity"
import Contact from "./.GlobalComponents/Contact"
import Footer from "./.GlobalComponents/Footer"
import "./index.css"

export default function CyberSecurity() {

    return (
        <div id="CyberSecurity">
            <Header />
            <Hero />
            <Results />
            <Class />
            <Opportunity />
            <Contact />
            <Footer />
        </div>
    )
}


export const Head = () => <title>Cyber Security | EduCo</title>