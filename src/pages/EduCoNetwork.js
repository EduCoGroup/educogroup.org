import React from "react";
import Header from "./.GlobalComponents/Header"
import Hero from "./EduCoNetwork/Hero"
import Access from "./EduCoNetwork/Access"
import Footer from "./EduCoNetwork/Footer"

export default function Index() {

    return (
        <div id="Home">
            <Header />
            <Hero />
            <Access />
            <Footer />
        </div>
    )
}


export const Head = () => <title>Access EduCoNetwork | EduCo</title>