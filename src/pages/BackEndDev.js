import React from "react";
import Header from "./.GlobalComponents/Header"
import Hero from "./BackEndDev/Hero"
import Results from "./BackEndDev/Results"
import Class from "./BackEndDev/Class"
import Opportunity from "./BackEndDev/Opportunity"
import Contact from "./.GlobalComponents/Contact"
import Footer from "./.GlobalComponents/Footer"
import "./index.css"

export default function BackEndDev() {

    return (
        <div id="BackEndDev">
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


export const Head = () => <title>Back End Dev | EduCo</title>