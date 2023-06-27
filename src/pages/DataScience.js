import React from "react";
import Header from "./.GlobalComponents/Header"
import Hero from "./DataScience/Hero"
import Results from "./DataScience/Results"
import Class from "./DataScience/Class"
import Opportunity from "./DataScience/Opportunity"
import Contact from "./.GlobalComponents/Contact"
import Footer from "./.GlobalComponents/Footer"
import "./index.css"

export default function DataScience() {

    return (
        <div id="DataScience">
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


export const Head = () => <title>Data Science | EduCo</title>