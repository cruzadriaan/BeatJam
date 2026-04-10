import { Home } from './Home';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BeatJamLogo from '../images/beatjam-logo.png';
import { useState } from 'react';
import { Navlinks } from './Navlink.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-row justify-between items-center mx-5 my-0 
        max-[420px]:pt-1 max-[420px]:mx-3'>

            <div className="p-1">
                <Link to="/"><img src={BeatJamLogo} width="140"
                    className='max-[420px]:w-[100px] ' /></Link>
            </div>

            <div>
                <div>

                    <button className="sm:hidden flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen &&
                            <>
                                <span className='block  w-6 h-0.5 bg-gray-600'></span>
                                <span className='block  w-6 h-0.5 bg-gray-600'></span>
                                <span className='block  w-6 h-0.5 bg-gray-600'></span>
                            </>
                        }
                    </button>


                </div>

                <div className={`${isOpen ? "translate-x-0 opacity-100 shadow-xl " : "translate-x-full opacity-0 sm:flex sm:translate-x-5 sm:opacity-100 "} 
                text-gray-800 flex flex-col items-left fixed top-0 right-0 z-50 p-5 h-dvh gap-10
                sm:flex-row sm:relative sm:flex sm:top-0 sm:h-0  transition-all duration-500`}>

                    <div className='flex justify-end'>
                        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen &&
                                <div className='flex flex-col justify-center items-center sm:hidden border rounded-full p-1 px-3 font-semibold hover:text-white text-lg border-black hover:bg-gray-800'>
                                        X
                                </div>
                            }
                        </button>
                    </div>

                    {Navlinks.map((nav, index) => (
                        <div key={index} className='flex gap-3 w-[150px] p-1'>
                            {isOpen && <FontAwesomeIcon icon={nav.icon} className="text-gray-700 h-5 "  />}
                            <Link to={nav.src} className='pb-0.2 font-bold border-b-2 border-transparent transition-all hover:border-[#E59A18]' onClick={() => setIsOpen(false)}>{nav.name}</Link>
                        </div>
                    ))}


                    
                    {isOpen &&
                        <div className="flex flex-row gap-4 mt-auto justify-center mb-auto" >
                            <a href='https://www.facebook.com/profile.php?id=61581443513987'>
                                <FontAwesomeIcon  className='h-5 text-gray-900 hover:scale-110' icon={faFacebook} />
                            </a>
                        </div>
                    }

                </div>

            </div>
        </div >
    );
}