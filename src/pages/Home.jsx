import { useNavigate } from 'react-router-dom';
import './Home.css';
import WaffleKing from '../images/menu/waffle-king.jpg'
import Waffle from '../images/menu/waffle.png'
import BiscoffCake from '../images/menu/biscoff-cake.jpg'
import Milktea from '../images/menu/milktea.jpg'

export const Home = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/order");
    }

    return (
        <div className='home-container'>
            <div className="home-image-container">

                <div className="image-slider-container">

                    <div className="image-slider">
                        <div className="my-slide"><img src={WaffleKing} alt="" /></div>
                        <div className="my-slide"><img src={Waffle} alt="" /></div>
                        <div className="my-slide"><img src={BiscoffCake} alt="" /></div>
                        <div className="my-slide"><img src={Milktea} alt="" /></div>
                    </div>
                </div>

            </div>

            <div className="home-welcome-container">

                <p>We are open from Monday to Saturday 8am-9pm.</p>
                <p>Enjoy the delicous foods with a good view.</p>

                <button onClick={handleClick}>Order Now</button>
            </div>

            <div className="bottom-container">
                <div className="bottom-left-container">
                    <p>Established in 2019, Beatjam is San Francisco, Quezon’s premier destination for chill vibes 
                        and great music. Whether you're craving authentic Ramen, sizzling specialties, or a refreshing 
                        milk tea, we offer a diverse menu paired with a relaxing ambiance that hits all the right notes</p>
                </div>
                <div className="bottom-right-container">
                    <p style={{fontWeight: "bold"}}>Aurora</p>
                    <p>0123-456-789</p>
                    <p>Delivery service for Maxs Restaurant is available in Metro Manila and selected provincial locations only. A minimum order of Php 350 is required to proceed with any transaction.</p>
                </div>

            </div>

        </div>
    );
}