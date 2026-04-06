import { useNavigate } from 'react-router-dom';
import './Home.css';
import WaffleKing from '../images/menu/waffle-king.jpg';
import Waffle from '../images/menu/waffle.png';
import BiscoffCake from '../images/menu/biscoff-cake.jpg';
import Milktea from '../images/menu/milktea.jpg';
import Mixed from '../images/menu/mixed.png';

export const Home = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/order");
    }

    return (
        <div className='h-full w-dwh'>
            <div className="flex bg-gray-200 h-[40rem] b-none 
             max-[420px]:mt-1 max-[420px]:h-[350px]">

                <div className="w-[37.5rem] h-[37.5rem] overflow-hidden p-relative m-auto rounded-lg 
                max-[420px]:w-[300px] max-[420px]:h-[300px]">

                    <div className="image-animate flex w-[1500px]">
                        <div className="image-slide"><img src={WaffleKing} alt="" /></div>
                        <div className="image-slide"><img src={Waffle} alt="" /></div>
                        <div className="image-slide"><img src={BiscoffCake} alt="" /></div>
                        <div className="image-slide"><img src={Milktea} alt="" /></div>
                        <div className="image-slide"><img src={Mixed} alt="" /></div>
                    </div>
                </div>

            </div>

            <div className="p-[30px] h-[320px] font-bold text-gray-800 
            max-[148px]:flex max-[148px]:flex-col max-[148px]:items-center max-[148px]:w-[600px]
            max-[148px]:justify-center max-[420px]:text-md max-[420px]:p-[30px] max-[420px]:h-[225px]">

                <p>We are open from Monday to Saturday <br/>8am-9pm.</p>
                <p className='mt-2'>Enjoy the delicous foods with a good view.</p>

                <button className='btn-animate mt-[20px] p-[15px] w-[200px] border-none bg-yellow-500 text-white font-bold text-md 
                max-[420px]:justify-center max-[420px]:h-[40px] max-[420px]:w-[110px] max-[420px]:p-[5px]'
                    onClick={handleClick}
                >Order Now
                </button>
            </div>

            <div className="grid grid-cols-2 gap-[40px] h-[250px] p-[50px] bg-yellow-500
            max-[420px]:justify-center max-[420px]:h-[250px] max-[420px]:w-dvw 
            max-[420px]:flex max-[420px]:flex-col max-[420px]:text-sm max-[420px]:p-2 max-[420px]:gap-[10px]
            max-[420px]:items-center">

                <div className="p-[30px] text-md w-[500px] text-center ml-[50px] bg-transparent text-white
                max-[420px]:w-[400px] max-[420px]:ml-0 max-[420px]:text-[12px] max-[420px]:pb-[0px]">
                    <p>Established in 2019, Beatjam is San Francisco, Quezon’s premier destination for chill vibes
                        and great music. Whether you're craving authentic Ramen, sizzling specialties, or a refreshing
                        milk tea, we offer a diverse menu paired with a relaxing ambiance that hits all the right notes</p>
                </div>

                <div className="flex flex-col gap-[5px] p-[10px] text-md bg-transparent text-white w-[500px] text-center ml-[50px]
                max-[420px]:w-[200px] max-[420px]:ml-0 max-[420px]:mt-4 max-[420px]:p-5" >
                    <p style={{ fontWeight: "bold" }}>Beat Jam Aurora</p>
                    <p>0999-954-8120</p>               
                </div>

            </div>

        </div>
    );
}