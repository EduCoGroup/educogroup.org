import React from "react";
import Header from "../.GlobalComponents/Header"
import Hero from "../SecurityEngineering/Hero"
import Results from "../SecurityEngineering/Results"
import Class from "../SecurityEngineering/Class"
import Opportunity from "../SecurityEngineering/Opportunity"
import Contact from "../.GlobalComponents/Contact"
import Footer from "../.GlobalComponents/Footer"
import "./index.css"

export default function SecurityEngineering() {

    return (
        <div id="SecurityEngineering">
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


export const Head = () => <title>Security Engineer | EduCo</title>