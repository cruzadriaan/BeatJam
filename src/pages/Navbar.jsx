import { Home } from './Home';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BeatJamLogo from '../images/beatjam-logo.png';

export const Navbar = () => {

    return (
        <div className='flex justify-between mx-5 my-0'>
            <div className="p-1">
                <Link to="/"><img src={BeatJamLogo} width="140" /></Link>

            </div>

            <div className="flex justify-right mr-1.9 items-center p-0.6  gap-8 font-semibold text-xl text-gray-800 hover:text-gray-500">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contacts</Link>

                <div className="register-container">
                    <Link to="/signin" className='signin'>Sign In</Link>
                    <Link to="/signup" className='signup'>Sign Up</Link>
                </div>

            </div>
        </div>

    );
}