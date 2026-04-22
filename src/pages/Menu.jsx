import '../styles/Menu.css';
import PancitSizzler from '../images/menu/pancit-sizzler.jpg';
import SizzlerCombo from '../images/menu/sizzler-combo.jpg';
import FlavoredChicken from '../images/menu/flavored-chicken.jpg';
import PizzaFries from '../images/menu/pizza-fries.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {

    const navigate = useNavigate();

    const [openImage, setOpenImage] = useState(false);
    const Menus = [
        {name: "PancitSizzler", image:PancitSizzler},
        {name: "SizzlerCombo", image:SizzlerCombo}, 
        {name: "FlavoredChicken", image:FlavoredChicken},
        {name: "PizzaFries", image:PizzaFries}]

        const handleClickOrder = () => {
            navigate("/deliveryOptions");
        }

    return (
        <div className="">

            <div className='mt-20 fixed bg-transparent top-0 right-0'>
                <button className='h-24 w-24 p-5 font-bold rounded-full bg-orange-600 text-white hover:bg-orange-500'
                onClick={handleClickOrder}>Order Now!</button>
            </div>

            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 m-3 mt-20 gap-2 justify-items-center">
                {Menus.map((option, index) => (
                    <div key={index} onClick={()=>setOpenImage(option)}>
                        <img src={option.image} className='sm:w-[600px] w-auto cursor-pointer' alt={option.name} />
                    </div>
                ))}
            </div>

            {openImage &&
                <div className='fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center cursor-pointer pt-[80px]' onClick={()=>setOpenImage(null)}>
                    <img src={openImage.image} className='w-[700px]'></img>
                </div>
            }
            


        </div>
    );
}
