import React from "react";
import { Link } from "gatsby";

export default function Courses() {

    const courses = [
        {
            header: "Back End Dev Course", button: "Access Free Training", buttonLink: "https://www.educogrouppaths.org/posts/31500319",
            image: "https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/software-engineering-immersive-ae17d092243b60c400ea8cfc533a06f3.svg",
            description: "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more."
        },
        {
            header: "Front End Dev Course", button: "Access Free Training", buttonLink: "https://www.educogrouppaths.org/posts/31503037",
            image: "https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/front-end-web-development-b81e179cd491b8cff125bf507b1e04cb.svg",
            description: "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more."
        },
        {
            header: "Full Stack Dev Course", button: "Access Free Training", buttonLink: "https://www.educogrouppaths.org/posts/31502733",
            image: "https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/software-engineering-immersive-ae17d092243b60c400ea8cfc533a06f3.svg",
            description: "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more."
        },
        {
            header: "Data Engineering Course", button: "Access Free Training", buttonLink: "https://www.educogrouppaths.org/posts/31503429",
            image: "https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/software-engineering-immersive-ae17d092243b60c400ea8cfc533a06f3.svg",
            description: "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more."
        },
        {
            header: "Cloud Computing Course", button: "Access Free Training", buttonLink: "https://www.educogrouppaths.org/posts/31495102",
            image: "https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/data-science-immersive-d6e563ec994d0afa76ad4963927f4d6a.svg",
            description: "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more."
        },
        {
            header: "Data Science Course", button: "Access Free Training", buttonLink: "https://www.educogrouppaths.org/posts/31503659",
            image: "https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/data-science-immersive-d6e563ec994d0afa76ad4963927f4d6a.svg",
            description: "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more."
        },
        {
            header: "Cyber Security Course", button: "Access Free Training", buttonLink: "https://www.educogrouppaths.org/posts/31504199",
            image: "https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/software-engineering-immersive-ae17d092243b60c400ea8cfc533a06f3.svg",
            description: "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more."
        },
        {
            header: "UI/UX Design Course", button: "Access Free Training", buttonLink: "https://www.educogrouppaths.org/posts/36325449",
            image: "https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/user-experience-design-immersive-7410b73b63b7965496a60924be7ded2b.svg",
            description: "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more."
        }
    ];

    return (
        <div id="Courses">
            <div id="CoursesContainer">
                <div id="CoursesHeaderContainer">
                    <p id="CoursesHeader">Start Learning</p>
                </div>
                <div id="CoursesListContainer">
                    <div id="CoursesListGrid">
                        {courses.map((course) => (
                        <div key={course.id}> 
                            <div id="Course">
                                <div id="CourseHeaderContainer">
                                    <p id="CourseHeader">{course.header}</p>
                                </div>
                                <div id="CourseImageContainer">
                                    <img id="CourseImage" src={course.image}/>
                                </div>
                                <div id="CourseDescriptionContainer">
                                    <p id="CourseDescription">{course.description}</p>
                                </div>
                                <div id="CourseButtonContainer">
                                    <Link id="CoursesButton" to={course.buttonLink} target="blank">{course.button}</Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div id="BrowseButtonContainer">
                    <Link id="BrowseButton" to="https://www.educogrouppaths.org/collections/41010" target="blank">Browse All Courses</Link>
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
                font-size: 2em;
            }
            #CoursesListContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                margin-bottom: 10%;
                flex-direction: column;
            }
            #CoursesListGrid {
                display: grid;
                width: 100%;
                height: 100%;
                position: relative;
                grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
                grid-gap: 10px;
            }
            #Course {
                display: flex;
                position: relative;
                width: 100%;
                height: 400px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: white;
                border: 1px solid black;
            }
            #CourseHeaderContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 20%;
                justify-content: center;
                align-items: center;
            }
            #CourseHeader {
                font-size: 1.5em;
            }
            #CourseImageContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 25%;
                object-fit: contain;
                justify-content: center;
            }
            #CourseImage {
            
            }
            #CourseDescriptionContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 35%;
                justify-content: center;
                align-items: center;
            }
            #CourseDescription {
                font-size: 1em;
                text-align: center;
            }
            #CourseButtonContainer {
                display: flex;
                position: relative;
                width: 170px;
                height: 50px;
                margin-bottom: 5%;
            }
            #CoursesButton {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                font-size: 0.9em;
                cursor: pointer;
                font-weight: bold;
                color: black;
                background-color: #F8C761;
                border: none;
                border-radius: 10px;
                text-decoration: none;
            }
            #BrowseButtonContainer {
                display: flex;
                position: relative;
                width: 200px;
                height: 70px;
                margin-bottom: 5%;
                justify-content: center;
                align-items: center;
            }
            #BrowseButton {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                font-size: 1.2em;
                cursor: pointer;
                font-weight: bold;
                color: black;
                background-color: #F8C761;
                border: none;
                border-radius: 10px;
                text-decoration: none;
            }
            @media (max-width: 1200px) {
                #CoursesListContainer {
                    width: 100%;
                    height: 100%;
                }
                #Course1, #Course2, #Course3, #Course4, #Course, #Course6 {
                    width: 100%;
                }
            }
            @media (max-width: 1000px) {
                #Courses {
                    padding-top: 20%;
                    padding-bottom: 5%;
                }
                #CoursesListGrid {
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    justify-content: center;
                }
                #Course {
                    height: 260px;
                }
                #CourseHeaderContainer {
                    margin-top: 2px;
                }
                #CourseHeader {
                    font-size: 1.25em;
                }
                #CourseDescription {
                    font-size: 0.8em;
                }

            }
        `}
        </style>
        </div>
    )
}
