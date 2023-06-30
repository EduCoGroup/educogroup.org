import React from "react";
import { Link } from "gatsby";

export default function Hero() {

    const backgroundImg = 'https://images.squarespace-cdn.com/content/v1/61e9dea61f8c8266f9aac812/0fd12780-776e-43c6-8de1-1fd8653a7232/shutterstock_1689338029.jpg?format=2500w'

    return (
        <div id="Hero">
            <div id="HeroContainer">
                <img id='HeroImage' src={backgroundImg}/>
                <div id='InvisibleMarginOOOoOOooO'></div>
                <div id='HeroTextContainer'>
                    <p id='HeroHeader'>We help professionals meet their career goals</p>
                    <p id='HeroSubHeader'>Enhance Your Skills</p>
                    <p id='HeroSubText'>We’ll Show You How</p>
                    <Link id='HeroButton'>Meet an Advisor</Link>
                </div>
            </div>
        <style>
        {`
            #Hero {
                display: flex;
                position: relative;
                width: 100%;
                height: 100vh;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                user-select: none;
            }
            #HeroContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;   
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #HeroImage {
                position: absolute;
                width: 100%;
                height: 100%;
                filter: brightness(0.4);
                object-fit: cover;
                overflow: hidden;
            }
            #InvisibleMarginOOOoOOooO {
                display: flex;
                position: relative;
                width: 100%;
                height: 50%;
            }
            #HeroTextContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 50%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            #HeroHeader, #HeroSubHeader, #HeroSubText, #HeroButton {
                display: flex;
                position: relative;
                width: 90%;
                height: 5%;
                justify-content: center;
                color: white;
                font-size: 40px;
            }
            #HeroSubHeader {
                font-size: 35px;
            }
            #HeroSubText {
                font-size: 20px;
            }
            #HeroButton {
                display: flex;
                position: relative;
                width: 250px;
                height: 15%;
                margin-top: 1%;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                color: black;
                background-color: #F8C761;
                border-radius: 5px;
                border: 1px solid black;
                font-family: 'Grotesk';
                cursor: pointer;
            }
            #HeroButton:hover {
                opacity: 0.8;
            }
            @media (max-width: 980px) {
                #HeroHeader {
                    margin-top: -5%;
                    margin-bottom: 10%;
                }
            }
            @media (max-width: 550px) {
                #HeroHeader {
                    font-size: 35px;
                    margin-top: -10%;
                    margin-bottom: 25%;
                }
                #HeroSubHeader {
                    font-size: 30px;
                }
                #HeroSubText {
                    font-size: 15px;
                }
            }
        `}
        </style>
        </div>
    )
}
