import Link from "./Link";
import backImage from "../images/tiz.png";
// import "../styles/navbar.css"
import { useEffect, useState } from "react";
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(true);
  useEffect(() => {
    setIsNavExpanded(true);
  }, [isNavExpanded]);
    const links = [
        { label: 'About', path: '/' },
        { label: 'Work', path: '/work' },
        { label: 'Contact', path: '/contact' },
    ];
    const rendereLinks = links.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.path}
                className="ml-0 navigation-menu  hover:bg-slate-700 hover:text-blue-200 text-xl rounded-md "
                activeClassName="font-extrabold border-b-2 border-blue-500 "
            >
                {link.label}
            </Link>
        )
    });
    return (
// flex flex-row  mx-auto px-auto py-auto
// bg-slate-900 items-center 
// justify-end gap-x-10 p-8 
        <nav className="flex flex-row  mx-auto px-auto py-auto
        bg-slate-900 items-center nav-links
        justify-end border-b-2 border-slate-800  gap-x-8 p-8 ml-auto py-8 top-0 expanded">
            <img src={backImage} alt="tdd" className='w-9 h-9 rounded-full object-contain' />
            <div className="ml-0 mx-auto flex font-extrabold text-slate-400">
                <p className="text-xl  mx-auto">Tidiane Diallo | Full Stack Developer</p>
            </div>
            {/* <button
            // className="hamburger"
            onClick={() => {
                // setIsNavExpanded(isNavExpanded);
                return(
                    {rendereLinks}
                )
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
            >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
            </button> */}
            <ul 
            className=' flex nav-links justify-end gap-5 px-8 mx-2'
            // className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu" } 
            >
            {rendereLinks}
            </ul>
            
        </nav>
    )
}

export default Navbar;