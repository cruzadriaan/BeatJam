import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';
import WaffleKing from '../images/menu/waffle-king.jpg';
import Waffle from '../images/menu/waffle.png';
import BiscoffCake from '../images/menu/biscoff-cake.jpg';
import Milktea from '../images/menu/milktea.jpg';
import Mixed from '../images/menu/mixed.png';
import Kinalas from '../images/best-seller/kinalas.png'
import Tocilog from '../images/best-seller/tocilog.png'
import Pancit from '../images/best-seller/pancit.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


export const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [WaffleKing, Waffle, BiscoffCake, Milktea, Mixed];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    function handleClick() {
        navigate("/order");
    }

    const PrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length -1 : prev - 1  ));
    }

    const NextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    return (
        <div className='h-full w-dvw'>

            <div className="flex flex-col relative  bg-gray-200 h-[350px] b-none 
              sm:mt-1  sm:h-[700px]">

                {/* container */}
                <div className=" sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] overflow-hidden m-auto rounded-lg 
                ">
                    <div 
                    className="flex relative duration-500 ease-in-out"  
                    style={{
                        transform:`translateX(-${currentSlide * (100 / slides.length)}%)`,
                        width:`${slides.length * 100}%`
                    }}>

                        {slides.map((slide, index) => (
                            <div key={index} className="w-full h-full "><img src={slide} className='sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] object-cover block' alt="" /></div>
                        ))}
                    </div>

                </div>


                <button
                    className="absolute 4xl:left-[600px]  3xl:left-[600px] 2xl:left-[420px] xl:left-[320px] lg:left-[180px] md:left-[30px] sm:left-[10px] left-[10px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110  z-10" onClick={() => PrevSlide()}>
                    <FontAwesomeIcon icon={faAngleLeft} className='bg-transparent'  />
                </button>

                <button
                    className="absolute 3xl:right-[600px] 2xl:right-[420px] xl:right-[320px]  lg:right-[180px] md:right-[30px] sm:right-[10px] right-[10px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110 z-10" onClick={() => NextSlide()}>
                    <FontAwesomeIcon icon={faAngleRight} className='bg-transparent'/>
                </button>

                <div className=' absolute flex bottom-0 items-center w-full sm:gap-4 gap-3  justify-center sm:h-10 h-6 
                 bg-transparent'>
                    {slides.map((_, i) => {
                        return (
                            <span key={i} className={`block sm:w-2 w-2 sm:h-2 h-2  duration-100 transition-colors rounded-full ${currentSlide === i ? "bg-yellow-600" : "bg-gray-400"}`} ></span>
                        );
                    })}
                </div>

            </div>

            <div className="flex  flex-col p-[30px] h-[250px] font-bold text-gray-800 
            items-center w-[dvw] justify-center sm:text-md sm:p-[30px] sm:h-[225px] border-b-2 border-gray-300">

                <p>We are open from Monday to Saturday <br />8am-9pm.</p>
                <p className='mt-2'>Enjoy the delicous foods with a good view.</p>

                <button className='btn-animate mt-[20px] p-[10px] sm:w-[150px] w-[120px] sm:h-[45px] h-[45px] border-none bg-yellow-500 text-white font-bold text-md 
                sm:justify-center  sm:p-[5px]'
                    onClick={handleClick}
                >Order Now
                </button>

            </div>

            <div className='lg:pt-8 sm:pt-8 pt-7 xl:h-[420px] lg:h-[380px] md:h-[320px] sm:h-[280px] h-[240px] lg:space-y-12 md:space-y-7 sm:space-y-8 space-y-5 '>
                <h1 className='font-bold'>Best Seller</h1>

                <div className='grid grid-cols-3 h-full 5xl:mx-[900px] 4xl:mx-[800px] 3xl:mx-[500px] 2xl:mx-[300px] xl:mx-[200px] lg:mx-[80px] mx-1 bg-transparent ' >

                    <div className='bg-transparent flex flex-col items-center gap-2'>
                        <img src={Kinalas} alt="" className='bg-transparent lg:h-[220px] md:h-[150px] sm:h-[120px] h-[100px]' />
                        <p className='font-bold text-sm text-center'>Kinalas</p>
                    </div>
                    <div className='bg-transparent flex flex-col items-center gap-2'>
                        <img src={Tocilog} alt="" className='bg-transparent lg:h-[220px] md:h-[150px] sm:h-[120px] h-[100px]' />
                        <p className='font-bold text-sm text-center'>Tocilog</p>
                    </div>
                    <div className='bg-transparent flex flex-col items-center gap-2 '>
                        <img src={Pancit} alt="" className='bg-transparent lg:h-[220px] md:h-[150px] sm:h-[120px] h-[100px] scale-[110%] ' />
                        <p className='font-bold text-sm text-center'>Pancit</p>
                    </div>

                </div>
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