import { useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';
import './Home.css';
import WaffleKing from '../images/menu/waffle-king.jpg';
import Waffle from '../images/menu/waffle.png';
import BiscoffCake from '../images/menu/biscoff-cake.jpg';
import Milktea from '../images/menu/milktea.jpg';
import Mixed from '../images/menu/mixed.png';

export const Home = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const slides = [WaffleKing, Waffle, BiscoffCake, Milktea, Mixed];

    useEffect(() =>{
        const interval = setInterval(() =>{
            setActiveIndex((prev) => (prev + 1) % slides.length)
        },6000);
        return()=> clearInterval(interval);
    },[slides.length]);

    function handleClick() {
        navigate("/order");
    }

    return (
        <div className='h-full w-dvw'>
            <div className="flex flex-col relative  bg-gray-200 h-[350px] b-none 
              sm:mt-1  sm:h-[700px]">

                <div className=" w-[--image-slide] h-[--image-slide] overflow-hidden  m-auto rounded-lg 
                ">
                    <div className="flex image-animate w-[1500px] sm:w-[3000px]">
                        {slides.map((slide, index) => (
                            <div key={index} className="image-slide"><img src={slide} alt="" /></div>
                        ))}

                    </div>
                </div>

                <div className=' absolute flex bottom-0 items-center w-full sm:gap-4 gap-3  justify-center sm:h-10 h-6 
                 bg-transparent'>
                    {slides.map((_, i) => {
                        return (
                            <span key={i} className={`block sm:w-2 w-2 sm:h-2 h-2  duration-100 transition-colors rounded-full ${activeIndex === i ? "bg-yellow-600" : "bg-gray-400" }`} ></span>
                        );
                    })}
                </div>
            </div>

            <div className="flex  flex-col p-[30px] h-[250px] font-bold text-gray-800 
            items-center w-[dvw] justify-center sm:text-md sm:p-[30px] sm:h-[225px]">

                <p>We are open from Monday to Saturday <br />8am-9pm.</p>
                <p className='mt-2'>Enjoy the delicous foods with a good view.</p>

                <button className='btn-animate mt-[20px] p-[10px] sm:w-[150px] w-[120px] sm:h-[45px] h-[40px] border-none bg-yellow-500 text-white font-bold text-md 
                sm:justify-center  sm:p-[5px]'
                    onClick={handleClick}
                >Order Now
                </button>

            </div>

            <div className="grid grid-rows-2 gap-[100px] h-[250px] sm:h-[300px] p-[20px] pt-8 bg-yellow-500
            md:p-20 md:gap-[130px] md:pt-12
            ">

                <div className="bg-transparent text-white text-[14px] sm:text-lg 2xl:pt-10">
                    <p>Established in 2019, Beatjam is San Francisco, Quezon’s premier destination for chill vibes
                        and great music. Whether you're craving authentic Ramen, sizzling specialties, or a refreshing
                        milk tea, we offer a diverse menu paired with a relaxing ambiance that hits all the right notes</p>
                </div>

                <div className="bg-transparent text-white text-[15px] sm:text-lg" >
                    <p style={{ fontWeight: "bold" }}>Beat Jam Aurora</p>
                    <p>0999-954-8120</p>
                </div>

            </div>

            <div className='bg-yellow-600 h-10 flex flex-row justify-center gap-1 items-center text-white text-[11px]
            md:text-lg md:justify-center sm:gap-2'>
                <div className='bg-transparent'>
                    <p>All rights reserved 2026 |</p>
                </div>
                <div className='bg-transparent'>
                    <p>Follow us on social media </p>
                </div>
            </div>

        </div>
    );
}