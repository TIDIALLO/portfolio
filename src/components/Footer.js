// import Link from "./Link";
import { GoMarkGithub } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
 
    return (
        <footer className="p-8 mt-12 bg-slate-800 tranparent text-white text-center">
            {/* {rendereLinks} */}
            <div className="flex text-3xl  justify-center gap-10 py-3">
                <div className="bg-blue-800 rounded-full text-6xl transition ease-in-out delay-200  hover:scale-110 hover:bg-black duration-300 hover:-translate-y-1">
                    <a className="hover:bg-blue-900 bg-blue-700" href="https://github.com/TIDIALLO"><GoMarkGithub /></a>
                </div>
                <div className="bg-blue-700 rounded-full text-6xl transition ease-in-out delay-150  hover:scale-110 hover:bg-blue-900 duration-200 hover:-translate-y-1">
                    <a href="https://www.linkedin.com/in/tidiane-diallo-319662179/"><FaLinkedin /></a>
                </div>
                <div className="bg-blue-800 rounded-full text-6xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white-500 duration-200 hover:-translate-y-1">
                    <a href="https://twitter.com/Tidiane12246949"><FaTwitter /></a>
                </div>
                <div className="bg-red-100 text-red-600 rounded-full text-6xl transition ease-in-out delay-150  hover:scale-110 hover:bg-white duration-200 hover:-translate-y-1">
                    <a href="/contact"><FiMail /></a>
                </div>
            </div>

            <p className='copyright'>
                copyright &copy; Tidiane Diallo
                <span className="capitalize">{new Date().getFullYear()}</span>. all rights reserved
            </p>
        </footer>
    )
}

export default Footer;