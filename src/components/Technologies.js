import { DiReact, DiJavascript1, DiCss3, DiHtml5, DiSass } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { TbCloud } from "react-icons/tb";
import {
    SiCsharp, SiDotnet, SiTypescript, SiRedux, SiAngular,
    SiTailwindcss, SiMicrosoftazure, SiPowershell,
    SiPowerautomate, SiPowerapps, SiMicrosoft, SiVisualstudiocode, 
    SiIntellijidea, SiVisualstudio,SiDocker
} from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
function Technologies() {
    return (
        <div className="grid-cols-6">
            <div className="text-center font-bold text-5xl bg-slate-900 pt-5 text-white justify-center">
                <h1>Langage de programmation et outils techniques</h1>
            </div>
            <div className="flex flex-row  bg-slate-900 pt-7 text-white justify-center items-center space-x-7">
                <div className="bg-red-400 rounded-full text-6xl transition ease-in-out delay-200  hover:scale-110 hover:bg-red-500 duration-300 hover:-translate-y-1">
                    <DiHtml5 />
                </div>
                <div className="bg-blue-400 rounded-full text-6xl transition ease-in-out delay-200  hover:scale-110 hover:bg-blue-500 duration-300 hover:-translate-y-1">
                    <DiCss3 />
                </div>
                <div className="bg-cyan-400 rounded-full text-6xl transition ease-in-out delay-200  hover:scale-110 hover:bg-cyan-600 duration-300 hover:-translate-y-1">
                    <SiTailwindcss />
                </div>
                <div className="bg-yellow-400 rounded-full text-6xl transition ease-in-out delay-150  hover:scale-110 hover:bg-yellow-500 duration-200 hover:-translate-y-1">
                    <DiJavascript1 />
                </div>
                <div className="bg-blue-800 rounded-full text-5xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <SiTypescript />
                </div>
                <div className="bg-sky-600 rounded-full text-6xl font-extrabold transition ease-in-out delay-150  hover:scale-110 hover:bg-cyan-500 duration-300 hover:-translate-y-1">
                    <DiReact />
                </div>
                <div className="bg-red-800 rounded-full text-white-700 text-6xl font-extrabold transition ease-in-out delay-150  hover:scale-110 hover:bg-red-500 duration-300 hover:-translate-y-1">
                    <SiAngular />
                </div>
                <div className="bg-fuchsia-600 rounded-full text-6xl font-extrabold transition ease-in-out delay-150  hover:scale-110 hover:bg-fuchsia-500 duration-300 hover:-translate-y-1">
                    <SiRedux />
                </div>

                <div className="bg-pink-400 rounded-full text-6xl transition ease-in-out delay-200  hover:scale-110 hover:bg-pink-500 duration-300 hover:-translate-y-1">
                    <DiSass />
                </div>
                <div className="bg-blue-800 rounded-full text-6xl transition ease-in-out delay-200  hover:scale-110 hover:bg-blue-700 duration-300 hover:-translate-y-2">
                    <SiDotnet />
                </div>
                <div className="bg-blue-800 rounded-full font-extrabold text-6xl transition ease-in-out delay-200  hover:scale-120 hover:bg-blue-700 duration-300 hover:-translate-y-2">
                    <SiCsharp />
                </div>
                <div className="bg-blue-400 rounded-full text-6xl transition ease-in-out delay-200  hover:scale-110 hover:bg-blue-500 duration-300 hover:-translate-y-1">
                    <FaJava />
                </div>
                <div className="bg-yellow-600 rounded-full text-6xl transition ease-in-out delay-200  hover:scale-110 hover:bg-blue-500 duration-300 hover:-translate-y-1">
                    <IoLogoPython />
                </div>
            </div>

            <div className="flex flex-row  bg-slate-900 pt-7 text-white justify-center items-center space-x-7">
                <div className="bg-blue-500 rounded-full text-7xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <SiMicrosoftazure />
                </div>
                <div className="bg-blue-500 rounded-full text-7xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <SiDocker />
                </div>
                <div className="bg-blue-500 rounded-full text-7xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <TbCloud />
                </div>
                <div className="bg-blue-500 rounded-full text-7xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <SiPowershell />
                </div>
                <div className="bg-blue-500 rounded-full text-7xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <SiPowerautomate />
                </div>
                <div className="bg-fuchsia-100 rounded-full text-7xl text-fuchsia-700 transition ease-in-out delay-150  hover:scale-110 hover:bg-fuchsia-500 duration-200 hover:-translate-y-1">
                    <SiPowerapps />
                </div>
                <div className="bg-blue-100 text-blue-700 rounded-full text-6xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <SiMicrosoft />
                </div>


            </div>

            <div className="flex flex-row  bg-slate-900 pt-7 text-white justify-center items-center space-x-7">
                <div className="bg-white-100 text-blue-600 rounded-full text-7xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <SiVisualstudiocode />
                </div>
                <div className="bg-white-500 text-fuchsia-700 rounded-full text-7xl transition ease-in-out delay-150  hover:scale-110 hover:bg-fuchsia-0 duration-200 hover:-translate-y-1">
                    <SiVisualstudio />
                </div>
                <div className="bg-black-500 text-white-700 rounded-full text-6xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-100 duration-200 hover:-translate-y-1">
                    <SiIntellijidea />
                </div>
            </div>
        </div>
    )
}

export default Technologies;