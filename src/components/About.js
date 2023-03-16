import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import backImage from "../images/diallo.jpg";

import "../scss/writer.scss"
import TypeWriter from "typewriter-effect";
// const background =  "../images/diallo.jpg"
function About() {
    return (
        <div className="text-white justify-content-center text-center mx-auto mt-5 overflow-auto p-10">
            <div className="relative flex-shrink-0 bg-gradient-to-b
                from-cyan-500 rounded-full w-60 h-60 mx-auto py-4 justify-content-center items-center"
                style={{
                    backgroundImage: `url(${backImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}

            >
                {/* <img src='../images/diallo.jpg' alt="" className="visible"/>
                <div 
                >
                        tegsgg,,vkkkcfefeFCSFZAKL
                </div> */}

            </div>
            <h2 className="text-3xl font-extrabold mx-2 text- text-cyan-200 py-2 pt-4" >Hi, I'am Tidiane Diallo</h2>
            <div className=" capitalize font-extrabold pt-1 mx-12 mt-3 items-center flex-row text-3xl" >

                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Full Stack Developper")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Ingenieur de formation en Cryptographie ")
                            .pauseFor(2000)
                            .typeString("et sécurité informatique")
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </div>
            {/* <span className="txt-type" data-wait="3000" data-words='["Photographer", "Designer", "UI/UX Dev"]'></span> */}
            {/* <h3>Full stack Developer and Cryptography engenier</h3> */}

            <div className="items-center">
                <p className="text-md text-center py-5 leading-8 text-gray-300 text-xl ">
                    Je suis un développeur de logiciels Full Stack qualifié avec de l'expérience dans C#, .Net, Java,JavaScript, TypeScript et 
                    et une expertise dans des frameworks tels que React, Node.js, MongoDB et Angular.
                    J'apprends vite et je collabore étroitement avec les clients pour créer des solutions efficaces,
                    évolutives et conviviales qui résolvent des problèmes réels. Travaillons ensemble pour donner vie à vos idées!
                </p>
            </div>
            <div className="flex text-5xl bg-blue justify-center gap-10 py-3">
                <a href="https://github.com/TIDIALLO"><GoMarkGithub /></a>
                <a href="https://www.linkedin.com/in/tidiane-diallo-319662179/"><FaLinkedin /></a>
                <a href="https://twitter.com/Tidiane12246949"><FaTwitter /></a>
                
            </div>
        </div>
    )
}
export default About;