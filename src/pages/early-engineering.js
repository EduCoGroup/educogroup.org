import React from "react";
import Header from "../.GlobalComponents/Header"
import Hero from "../EarlyEngineering/Hero"
import Results from "../EarlyEngineering/Results"
import Class from "../EarlyEngineering/Class"
import Opportunity from "../EarlyEngineering/Opportunity"
import Contact from "../.GlobalComponents/Contact"
import Footer from "../.GlobalComponents/Footer"
import "./index.css"


export default function EarlyEngineering() {

    return (
        <div id="EarlyEngineering">
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


export const Head = () => <title>Early Engineering | EduCo</title>