import React from "react";
import Header from "./.GlobalComponents/Header"
import Hero from "./DataEngineering/Hero"
import Results from "./DataEngineering/Results"
import Class from "./DataEngineering/Class"
import Opportunity from "./DataEngineering/Opportunity"
import Contact from "./.GlobalComponents/Contact"
import Footer from "./.GlobalComponents/Footer"
import "./index.css"

export default function DataEngineering() {

    return (
        <div id="DataEngineering">
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


export const Head = () => <title>Data Engineering | EduCo</title>