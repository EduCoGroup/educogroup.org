import React from "react";
import Header from "../.GlobalComponents/Header";
import Hero from "../.components/Hero";
import Courses from "../.components/Courses";
import Paths from "../.components/Paths";
import Events from "../.components/Events";
import Contact from "../.components/Contact";
import Footer from "../.GlobalComponents/Footer";
import "./index.css";

export default function Index() {

    return (
        <div id="Home">
            <Header />
            <Hero />
            <Courses />
            <Paths />
            <Events />
            <Contact />
            <Footer />
        </div>
    )
}


export const Head = () => <title>Home | EduCo</title>