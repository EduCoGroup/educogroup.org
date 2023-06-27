import React from "react";
import { Link } from "gatsby";
import HeaderLogo from '../../images/HeaderLogo.png';

export default function Header() {

    return (
        <div id="Header">
            <div id="HeaderContainer">
                <div id="HeaderLogoContainer">
                    <Link href='/'><img id='HeaderLogo' src={HeaderLogo}/></Link>
                </div>
                <div id="HeaderMenuContainer">
                    <ul id='HeaderMenu'>
                        <li id='MenuItem'><Link id='MenuLink' href='/BackEndDev'>Back End Engineering Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/FrontEndDev'>Front End Engineering Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/FullStackDev'>Full Stack Engineering Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/EarlyEngineering'>Early Engineering Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/DataEngineering'>Data Engineering Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/SecurityEngineering'>Security Engineering Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/CloudEngineering'>Clud Engineering Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/DataAnalyst'>Data/Business Analyst Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/DataScience'>Data Science Class</Link></li>
                        <li id='MenuItem'><Link id='MenuLink' href='/CyberSecurity'>Cyber Security Class</Link></li>
                    </ul>
                </div>
                <div id='HeaderButtonContainer'>
                    <Link id='Link' href='/educonetwork'><button id='HeaderButton'>Access Educo Network</button></Link>
                </div>
            </div>
        <style>
        {`
            #Header {
                
            
            }

            #HeaderContainer {

            }

            #HeaderLogoContainer {

            }

            #HeaderLogo {
                width: 100px; 
                height: 100px;
                background-color: black;
            }

            #HeaderMenuContainer {

            }

            #HeaderMenu {

            }

            #MenuItem {

            }

            #MenuLink {

            }

            #HeaderButtonContainer {

            }

            #HeaderButton {

            }

            #Link {

            }

        `}
        </style>
        </div>
    )
}
