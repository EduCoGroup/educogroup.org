import React, {useState, useEffect} from "react";
import { Link } from "gatsby";
import HeaderLogo from '../images/HeaderLogo.png';
import {FaBars} from 'react-icons/fa';
import {GrFormClose} from 'react-icons/gr';

export default function Header() {

    const [menu, setMenu] = useState(false); 
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showMobile, setShowMobile] = useState(false);
    const [close, setClose] = useState(false);

    const openMenu = () => {
        setMenu(true);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
        setClose(!close);
    }
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1245) {
          setShowMobile(true);
        } else {
          setShowMobile(false);
        }
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <div id="Header">
            <div id="HeaderContainer">
                <div id="HeaderLogoContainer">
                    <Link to='/'><img id='HeaderLogo' src={HeaderLogo}/></Link>
                </div>
                {showMobile ? (
                    <div id="MobileMenuButtonContainer">
                        {close ? (
                        <GrFormClose id='MobileMenuButtonX' onClick={toggleMobileMenu}/> 
                        ) : (
                        <FaBars id='MobileMenuButton' onClick={toggleMobileMenu}/>)
                        }
                        <div id="MobileMenuContainer" style={{ display: mobileMenu ? "flex" : "none" }}>
                            <div id='MobileScreenContainer'>
                                <div id="MobileHeaderMenuContainer">
                                    <div id='MobileClassesTextContainer'>
                                        <p id='MobileClassesText'>Classes</p>
                                    </div>
                                    <ul id='MobileHeaderMenu'>
                                        <li id='MobileMenuItem'><Link id='MobileMenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31500319'>Back End Engineering Class</Link></li>
                                        <li id='MobileMenuItem'><Link id='MobileMenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31503037'>Front End Engineering Class</Link></li>
                                        <li id='MobileMenuItem'><Link id='MobileMenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31502733'>Full Stack Engineering Class</Link></li>
                                        <li id='MobileMenuItem'><Link id='MobileMenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31503429'>Data Engineering Class</Link></li>
                                        <li id='MobileMenuItem'><Link id='MobileMenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31495102'>Cloud Engineering Class</Link></li>
                                        <li id='MobileMenuItem'><Link id='MobileMenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31503659'>Data Science Class</Link></li>
                                        <li id='MobileMenuItem'><Link id='MobileMenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31504199'>Cyber Security Class</Link></li>
                                        <li id='MobileMenuItem'><Link id='MobileMenuLink' target="blank" to='https://www.educogrouppaths.org/posts/36325449'>UI/UX Design Class</Link></li>
                                    </ul>
                                </div>
                                <div id='MobileNetworkButtonContainer'>
                                    <Link id='MobileNetworkButton' to='https://www.educogrouppaths.org/spaces/9309834/feed' target="blank">Access Educo Network</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div id='HeaderButtonContainer'>
                        <div id='HeaderButton' onMouseOver={openMenu} onMouseOut={closeMenu}>Classes
                            <div id="HeaderMenuContainer" style={{ display: menu ? "flex" : "none" }}>
                                <ul id='HeaderMenu'>
                                    <li id='MenuItem'><Link id='MenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31500319'>Back End Engineering Class</Link></li>
                                        <li id='MenuItem'><Link id='MenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31503037'>Front End Engineering Class</Link></li>
                                        <li id='MenuItem'><Link id='MenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31502733'>Full Stack Engineering Class</Link></li>
                                        <li id='MenuItem'><Link id='MenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31503429'>Data Engineering Class</Link></li>
                                        <li id='MenuItem'><Link id='MenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31495102'>Cloud Engineering Class</Link></li>
                                        <li id='MenuItem'><Link id='MenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31503659'>Data Science Class</Link></li>
                                        <li id='MenuItem'><Link id='MenuLink' target="blank" to='https://www.educogrouppaths.org/posts/31504199'>Cyber Security Class</Link></li>
                                        <li id='MenuItem'><Link id='MenuLink' target="blank" to='https://www.educogrouppaths.org/posts/36325449'>UI/UX Design Class</Link></li>
                                </ul>
                            </div>
                        </div>
                        <Link id='NetworkButton' to='https://www.educogrouppaths.org/spaces/9309834/feed' target="blank">Access Educo Network</Link>
                    </div>
                    )}
            </div>
        <style>
        {`
            #Header {
                display: flex;
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 55px;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: black;
                animation: rollout 0.3s ease-in-out;
                user-select: none;
                z-index: 4;
            }

            #HeaderContainer {
                display: flex;
                position: relative;
                width: 95%;
                height: 100%;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            #HeaderLogoContainer {
                display: flex;
                position: relative;
                height: 99%;
            }

            #HeaderLogo {
                display: flex;
                position: relative;
                width: 100%; 
                height: 100%;
            }

            #MobileMenuButtonContainer {
                display: flex;
                position: relative;
            }

            #MobileMenuButtonX {
                display: flex;
                position: fixed;
                top: 15px;
                right: 15px;
                color: black;
                font-size: 70px;
                z-index: 3;
                animation: rollin 0.7s ease-in-out;
                cursor: pointer;
            }

            #MobileMenuButton {
                display: flex;
                position: relative;
                color: white;
                font-size: 35px;
                cursor: pointer;
                z-index: 3;
            }

            #MobileMenuButton:hover, MobileMenuButtonX:hover {
                opacity: 0.5;
            }

            #MobileMenuContainer {
                display: flex;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                width: 100vw;
                height: 100vh;
                flex-direction: column;
                background-color: white;
                animation: rollin 0.3s ease-in-out;
            }

            #MobileScreenContainer {
                display: flex;
                position: relative;
                width: 99%;
                height: 99.5%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            #MobileHeaderMenuContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 65%;
                flex-direction: column;
                justify-content: center;
                margin-top: 15%;
                margin-bottom: 10%;
            }

            #MobileClassesTextContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 15%;
                justify-content: center;
                align-items: center;
            }

            #MobileClassesText {
                display: flex;
                position: relative;
                justify-content: center;
                font-size: 50px;
            }

            #MobileHeaderMenu {
                display: flex;
                position: relative;
                width: 80%;
                height: 100%;
                flex-direction: column;
                list-style: none;
            }

            #MobileMenuItem {
                display: flex;
                position: relative;
                width: 100%;
                height: 15%;
                align-items: center;
                font-size: 20px;
                padding-left: 2%;
            }

            #MobileMenuLink {
                text-decoration: none;
                color: black;
            } 

            #MobileMenuLink:hover {
                opacity: 0.5;
            }

            #MobileNetworkButtonContainer {
                display: flex;
                position: relative;
                bottom: 0;
                width: 100%;
                height: 8%;
                justify-content: center;
                align-items: center;
            }
            
            #MobileNetworkButton {
                display: flex;
                position: relative;
                width: 300px;
                height: 100%;
                color: black;
                background-color: #F8C761;
                text-decoration: underline;
                text-decoration-color: #F8C761;
                font-size: 16px;
                justify-content: center;
                align-items: center;
                font-family: 'Grotesk';
                cursor: pointer;
                border: 1px solid black;
                border-radius: 5px;
            }

            @keyframes rollin {
                from {
                    opacity: 0;
                    transform: translateX(40px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            #HeaderButtonContainer {
                display: flex;
                position: relative;
                width: 40%;
                height: 100%;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            #HeaderButton, #NetworkButton {
                display: flex;
                position: relative;
                width: 60%;
                height: 100%;
                color: white;
                text-decoration: underline;
                text-decoration-color: black;
                font-size: 16px;
                justify-content: center;
                align-items: center;
                font-family: 'Grotesk';
                cursor: pointer;
                border: 1px solid black;
                border-radius: 5px;
            }

            #NetworkButton{
                width: 40%;
            }

            #Link {
                display: flex;
                position: relative;
                text-decoration: underline;
                text-decoration-color: #F8C761;
                border: none;
            }

            #HeaderMenuContainer {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 330px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: white;
                border: 1px solid black;
                border-radius: 5px;
                animation: rollout 0.3s ease-in-out;
                z-index: 3;
            }

            @keyframes rollout {
                from {
                  opacity: 0;
                  transform: translateY(-40px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

            #HeaderMenu {
                display: flex;
                position: relative;
                width: 90%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            #MenuItem {
                display: flex;
                position: relative;
                width: 100%;
                height: 10%;
                align-items: center;
            }

            #MenuLink {
                display: flex;
                position: relative;
                color: black;
                text-decoration: underline;
                text-decoration-color: white;
            }

            #MenuLink:hover {
                opacity: 0.5;
            }

        `}
        </style>
        </div>
    )
}
