import React from "react";

export default function Paths() {

    return (
        <div id="Paths">
            <div id="PathsContainer">
                <div id="PathsHeaderContainer">
                    <p id="PathsHeader">Choose Your Path</p>
                </div>
                <div id="PathsOptionsGrid">
                    <div id="PathsOptionsContainer">
                        <div id="PathsOption1Container">
                            <div id="Option1ImageContainer">
                                <img id="Option1Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/full-time-356ff4246bbe4d674e93c1f1a654b662.webp" />
                            </div>
                            <div id="Option1HeaderContainer">
                                <p id="Option1Header">Option 1</p>
                            </div>
                            <div id="Option1DescriptionContainer">
                                <p id="Option1Description">Lorem ipsum</p>
                            </div>
                            <div id="Option1ButtonContainer">
                                <button id="Option1Button">View Courses</button>
                            </div>
                        </div>
                        <div id="PathsOption2Container">
                            <div id="Option2ImageContainer">
                                <img id="Option2Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/part-time-da10dd33c0952eae174e5fd32131bfd9.webp" />
                            </div>
                            <div id="Option2HeaderContainer">
                                <p id="Option2Header">Option 1</p>
                            </div>
                            <div id="Option2DescriptionContainer">
                                <p id="Option2Description">Lorem ipsum</p>
                            </div>
                            <div id="Option2ButtonContainer">
                                <button id="Option2Button">View Courses</button>
                            </div>
                        </div>
                        <div id="PathsOption3Container">
                            <div id="Option3ImageContainer">
                                <img id="Option3Image" src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/online-4585ce434099cdd048c98a2c67ab3082.webp" />
                            </div>
                            <div id="Option3HeaderContainer">
                                <p id="Option3Header">Option 1</p>
                            </div>
                            <div id="Option3DescriptionContainer">
                                <p id="Option3Description">Lorem ipsum</p>
                            </div>
                            <div id="Option3ButtonContainer">
                                <button id="Option3Button">View Courses</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="FuturePlanContainer">
                <div id="FuturePlanHeaderContainer">
                    <p id="FuturePlanHeader">Fund Your Future</p>
                </div>
                <div id="FuturePlansContainer">
                    <div id="FuturePlan1Container">
                        <div id="Plan1ImageContainer">
                            <img id="Plan1Image" src="" />
                        </div>
                        <div id="Plan1HeaderContainer">
                            <p id="Plan1Header">Plan 1</p>
                        </div>
                        <div id="Plan1DescriptionContainer">
                            <p id="Plan1Description">Lorem ipsum</p>
                        </div>
                        <div id="Plan1ButtonContainer">
                            <button id="Plan1Button">View Courses</button>
                        </div>
                    </div>
                    <div id="FuturePlan2Container">
                        <div id="Plan2ImageContainer">
                            <img id="Plan2Image" src="" />
                        </div>
                        <div id="Plan2HeaderContainer">
                            <p id="Plan2Header">Plan 2</p>
                        </div>
                        <div id="Plan2DescriptionContainer">
                            <p id="Plan2Description">Lorem ipsum</p>
                        </div>
                        <div id="Plan2ButtonContainer">
                            <button id="Plan2Button">View Courses</button>
                        </div>
                    </div>
                    <div id="FuturePlan3Container">
                        <div id="Plan3ImageContainer">
                            <img id="Plan3Image" src="" />
                        </div>
                        <div id="Plan3HeaderContainer">
                            <p id="Plan3Header">Plan 3</p>
                        </div>
                        <div id="Plan3DescriptionContainer">
                            <p id="Plan3Description">Lorem ipsum</p>
                        </div>
                        <div id="Plan3ButtonContainer">
                            <button id="Plan3Button">View Courses</button>
                        </div>
                    </div>
                    <div id="FuturePlan4Container">
                        <div id="Plan4ImageContainer">
                            <img id="Plan4Image" src="" />
                        </div>
                        <div id="Plan4HeaderContainer">
                            <p id="Plan4Header">Plan 4</p>
                        </div>
                        <div id="Plan4DescriptionContainer">
                            <p id="Plan4Description">Lorem ipsum</p>
                        </div>
                        <div id="Plan4ButtonContainer">
                            <button id="Plan4Button">View Courses</button>
                        </div>
                    </div>
                </div>
            </div>
        <style>
        {`
            #Paths {
                display: flex;
                position: relative;
                width: 100vw;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #PathsContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 50%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #PathsHeaderContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 40%;
                justify-content: center;
                align-items: center;
            }
            #PathsHeader {
                font-size: 1.8em;
            }
            #PathsOptionsContainer {
                display: flex;
                position: relative;
                width: 1200px;
                height: 700px;
                margin-bottom: 10%;
                flex-direction: row;
            }
            #PathsOptionsGrid {
                display: grid;
                position: relative;
                grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                grid-gap: 10px;
            }
            #PathsOption1Container, #PathsOption2Container, #PathsOption3Container {
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
            #Option1ImageContainer, #Option2ImageContainer, #Option3ImageContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 35%;
                object-fit: contain;
                justify-content: center;
            }
            #Option1Image, #Option2Image, #Option3Image {

            }
            #Option1HeaderContainer, #Option2HeaderContainer, #Option3HeaderContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 20%;
                justify-content: center;
                align-items: center;
                border: 1px solid black;
            }
            #Option1Header, #Option2Header, #Option3Header {
                font-size: 1.5em;
            }
            #Option1DescriptionContainer, #Option2DescriptionContainer, #Option3DescriptionContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 35%;
                justify-content: center;
                align-items: center;
                border: 1px solid black;
            }
            #Option1Description, #Option2Description, #Option3Description {
                font-size: 1em;
                text-align: center;
            }
            #Option1ButtonContainer, #Option2ButtonContainer, #Option3ButtonContainer {
                display: flex;
                position: relative;
                width: 190px;
                height: 70px;
                margin-bottom: 5%;
                justify-content: center;
                align-items: center;
            }
            #Option1Button, #Option2Button, #Option3Button {
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
            #FuturePlanContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 50%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #FuturePlanHeaderContainer {

            }
            #FuturePlanHeader {

            }
            #FuturePlansContainer {
                display: flex;
                position: relative;
                flex-direction: row;
            }
            #FuturePlan1Container, #FuturePlan2Container, #FuturePlan3Container, #FuturePlan4Container {

            }
            #Plan1ImageContainer, #Plan2ImageContainer, #Plan3ImageContainer, #Plan4ImageContainer {

            }
            #Plan1Image, #Plan2Image, #Plan3Image, #Plan4Image {

            }
            #Plan1HeaderContainer, #Plan2HeaderContainer, #Plan3HeaderContainer, #Plan4HeaderContainer {

            }
            #Plan1Header, #Plan2Header, #Plan3Header, #Plan4Header {

            }
            #Plan1DescriptionContainer, #Plan2DescriptionContainer, #Plan3DescriptionContainer, #Plan4DescriptionContainer {

            }
            #Plan1Description, #Plan2Description, #Plan3Description, #Plan4Description {

            }
            #Plan1ButtonContainer, #Plan2ButtonContainer, #Plan3ButtonContainer, #Plan4ButtonContainer {

            }
            #Plan1Button, #Plan2Button, #Plan3Button, #Plan4Button {

            }
            @media (max-width: 1200px) {
                #PathsOptionsContainer {
                    width: 100%;
                    height: 100%;
                }
                #PathsOption1Container, #PathsOption2Container, #PathsOption3Container {
                    width: 100%;
                }
            }
            @media (max-width: 890px) {
                #PathsOptionsContainer {
                    flex-direction: column;
                }
                #PathsOptionsGrid {
                    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
                }
                #PathsOption1Container, #PathsOption2Container {
                    margin-bottom: 5%;
                }
            }
        `}
        </style>
        </div>
    )
}
