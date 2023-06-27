import React from "react";
import Header from "./.GlobalComponents/Header"
import Hero from "./DataAnalyst/Hero"
import Results from "./DataAnalyst/Results"
import Class from "./DataAnalyst/Class"
import Opportunity from "./DataAnalyst/Opportunity"
import Contact from "./.GlobalComponents/Contact"
import Footer from "./.GlobalComponents/Footer"
import "./index.css"

export default function DataAnalyst() {

    return (
        <div id="DataAnalyst">
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


export const Head = () => <title>Data Analyst | EduCo</title>