import { Home } from './Home';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BeatJamLogo from '../images/beatjam-logo.png';

export const Navbar = () => {

    return (
        <div className='container'>
            <div className="logo-container">
                <Link to="/"><img src={BeatJamLogo} width="140" /></Link>

            </div>
            <div className="nav-links">
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