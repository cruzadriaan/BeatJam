import { Home } from './Home';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BeatJamLogo from '../images/beatjam-logo.png';
import { useState } from 'react';
import { Navlinks } from './Navlink.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';





export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className='flex flex-row justify-between items-center mx-1 my-0 sm:pt-3 md:p-3 p-2 h-[70px]'>


            <div className="">
                <Link to="/"><img src={BeatJamLogo}
                    className='sm:w-[120px] w-[100px]' /></Link>
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

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                <div className={`${isOpen ? "translate-x-0  shadow-xl" : "translate-x-full  sm:opacity-100 "} 
                text-gray-800 flex flex-col items-left sm:items-center fixed top-0 right-0 z-50 h-dvh sm:gap-2  sm:translate-x-5
                sm:flex-row sm:relative sm:flex sm:top-0 sm:h-0 transition-transform transition-opacity duration-500`}>

                    <div className='flex flex-col items-end p-3'>
                        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen &&
                                <div className=' w-8 sm:hidden border rounded-full p-1  font-semibold hover:text-white text-sm border-black hover:bg-gray-800'>
                                    X
                                </div>
                            }
                        </button>
                    </div>
                    <div className='flex sm:flex-row flex-col sm:w-full w-[180px] p-5 pl-7 justify-center md:gap-12 sm:gap-7 gap-10'>
                        {Navlinks.map((nav, index) => (
                            <div key={index} className='flex items-left md:gap-1.5 gap-1.5'>
                                <FontAwesomeIcon icon={nav.icon} className="text-gray-700 md:mt-0.5 sm:mt-1 sm:pb-1 pb-0.5  h-5" />
                                <Link to={nav.src} className='pb-0.2 font-bold border-b-2 border-transparent sm:text-lg hover:border-[#E59A18]' onClick={() => setIsOpen(false)}>{nav.name}</Link>
                            </div>
                        ))}
                    </div>




                    {isOpen &&
                        <div className="flex flex-col text-[12px] gap-4 mt-auto justify-center mb-10" >
                            <p>Follow us on social media:</p>
                            <div className='flex justify-center items-center gap-5'>
                                <a href='https://www.facebook.com/profile.php?id=61581443513987' target="_blank">
                                    <FontAwesomeIcon className='h-5 text-gray-900 hover:scale-110'  icon={faFacebook} />
                                </a>
                                <a href="mailto:beatjamrestobar@gmail.com" target="_blank" >
                                    <FontAwesomeIcon className='h-5 text-gray-900 hover:scale-110' icon={faEnvelope} />
                                </a>
                            </div>

                        </div>
                    }

                </div>

            </div>
        </div >
    );
}