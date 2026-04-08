import { Home } from './Home';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BeatJamLogo from '../images/beatjam-logo.png';
import { useState } from 'react';

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
                <button className="sm:hidden flex flex-col space-y-1" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ?
                        <>
                            <span className='block  w-6 h-0.5 bg-gray-600'></span>
                            <span className='block  w-6 h-0.5 bg-gray-600'></span>
                            <span className='block  w-6 h-0.5 bg-gray-600'></span>

                        </>
                        :
                        <div className='flex flex-col justify-center items-center sm:hidden'>
                            <span className='block w-6 h-0.5 bg-gray-600 rotate-45 translate-y-0.5'></span>
                            <span className='block w-6 h-0.5 bg-gray-600 -rotate-45'></span>
                        </div>
                    }

                </button>
                
                <div className={`${isOpen ? "translate-x-0 opacity-100 " : "translate-x-full opacity-0 sm:flex sm:translate-x-5 sm:opacity-100"} 
                text-gray-800 flex flex-col items-center fixed top-[55px] right-0 z-50 shadow-xl px-[40px] h-dvh gap-10
                sm:flex-row sm:relative sm:flex sm:top-0 sm:h-0 transition-transform duration-500`}>
                    
                    <Link to="/" className='pb-0.2 font-bold border-b-2 border-transparent transition-all hover:border-[#E59A18]' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/menu" className='pb-0.2 font-bold border-b-2 border-transparent transition-all hover:border-[#E59A18]' onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link to="/gallery" className='pb-0.2 font-bold border-b-2 border-transparent transition-all hover:border-[#E59A18]' onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to="/contact" className='pb-0.2 font-bold border-b-2 border-transparent transition-all hover:border-[#E59A18]' onClick={() => setIsOpen(false)}>Contacts</Link>
                </div>

            </div>
        </div >
    );
}