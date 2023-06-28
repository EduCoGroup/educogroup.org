import React from "react";
import Header from "./.GlobalComponents/Header"
import Hero from "./.components/Hero"
import Features from "./.components/Features"
import Courses from "./.components/Courses"
import Results from "./.components/Results"
import Contact from "./.components/Contact"
import Footer from "./.GlobalComponents/Footer"
import "./index.css"

export default function Index() {

    return (
        <div id="Home">
            <Header />
            <Hero />
            <Features />
            <Courses />
            <Results />
            <Contact />
            <Footer />
        </div>
    )
}


export const Head = () => <title>Home | EduCo</title>