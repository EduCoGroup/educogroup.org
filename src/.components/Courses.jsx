import React from "react";
import rightArrow from "../images/rightArrow.png";

export default function Courses() {

    return (
        <div id="Courses">
            <div id="CoursesContainer">
                <div id="CoursesHeaderContainer">
                    <p id="CoursesHeader">Start Learning</p>
                </div>
                <div id="CoursesListContainer">
                    <div id="CoursesListGrid">
                        <div id="Course1">
                            <div id="Course1HeaderContainer">
                                <p id="Course1Header">Data Analytics Immersive</p>
                            </div>
                            <div id="Course1ImageContainer">
                                <img id="Course1Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/data-analytics-immersive-0092418c7900c0284b6b712d551bb666.svg"/>
                            </div>
                            <div id="Course1DescriptorContainer">
                                <p id="Course1Descriptor">ONLINE | FULL-TIME</p>
                            </div>
                            <div id="Course1DescriptionContainer">
                                <p id="Course1Description">Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more.</p>
                            </div>
                            <div id="Course1ArrowContainer">
                                <img id="Course6Arrow" src={rightArrow}/>
                            </div>
                        </div>
                        <div id="Course2">
                            <div id="Course2HeaderContainer">
                                <p id="Course2Header">Software Eng. Immersive</p>
                            </div>
                            <div id="Course2ImageContainer">
                                <img id="Course2Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/software-engineering-immersive-ae17d092243b60c400ea8cfc533a06f3.svg"/>
                            </div>
                            <div id="Course2DescriptorContainer">
                                <p id="Course2Descriptor">ONLINE | FULL-TIME</p>
                            </div>
                            <div id="Course2DescriptionContainer">
                                <p id="Course2Description">Break into a high-growth, high-pay career. Dive into computer science, get fluent in key frameworks and stacks, build rich apps, and more.</p>
                            </div>
                            <div id="Course2ArrowContainer">
                                <img id="Course6Arrow" src={rightArrow}/>
                            </div>
                        </div>
                        <div id="Course3">
                            <div id="Course3HeaderContainer">
                                <p id="Course3Header">UX Design Immersive</p>
                            </div>
                            <div id="Course3ImageContainer">
                                <img id="Course3Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/user-experience-design-immersive-7410b73b63b7965496a60924be7ded2b.svg"/>
                            </div>
                            <div id="Course3DescriptorContainer">
                                <p id="Course3Descriptor">ONLINE | FULL-TIME</p>
                            </div>
                            <div id="Course3DescriptionContainer">
                                <p id="Course3Description">Launch a UX career with the research and design skills today's top companies require. Build a professional-grade portfolio that gets noticed.</p>
                            </div>
                            <div id="Course3ArrowContainer">
                                <img id="Course6Arrow" src={rightArrow}/>
                            </div>
                        </div>
                        <div id="Course4">
                            <div id="Course4HeaderContainer">
                                <p id="Course4Header">Data Science Immersive</p>
                            </div>
                            <div id="Course4ImageContainer">
                                <img id="Course4Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/data-science-immersive-d6e563ec994d0afa76ad4963927f4d6a.svg"/>
                            </div>
                            <div id="Course4DescriptorContainer">
                                <p id="Course4Descriptor">ONLINE | FULL-TIME</p>
                            </div>
                            <div id="Course4DescriptionContainer">
                                <p id="Course4Description">Master the basics of machine learning to forecast what's next: predict patterns from large datasets using Python.</p>
                            </div>
                            <div id="Course4ArrowContainer">
                                <img id="Course6Arrow" src={rightArrow}/>
                            </div>
                        </div>
                        <div id="Course5">
                            <div id="Course5HeaderContainer">
                                <p id="Course5Header">Front-End Web Development</p>
                            </div>
                            <div id="Course5ImageContainer">
                                <img id="Course5Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/front-end-web-development-b81e179cd491b8cff125bf507b1e04cb.svg"/>
                            </div>
                            <div id="Course5DescriptorContainer">
                                <p id="Course5Descriptor">ONLINE | PART-TIME</p>
                            </div>
                            <div id="Course5DescriptionContainer">
                                <p id="Course5Description">Use HTML5, CSS3, JavaScript, jQuery, GitHub and Sublime Text to program and lay out a fully responsive, interactive website.</p>
                            </div>
                            <div id="Course5ArrowContainer">
                                <img id="Course6Arrow" src={rightArrow}/>
                            </div>
                        </div>
                        <div id="Course6">
                            <div id="Course6HeaderContainer">
                                <p id="Course6Header">Product Management</p>
                            </div>
                            <div id="Course6ImageContainer">
                                <img id="Course6Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/product-management-eb2b566333f9a6de58e5856d57ba4998.svg"/>
                            </div>
                            <div id="Course6DescriptorContainer">
                                <p id="Course6Descriptor">ONLINE | PART-TIME</p>
                            </div>
                            <div id="Course6DescriptionContainer">
                                <p id="Course6Description">Guide a product through its lifecycle via lean methodologies that yield viable, market-ready products that anticipate user needs.</p>
                            </div>
                            <div id="Course6ArrowContainer">
                                <img id="Course6Arrow" src={rightArrow}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="CoursesButtonContainer">
                    <button id="CoursesButton">Browse Courses</button>
                </div>
            </div>
        <style>
        {`
            #Courses {
                display: flex;
                position: relative;
                width: 100vw;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 5%;
                background-color: #f5f5f5;
            }
            #CoursesContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #CoursesHeaderContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 10%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #CoursesHeader {
                display: flex;
                position: relative;
                font-size: 2em;
            }
            #CoursesListContainer {
                display: flex;
                position: relative;
                width: 1200px;
                height: 700px;
                margin-bottom: 10%;
                flex-direction: column;
            }
            #CoursesListGrid {
                display: grid;
                position: relative;
                grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                grid-gap: 10px;
            }
            #Course1, #Course2, #Course3, #Course4, #Course5, #Course6 {
                display: flex;
                position: relative;
                width: 380px;
                height: 400px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: white;
                border: 1px solid black;
            }
            #Course1HeaderContainer, #Course2HeaderContainer, #Course3HeaderContainer, #Course4HeaderContainer, #Course5HeaderContainer, #Course6HeaderContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 20%;
                justify-content: center;
                align-items: center;
            }
            #Course1Header, #Course2Header, #Course3Header, #Course4Header, #Course5Header, #Course6Header {
                display: flex;
                position: relative;
                font-size: 1.5em;
            }
            #Course1ImageContainer, #Course2ImageContainer, #Course3ImageContainer, #Course4ImageContainer, #Course5ImageContainer, #Course6ImageContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 25%;
                object-fit: contain;
                justify-content: center;
            }
            #Course1Image, #Course2Image, #Course3Image, #Course4Image, #Course5Image, #Course6Image {
            
            }
            #Course1DescriptorContainer, #Course2DescriptorContainer, #Course3DescriptorContainer, #Course4DescriptorContainer, #Course5DescriptorContainer, #Course6DescriptorContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 15%;
                margin-top: 5%;
                justify-content: center;
                align-items: center;
            }
            #Course1Descriptor, #Course2Descriptor, #Course3Descriptor, #Course4Descriptor, #Course5Descriptor, #Course6Descriptor {
                display: flex;
                position: relative;
                font-size: 1.3em;
                color: grey;
            }
            #Course1DescriptionContainer, #Course2DescriptionContainer, #Course3DescriptionContainer, #Course4DescriptionContainer, #Course5DescriptionContainer, #Course6DescriptionContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 35%;
                justify-content: center;
                align-items: center;
            }
            #Course1Description, #Course2Description, #Course3Description, #Course4Description, #Course5Description, #Course6Description {
                display: flex;
                position: relative;
                font-size: 1em;
                text-align: center;
            }
            #Course1ArrowContainer, #Course2ArrowContainer, #Course3ArrowContainer, #Course4ArrowContainer, #Course5ArrowContainer, #Course6ArrowContainer {
                display: flex;
                position: absolute;
                width: 40px;
                height: 40px;
                right: 4%;
                justify-content: center;
                align-items: center;
            }
            #Course1Arrow, #Course2Arrow, #Course3Arrow, #Course4Arrow, #Course5Arrow, #Course6Arrow {
                display: flex;  
                position: relative;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
            #CoursesButtonContainer {
                display: flex;
                position: relative;
                width: 190px;
                height: 70px;
                margin-bottom: 5%;
                justify-content: center;
                align-items: center;
            }
            #CoursesButton {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                font-size: 1.2em;
                cursor: pointer;
                font-weight: bold;
                color: white;
                background-color: red;
            }
            @media (max-width: 1200px) {
                #CoursesListContainer {
                    width: 100%;
                    height: 100%;
                }
                #Course1, #Course2, #Course3, #Course4, #Course5, #Course6 {
                    width: 100%;
                }
            }
            @media (max-width: 890px) {
                #Courses {
                    padding-top: 15%;
                }
                #CoursesListGrid {
                    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
                    grid-gap: 5px;
                }
            }
        `}
        </style>
        </div>
    )
}
