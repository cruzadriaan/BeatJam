import { MenuDetails, SizzlingMenu, ComboMenuList, SilogMeals, PizzaMenu } from "./MenuDetails";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const OrderSelection = ({ deliveryOption }) => {

    const [isPancitVisible, setIsPancitVisible] = useState(false);
    const [isSizzlingSoloVisible, setIsSizzlingSoloVisible] = useState(false);
    const [isSizzlerComboVisible, setIsSizzlerComboVisible] = useState(false);
    const [isFChickenVisible, setisFChickenVisible] = useState(false);
    const [isSilogVisible, setIsSilogVisible] = useState(false);
    const [isPizzaVisible, setIsPizzaVisible] = useState(false);
    const [selectedSize, setSelectedSize] = useState(80);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("../deliveryOptions")
    }

    return (

        <div className='w-full mt-20  space-y-5'>
            <h1>{deliveryOption}</h1>

            <h1 className="text-left ml-10">Step 1: Select your order</h1>

            {/* Menu items */}

            {/* Pancit */}
            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setIsPancitVisible(!isPancitVisible)}>
                <h1 className="!text-white font-bold">Pancit</h1>
                <FontAwesomeIcon className={`${isPancitVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight} />
            </div>

            <div className={`${isPancitVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 grid grid-cols-2 gap-5 mx-5 
            transition-all`}>

                {MenuDetails.map((menu, index) => (
                    <div key={index} className='p-4 border border-gray-600 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>

                        <div className="flex justify-center items-center gap-4 p-3">
                            <h1 className="text-sm">₱{selectedSize}</h1>
                            <select className="border border-gray-500" name="" id=""
                                onChange={(e) => { setSelectedSize(e.target.value) }}>
                                <option value="80">Small</option>
                                <option value="120">Double</option>
                                <option value="320">Sharing</option>
                                <option value="450">Barkada</option>
                            </select>
                        </div>

                        <div className='flex items-center justify-center gap-3 mt-2'>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                            <h1>1</h1>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                        </div>
                        <div className='mt-2 mx-5'>
                            <p className='text-[13px] '>{menu.description}</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-sm bg-blue-500 text-white py-1 px-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sizzler Solo */}
            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setIsSizzlingSoloVisible(!isSizzlingSoloVisible)}>
                <h1 className="!text-white font-bold">Sizzler Solo</h1>
                <FontAwesomeIcon className={`${isSizzlingSoloVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight} />
            </div>

            <div className={`${isSizzlingSoloVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 grid grid-cols-2 gap-5 mx-5 
            transition-all`}>

                {SizzlingMenu.map((menu, index) => (
                    <div key={index} className='p-4 border border-gray-600 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>
                        <h1>₱{menu.price}</h1>
                        <div className='flex items-center justify-center gap-3 mt-2'>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                            <h1>1</h1>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                        </div>
                        <div className='mt-2 mx-5'>
                            <p className='text-[13px] '>{menu.description}</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-sm bg-blue-500 text-white py-1 px-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sizzler Combo Meals */}
            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setIsSizzlerComboVisible(!isSizzlerComboVisible)}>
                <h1 className="!text-white font-bold">Sizzler Combo Meals</h1>
                <FontAwesomeIcon className={`${isSizzlerComboVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight} />
            </div>

            <div className={`${isSizzlerComboVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 grid grid-cols-2 gap-5 mx-5 
            transition-all`}>

                {ComboMenuList.map((menu, index) => (
                    <div key={index} className='p-4 border border-gray-600 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>
                        <h1>₱{menu.price}</h1>
                        <div className='flex items-center justify-center gap-3 mt-2'>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                            <h1>1</h1>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                        </div>
                        <div className='mt-2 mx-5'>
                            <p className='text-[13px] '>{menu.description}</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-sm bg-blue-500 text-white py-1 px-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Flavored Chicken */}
            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setisFChickenVisible(!isFChickenVisible)}>
                <h1 className="!text-white font-bold">Flavored Chicken</h1>
                <FontAwesomeIcon className={`${isFChickenVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight} />
            </div>

            <div className={`${isFChickenVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 flex flex-col justify-center gap-2 mx-5 
            transition-all`}>

                <div className="flex flex-row gap-5 items-center justify-between">
                    <label htmlFor="">Sweet Chili</label>
                    <h1>₱105</h1>
                    <input className="w-5" type="checkbox" />
                    <div className="flex gap-4">
                        <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                        <h1>1</h1>
                        <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center justify-between">
                    <label htmlFor="">Honey Glazed</label>
                    <h1>₱105</h1>
                    <input className="w-5" type="checkbox" />
                    <div className="flex gap-4">
                        <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                        <h1>1</h1>
                        <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center justify-between">
                    <label htmlFor="">Arabian's Kebab</label>
                    <h1>₱105</h1>
                    <input className="w-5" type="checkbox" />
                    <div className="flex gap-4">
                        <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                        <h1>1</h1>
                        <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center justify-between">
                    <label htmlFor="">Spicy Garlic Mayo</label>
                    <h1>₱105</h1>
                    <input className="w-5" type="checkbox" />
                    <div className="flex gap-4">
                        <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                        <h1>1</h1>
                        <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center justify-between">
                    <label htmlFor="">Fireball Buffalo</label>
                    <h1>₱120</h1>
                    <input className="w-5" type="checkbox" />
                    <div className="flex gap-4">
                        <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                        <h1>1</h1>
                        <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                    </div>
                </div>

                <div className='mt-2'>
                    <button className='text-sm bg-blue-500 text-white py-1 px-2 rounded-md'>Add to Cart</button>
                </div>
            </div>

            {/* Silog Meals */}
            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setIsSilogVisible(!isSilogVisible)}>
                <h1 className="!text-white font-bold">Silog Meals</h1>
                <FontAwesomeIcon className={`${isSilogVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight} />
            </div>

            <div className={`${isSilogVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 grid grid-cols-2 gap-5 mx-5 
            transition-all`}>

                {SilogMeals.map((menu, index) => (
                    <div key={index} className='p-4 border border-gray-600 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>
                        <h1>₱{menu.price}</h1>
                        <div className='flex items-center justify-center gap-3 mt-2'>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                            <h1>1</h1>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                        </div>
                        <div className='mt-2 mx-5'>
                            <p className='text-[13px] '>{menu.description}</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-sm bg-blue-500 text-white py-1 px-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pizza Menu */}
            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setIsPizzaVisible(!isPizzaVisible)}>
                <h1 className="!text-white font-bold">Pizza</h1>
                <FontAwesomeIcon className={`${isPizzaVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight} />
            </div>

            <div className={`${isPizzaVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 grid grid-cols-2 gap-5 mx-5 
            transition-all`}>

                {PizzaMenu.map((menu, index) => (
                    <div key={index} className='p-4 border border-gray-600 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>
                        <h1>₱{menu.price}</h1>
                        <div className='flex items-center justify-center gap-3 mt-2'>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                            <h1>1</h1>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                        </div>
                        <div className='mt-2 mx-5'>
                            <p className='text-[13px] '>{menu.description}</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-sm bg-blue-500 text-white py-1 px-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>


            {/* Buttom buttons */}
            <div className="flex justify-center gap-5 py-10">
                <button className="bg-gray-400 px-3 py-1 cursor-pointer hover:opacity-85"
                    onClick={handleBack}>Back</button>
                <button className="bg-green-500 px-3 py-1 cursor-pointer hover:opacity-85">Next</button>
            </div>
        </div>
    );
}