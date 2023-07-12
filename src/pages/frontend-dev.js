import React from "react";
import Header from "../.GlobalComponents/Header"
import Hero from "../FrontEndDev/Hero"
import Results from "../FrontEndDev/Results"
import Class from "../FrontEndDev/Class"
import Opportunity from "../FrontEndDev/Opportunity"
import Contact from "../.GlobalComponents/Contact"
import Footer from "../.GlobalComponents/Footer"
import "./index.css"

export default function FrontEndDev() {

    return (
        <div id="FrontEndDev">
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


export const Head = () => <title>Front End Dev | EduCo</title>