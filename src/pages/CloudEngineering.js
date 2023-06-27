import React from "react";
import Header from "./.GlobalComponents/Header"
import Hero from "./CloudEngineering/Hero"
import Results from "./CloudEngineering/Results"
import Class from "./CloudEngineering/Class"
import Opportunity from "./CloudEngineering/Opportunity"
import Contact from "./.GlobalComponents/Contact"
import Footer from "./.GlobalComponents/Footer"
import "./index.css"

export default function CloudEngineering() {

    return (
        <div id="CloudEngineering">
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


export const Head = () => <title>Cloud Engineering | EduCo</title>