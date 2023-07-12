import React from "react";

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
                                <p id="Course1Header">Course 1</p>
                            </div>
                            <div id="Course1ImageContainer">
                                <img id="Course1Image" src="https://via.placeholder.com/150"/>
                            </div>
                            <div id="Course1DescriptorContainer">
                                <p id="Course1Descriptor">Lorem ipsum</p>
                            </div>
                            <div id="Course1DescriptionContainer">
                                <p id="Course1Description">Lorem ipsum</p>
                            </div>
                            <div id="Course1ArrowContainer">
                                <button id="Course1Arrow"></button>
                            </div>
                        </div>
                        <div id="Course2">
                            <div id="Course2HeaderContainer">
                                <p id="Course2Header">Course 1</p>
                            </div>
                            <div id="Course2ImageContainer">
                                <img id="Course2Image" src="https://via.placeholder.com/150"/>
                            </div>
                            <div id="Course2DescriptorContainer">
                                <p id="Course2Descriptor">Lorem ipsum</p>
                            </div>
                            <div id="Course2DescriptionContainer">
                                <p id="Course2Description">Lorem ipsum</p>
                            </div>
                            <div id="Course2ArrowContainer">
                                <button id="Course2Arrow"></button>
                            </div>
                        </div>
                        <div id="Course3">
                            <div id="Course3HeaderContainer">
                                <p id="Course3Header">Course 1</p>
                            </div>
                            <div id="Course3ImageContainer">
                                <img id="Course3Image" src="https://via.placeholder.com/150"/>
                            </div>
                            <div id="Course3DescriptorContainer">
                                <p id="Course3Descriptor">Lorem ipsum</p>
                            </div>
                            <div id="Course3DescriptionContainer">
                                <p id="Course3Description">Lorem ipsum</p>
                            </div>
                            <div id="Course3ArrowContainer">
                                <button id="Course3Arrow"></button>
                            </div>
                        </div>
                        <div id="Course4">
                            <div id="Course4HeaderContainer">
                                <p id="Course4Header">Course 1</p>
                            </div>
                            <div id="Course4ImageContainer">
                                <img id="Course4Image" src="https://via.placeholder.com/150"/>
                            </div>
                            <div id="Course4DescriptorContainer">
                                <p id="Course4Descriptor">Lorem ipsum</p>
                            </div>
                            <div id="Course4DescriptionContainer">
                                <p id="Course4Description">Lorem ipsum</p>
                            </div>
                            <div id="Course4ArrowContainer">
                                <button id="Course4Arrow"></button>
                            </div>
                        </div>
                        <div id="Course5">
                            <div id="Course5HeaderContainer">
                                <p id="Course5Header">Course 1</p>
                            </div>
                            <div id="Course5ImageContainer">
                                <img id="Course5Image" src="https://via.placeholder.com/150"/>
                            </div>
                            <div id="Course5DescriptorContainer">
                                <p id="Course5Descriptor">Lorem ipsum</p>
                            </div>
                            <div id="Course5DescriptionContainer">
                                <p id="Course5Description">Lorem ipsum</p>
                            </div>
                            <div id="Course5ArrowContainer">
                                <button id="Course5Arrow"></button>
                            </div>
                        </div>
                        <div id="Course6">
                            <div id="Course6HeaderContainer">
                                <p id="Course6Header">Course 1</p>
                            </div>
                            <div id="Course6ImageContainer">
                                <img id="Course6Image" src="https://via.placeholder.com/150"/>
                            </div>
                            <div id="Course6DescriptorContainer">
                                <p id="Course6Descriptor">Lorem ipsum</p>
                            </div>
                            <div id="Course6DescriptionContainer">
                                <p id="Course6Description">Lorem ipsum</p>
                            </div>
                            <div id="Course6ArrowContainer">
                                <button id="Course6Arrow"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <style>
        {`
            #Courses {
                display: flex;
                position: relative;
                width: 100vw;
                justify-content: center;
                padding-top: 3%;
            }
            #CoursesContainer {

            }
            #CoursesHeaderContainer {

            }
            #CoursesHeader {

            }
            #CoursesListContainer {
                display: flex;
                position: relative;
                width: 1200px;
                height: 700px;
                flex-direction: column;
            }
            #CoursesListGrid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                grid-gap: 10px;
            }
            #Course1, #Course2, #Course3, #Course4, #Course5, #Course6 {
                display: flex;
                position: relative;
                width: 380px;
                flex-direction: column;
                border: 1px solid black;
            }
            #Course1HeaderContainer, #Course2HeaderContainer, #Course3HeaderContainer, #Course4HeaderContainer, #Course5HeaderContainer, #Course6HeaderContainer {

            }
            #Course1Header, #Course2Header, #Course3Header, #Course4Header, #Course5Header, #Course6Header {

            }
            #Course1ImageContainer, #Course2ImageContainer, #Course3ImageContainer, #Course4ImageContainer, #Course5ImageContainer, #Course6ImageContainer {

            }
            @media (max-width: 1200px) {
                #CoursesListContainer {
                    width: 100%;
                    height: 100%;
                }
            }
        `}
        </style>
        </div>
    )
}
