import { Home } from './Home';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BeatJamLogo from '../images/beatjam-logo.png';

export const Navbar = () => {

    return (
        <div className='flex flex-wrap justify-between mx-5 my-0 max-[460px]:pt-2'>
            <div className="p-1">
                <Link to="/"><img src={BeatJamLogo} width="140" className='max-[460px]:w-[90px]'/></Link>

            </div>

            <div className="flex justify-center mr-1.9 items-center p-0.6 gap-8 font-semibold text-md text-gray-800 max-[460px]:w-[5px]
              max-[460px]:gap-10">
                <Link to="/" className='pb-0.2 border-b-2 border-transparent transition-all hover:border-[#E59A18]'>Home</Link>
                <Link to="/menu" className='pb-0.2 border-b-2 border-transparent transition-all hover:border-[#E59A18]'>Menu</Link>
                <Link to="/gallery" className='pb-0.2 border-b-2 border-transparent transition-all hover:border-[#E59A18]'>Gallery</Link>
                <Link to="/contact" className='pb-0.2 border-b-2 border-transparent transition-all hover:border-[#E59A18]'>Contacts</Link>

                <div className="flex flex-row gap-4 text-white">
                    <Link to="/signin" className='bg-yellow-500 py-1 px-4 rounded-xl'>Sign In</Link>
                    <Link to="/signup" className='bg-yellow-500 py-1 px-4 rounded-xl'>Sign Up</Link>
                </div>

            </div>
        </div>

    );
}