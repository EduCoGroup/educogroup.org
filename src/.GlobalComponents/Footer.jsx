import React, { useState } from "react";
import { Link } from "gatsby";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {

    const [newsEmail, setNewsEmail] = useState('');

    const updateNewsEmail = (e) => {
        setNewsEmail(e.target.value);
    }

    const submitEmail = () => {
        console.log(newsEmail);
    }

    return (
        <div id="Footer">
            <div id="FooterContainer">
                <div id="FooterTopContainer">
                    <div id="LeftContainer">
                        <div id="NewsletterContainer">
                            <p id="Newsletter">Become a member of our newsletter and recieve emails about job postings, course updates, etc.</p>
                            <div id="NewsletterInputContainer">
                                <input id="NewsletterInput" type="text" placeholder="Enter Email" onKeyUp={updateNewsEmail}></input>
                                <button id="NewsletterButton" onClick={submitEmail}>Subscribe</button>
                            </div>
                            <p id="EmailPrivacyNotice">By sharing your email, you acknowledge our Privacy Policy and Terms of Service.</p>
                        </div>
                    </div>
                    <div id="RightContainer">
                        <div id="ResourcesContainer">
                            <div id="ResourcesLeftContainer">
                                <div id='ResourceItems'><Link id='ResourceItemsButton' target="blank" to='https://www.educogrouppaths.org/about'>About</Link></div>
                                <div id='ResourceItems'><Link id='ResourceItemsButton' target="blank" to='https://www.educogroup.org/educoblog'>Blog</Link></div>
                                <div id='ResourceItems'><Link id='ResourceItemsButton' target="blank" to='https://www.educogroup.org/jobpostsubscription'>Job Posts</Link></div>
                                <div id='ResourceItems'><Link id='ResourceItemsButton' target="blank" to='https://calendly.com/educomeet/educopathdiscoverycall?month=2023-07'>Meet An Advisor</Link></div>
                            </div>
                            <div id="ResourcesRightContainer">
                                <div id="SocialIconsContainer">
                                    <Link id="SocialIcon" target="blank" to='https://www.linkedin.com/company/educo-education-group/?viewAsMember=true'><FaLinkedinIn/></Link>
                                    <Link id="SocialIcon" target="blank" to='https://www.instagram.com/educogrouponline'><AiOutlineInstagram/></Link>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div id="FooterBottomContainer">
                    <div id="BottomListContainer">
                        <div id='BottomListItem'>© 2023 EduCo Group. All Rights Reserved.</div>
                        <div id='BottomListItem'><Link id='BottomListItemButton' target="blank" to='https://www.educogroup.org/tuitionreimbursement'>Terms & Conditions</Link></div>
                        <div id='BottomListItem'><Link id='BottomListItemButton' target="blank" to='https://www.google.com/maps/dir//Educo+Group+Washington/@38.9984532,-77.0576701,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7b7dfa5b37ac3:0x63764d60d4bd8b44!2m2!1d-77.0413037!2d38.9207753?entry=ttu'>
                        2328 Champlain St NW APT 321, Washington, DC 20009</Link></div>
                    </div>
                </div>
            </div>
        <style>
        {`
            #Footer {
                display: flex;
                position: relative;
                width: 100%;
                height: 35vh;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-color: #171717;
                color: #A2A2A2;
            }
            #FooterContainer {
                display: flex;
                position: relative;
                width: 95%;
                height: 100%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #FooterTopContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 85%;
                justify-content: center;
                align-items: center;
                flex-direction: row;
            }
            #LeftContainer {
                display: flex;
                position: relative;
                width: 60%;
                height: 100%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #NewsletterContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: flex-start;
                flex-direction: column;
            }
            #Newsletter {
                font-size: 1.1rem;
            }
            #NewsletterInputContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 20%;
                justify-content: flex-start;
                align-items: center;
                flex-direction: row;
            }
            #NewsletterInput {
                display: flex;
                position: relative;
                width: 260px;
                height: 60px;
                justify-content: center;
                align-items: center;
                flex-direction: row;  
                border-radius: 5px;
                margin-right: 1rem; 
                padding-left: 1rem;
            }
            #NewsletterButton {
                display: flex;
                position: relative;
                width: 100px;
                height: 40px;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                border-radius: 5px;
                background-color: #F8C761;
                color: #171717;
                cursor: pointer;
            }
            #EmailPrivacyNotice {

            }
            #RightContainer {
                display: flex;
                position: relative;
                width: 35%;
                height: 100%;
                margin-left: 5%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #ResourcesContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
                flex-direction: row;
            }
            #ResourcesLeftContainer {
                display: flex;
                position: relative;
                width: 50%;
                height: 70%;
                justify-content: space-around;
                align-items: flex-start;
                flex-direction: column;
            }
            #ResourceItems {

            }
            #ResourceItemsButton {
                color: #A2A2A2;
                text-deceration: underline;
                text-decoration-color: transparent;
                font-size: 1.3rem;
            }
            #ResourcesRightContainer {
                display: flex;
                position: relative;
                width: 50%;
                height: 70%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }            
            #SocialIconsContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
                flex-direction: row;
            }
            #SocialIcon { 
                font-size: 2rem;
                color: white;
            }
            #FooterBottomContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 15%;
                justify-content: center;
                align-items: center;
            }
            #BottomListContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
                flex-direction: row;
            }
            #BottomListItem {
                color: white;
                text-deceration: underline;
                text-decoration-color: transparent;
                font-size: 1.3rem;
                text-align: center;
            }
            #BottomListItemButton {
                color: white;
                font-size: 1.2rem;
                text-align: center;
            }
            @media (max-width: 800px) {
                #Footer {
                    height: 70vh;
                }
                #FooterTopContainer {
                    width: 100%;
                    flex-direction: column;
                }
                #LeftContainer {
                    width: 100%;
                }
                #RightContainer {
                    width: 100%;
                }
            }
            @media (max-width: 600px) {
                #Footer {
                    height: 55vh;
                }
                #FooterContainer {
                    width: 90%;
                }
                #MissionStatement {
                    font-size: 1.2rem;
                }
                #Newsletter {
                    font-size: 1rem;
                }
                #NewsletterInput {
                    width: 200px;
                    height: 50px;
                }
                #NewsletterButton {
                    width: 90px;
                    height: 35px;
                }
                #EmailPrivacyNotice {
                    font-size: 0.8rem;
                }
                #RightContainer {
                    height: 60%;
                }
                #ResourceItemsButton {
                    font-size: 1rem;
                }
                #SocialIcon {
                    font-size: 1.5rem;
                }
                #BottomListContainer {
                    flex-direction: column;
                    margin-bottom: 15px;
                }
                #BottomListItem, #BottomListItemButton {
                    font-size: 0.8rem;
                }
            }
        `}
        </style>
        </div>
    )
}
