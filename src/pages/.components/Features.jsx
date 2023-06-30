import React from "react";

export default function Features() {

    return (
        <div id="Features">
            <div id="FeaturesContainer">
                <div id="ChangeContainer">
                    <div id="ChangeHeaderContainer">
                        <p id="ChangeHeader">Make a Change</p>
                    </div>
                    <a id="ChangeButton" target='blank' href='https://calendly.com/educomeet/educopathdiscoverycall?month=2023-06'>Start Today</a>
                </div>
                <div id="CompaniesContainer">
                    <div id="CompaniesTextContainer">
                        <p id="CompaniesHeader">Top Companies Love Hiring Our Candidates</p>
                    </div>
                    <div id="CompaniesLogoContainer">
                        <img id="CompaniesLogo" src="https://images.squarespace-cdn.com/content/v1/61e9dea61f8c8266f9aac812/80633ecb-7150-4aa6-826f-0c2d71de9228/RB_Standard_Logo_cmyk_2017.png"/>
                        <img id="CompaniesLogo" src="https://images.squarespace-cdn.com/content/v1/61e9dea61f8c8266f9aac812/8bbcefe8-a9b0-4b98-99c4-ca77e2361f32/JP-Morgan-Chase-Logo.png?format=750w"/>
                        <img id="CompaniesLogo" src="https://images.squarespace-cdn.com/content/v1/61e9dea61f8c8266f9aac812/dfb99a98-04c7-4ee7-9b33-3e6f40a23135/5842f0a9a6515b1e0ad75b18.png?format=1000w"/>
                        <img id="CompaniesLogo" src="https://images.squarespace-cdn.com/content/v1/61e9dea61f8c8266f9aac812/3e529cae-883f-4e21-97bc-9526c6ce6e56/Lyft-Logo.wine.png?format=750w"/>
                        <img id="CompaniesLogo" src="https://images.squarespace-cdn.com/content/v1/61e9dea61f8c8266f9aac812/64fde2ef-7026-4308-8163-d642fba58610/GlobalTech_Logo_EXTERNAL_greenblue.png?format=1000w"/>
                    </div>
                </div>
                <div id="OurFeaturesContainer">
                    <p id="OurFeaturesHeader">Our Features</p>
                    <div id="OurFeaturesTextContainer">
                        <div id="OurFeaturesTopContainer">
                            <div id="TopLeftTextContainer">
                                <p id="OurFeaturesTextHeader">Top Left Text Header</p>
                                <p id="OurFeaturesTextParagraph">Top Left Text Sub Header</p>
                            </div>
                            <div id="TopMidTextContainer">
                                <p id="OurFeaturesTextHeader">Top Left Text Header</p>
                                <p id="OurFeaturesTextParagraph">Top Left Text Sub Header</p>
                            </div>
                            <div id="TopRightTextContainer">
                                <p id="OurFeaturesTextHeader">Top Left Text Header</p>
                                <p id="OurFeaturesTextParagraph">Top Left Text Sub Header</p>
                            </div>
                        </div>
                        <div id="OurFeaturesBottomContainer">
                            <div id="BottomLeftTextContainer">
                                <p id="OurFeaturesTextHeader">Top Left Text Header</p>
                                <p id="OurFeaturesTextParagraph">Top Left Text Sub Header</p>                            
                            </div>
                            <div id="BottomMidTextContainer">
                                <p id="OurFeaturesTextHeader">Top Left Text Header</p>
                                <p id="OurFeaturesTextParagraph">Top Left Text Sub Header</p>
                            </div>
                            <div id="BottomRightTextContainer">
                                <p id="OurFeaturesTextHeader">Top Left Text Header</p>
                                <p id="OurFeaturesTextParagraph">Top Left Text Sub Header</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="InstructorsContainer">
                    <div id="InstructorsTextContainer">
                        <p id="InstructorsHeader">Instructors</p>
                        <p id="InstructorsParagraph">Instructors Sub Header</p>
                        <a id="InstructorsButton" target='blank' href='https://calendly.com/educomeet/educopathdiscoverycall?month=2023-06'>Meet an Advisor</a>
                    </div>
                    <div id="InstructorsImageContainer">
                        <img id="InstructorsImage" src=""/>
                    </div>
                </div>
            </div>
        <style>
        {`
            #Features {
                display: flex;
                position: relative;
                width: 100%;
                height: 300vh;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                user-select: none;
            }
            #FeaturesContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #ChangeContainer {
                display: flex;
                position: relative; 
                width: 100%;
                height: 15%;
                background-color: #A73E26;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #ChangeHeaderContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 45%;
                color: white;
                justify-content: center;
                align-items: center;
            }
            #ChangeHeader {
                display: flex;
                position: relative;
                font-size: 2.7em;
                color: white;
            }
            #ChangeButton {
                display: flex;
                position: relative;
                width: 250px;
                height: 20%;
                margin-top: 1%;
                color: black;
                font-family: 'Grotesk';
                font-size: 1.2em;
                justify-content: center;
                align-items: center;
                background-color: #F8C761;
                border-radius: 5px;
                text-decoration: underline;
                text-decoration-color: #F8C761;
                border: 1px solid black;
            }
            #CompaniesContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 30%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #CompaniesTextContainer {

            }
            #CompaniesHeader {

            }
            #CompaniesLogoContainer {

            }
            #CompaniesLogo {
                width: 150px;
            }
            #OurFeaturesContainer {

            }
            #OurFeaturesHeader {

            }
            #OurFeaturesTextContainer {

            }
            #OurFeaturesTopContainer {

            }
            #TopLeftTextContainer {

            }
            #TopMidTextContainer {

            }
            #TopRightTextContainer {

            }
            #OurFeaturesBottomContainer {

            }
            #BottomLeftTextContainer {

            }
            #BottomMidTextContainer {

            }
            #BottomRightTextContainer {

            }
            #InstructorsContainer {

            }
            #InstructorsTextContainer {

            }
            #InstructorsHeader {

            }
            #InstructorsParagraph {

            }
            #InstructorsButton {

            }
            #InstructorsImageContainer {

            }
            #InstructorsImage {

            }
        `}
        </style>
        </div>
    )
}
