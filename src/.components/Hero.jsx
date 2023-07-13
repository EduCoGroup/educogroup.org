import React from "react";
import { Link } from "gatsby";

export default function Hero() {

    const backgroundImg = 'https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/hero-96e8680a0a0fbd88fdc3893e39fbb464.webp'

    return (
        <div id="Hero">
            <div id="HeroContainer">
                <img id='HeroImage' src={backgroundImg}/>
                <div id='HeroTextContainer'>
                    <p id='HeroHeader'>We help professionals meet their career goals</p>
                    <p id='HeroSubHeader'>Enhance Your Skills</p>
                </div>
                <div id='BrowseCoursesContainer'>
                    <div id="BrowseCourses">
                        <div id="BroswseCoursesTextContainer">
                            <div id="Top"><p id="BrowseCoursesHeader">Browse Courses</p></div>
                            <div id="Bottom"><p id="BrowseCoursesParagraph">Explore our courses and find the right one for you.</p></div>
                        </div>
                        <Link id="BrowseCoursesButton" to='/courses'>Broswe Courses</Link>  
                    </div>
                    <div id="BrowseHealth">
                        <div id="BroswseHealthTextContainer">
                            <div id="Top"><p id="BrowseHealthHeader">Browse Health</p></div>
                            <div id="Bottom"><p id="BrowseHealthParagraph">Explore our Health and find the right one for you.</p></div>
                        </div>
                        <Link id="BrowseHealthButton" to='/Health'>Broswe Health</Link>  
                    </div>
                </div>
            </div>
        <style>
        {`
            #Hero {
                display: flex;
                position: relative;
                width: 100%;
                height: 60vh;
                margin-top: 55px;
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
            #HeroHeader, #HeroSubHeader {
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
            #BrowseCoursesContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 50%;
                gap: 5%;
                justify-content: center;
                align-items: space-around;
            }
            #BrowseCourses, #BrowseHealth {
                display: flex;
                position: relative;
                width: 40%;
                height: 100%;
                bottom: -10%;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                padding-left: 3%;
                background-color: white;
                z-index: 3;
                border: 1px solid black;
            }
            #BroswseCoursesTextContainer, #BroswseHealthTextContainer {
                display: flex;
                position: relative;
                width: 70%;
                height: 50%;
                margin-top: -1%;
                margin-bottom: 1%;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
            }
            #Top, #Bottom {
                display: flex;
                position: relative;
                height: 50%;
                margin-top: -4%;
            }
            #Top {
                margin-top: -7%;
            }
            #BrowseCoursesHeader, #BrowseHealthHeader {
                font-size: 25px;
            }
            #BrowseCoursesParagraph, #BrowseHealthParagraph {
                font-size: 20px;
                font-family: 'RalewayMedium';
            }
            #BrowseCoursesButton, #BrowseHealthButton {
                display: flex;
                position: relative;
                width: 200px;
                height: 60px;
                background-color: red;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                color: white;
                border-radius: 5px;
                text-decoration: underline;
                text-decoration-color: red;
                cursor: pointer;
            }
            @media (max-width: 980px) {
                #HeroHeader {
                    margin-top: -5%;
                    margin-bottom: 10%;
                }
            }
            @media (max-width: 890px) {
                #HeroHeader {
                    font-size: 30px;
                    margin-bottom: 15%;
                }
                #HeroSubHeader {
                    font-size: 25px;
                }
                #BrowseCoursesContainer {
                    flex-direction: column;
                    align-items: center;
                }
                #BrowseCourses, #BrowseHealth {
                    width: 80%;
                }
                #BrowseCoursesParagraph, #BrowseHealthParagraph {
                    font-size: 15px;
                }
                #BrowseCoursesButton, #BrowseHealthButton {
                    width: 140px;
                    height: 40px;
                    font-size: 15px;
                }
                #Top, #Bottom {
                    margin-bottom: 5%;
                }
            }
        `}
        </style>
        </div>
    )
}
