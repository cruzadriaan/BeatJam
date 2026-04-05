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
        <div className='h-63'>
            <div className="flex bg-gray-200 h-[40rem] b-none 
            max-[460px]:w-[600px] max-[460px]:h-[600px] max-[460px]:mt-5">

                <div className="w-[37.5rem] h-[37.5rem] overflow-hidden p-relative m-auto rounded-lg 
                max-[460px]:w-[600px] max-[460px]:h-[600px] ">

                    <div className="image-animate flex w-[2400px]">
                        <div className="image-slide"><img src={WaffleKing} alt="" /></div>
                        <div className="image-slide"><img src={Waffle} alt="" /></div>
                        <div className="image-slide"><img src={BiscoffCake} alt="" /></div>
                        <div className="image-slide"><img src={Milktea} alt="" /></div>
                    </div>
                </div>

            </div>

            <div className="p-[30px] h-[20rem] font-bold text-gray-800 
            max-[460px]:flex max-[460px]:flex-col max-[460px]:items-center max-[460px]:w-[500px]
            max-[460px]:justify-center ">

                <p>We are open from Monday to Saturday 8am-9pm.</p>
                <p>Enjoy the delicous foods with a good view.</p>

                <button className='btn-animate mt-[20px] p-[15px] w-[200px] border-none bg-yellow-500 text-white font-bold text-lg 
                max-[460px]:justify-center'
                    onClick={handleClick}
                    >Order Now
                </button>
            </div>

            <div className="grid grid-cols-2 gap-[40px] h-[250px] p-[50px] bg-yellow-500
            max-[460px]:justify-center max-[460px]:h-[350px] max-[460px]:w-[600px] 
            max-[460px]:flex max-[460px]:flex-row max-[460px]:text-sm max-[460px]:p-0 max-[460px]:gap-[2px]">

                <div className="p-[30px] text-md w-[500px] text-left ml-[50px] bg-transparent text-white
                max-[460px]:w-[200px] max-[460px]:ml-0">
                    <p>Established in 2019, Beatjam is San Francisco, Quezon’s premier destination for chill vibes
                        and great music. Whether you're craving authentic Ramen, sizzling specialties, or a refreshing
                        milk tea, we offer a diverse menu paired with a relaxing ambiance that hits all the right notes</p>
                </div>
                <div className="flex flex-col gap-[5px] p-[10px] text-md bg-transparent text-white w-[500px] text-left ml-[50px]
                max-[460px]:w-[200px] max-[460px]:ml-0 max-[460px]:mt-4" >
                    <p style={{ fontWeight: "bold" }}>Aurora</p>
                    <p>0123-456-789</p>
                    <p>Delivery service for Maxs Restaurant is available in Metro Manila and selected provincial locations only. A minimum order of Php 350 is required to proceed with any transaction.</p>
                </div>

            </div>

        </div>
    );
}