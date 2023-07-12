import React from "react";
import Header from "../.GlobalComponents/Header"
import Hero from "../FullStackDev/Hero"
import Results from "../FullStackDev/Results"
import Class from "../FullStackDev/Class"
import Opportunity from "../FullStackDev/Opportunity"
import Contact from "../.GlobalComponents/Contact"
import Footer from "../.GlobalComponents/Footer"
import "./index.css"

export default function FullStackDev() {

    return (
        <div id="FullStackDev">
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


export const Head = () => <title>Full Stack Dev | EduCo</title>