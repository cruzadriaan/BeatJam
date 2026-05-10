import { MenuDetails, SizzlingMenu, ComboMenuList } from "./MenuDetails";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const OrderSelection = ({ deliveryOption }) => {

    const [isPancitVisible, setIsPancitVisible] = useState(false);
    const [isSizzlingVisible, setIsSizzlingVisible] = useState(false);
    const [isComboVisible, setIsComboVisible] = useState(false);
    const [selectedSize, setSelectedSize] = useState(80);

    return (
        <div className='w-full mt-20  space-y-5'>
            <h1>{deliveryOption}</h1>

            <h1 className="text-left ml-10">Step 1: Select your order</h1>
            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setIsPancitVisible(!isPancitVisible)}>
                    <h1 className="!text-white font-bold">Pancit</h1>
                    <FontAwesomeIcon className={`${isPancitVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight}/>
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
                            onChange={(e) => {setSelectedSize(e.target.value)}}>
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

            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setIsSizzlingVisible(!isSizzlingVisible)}>
                    <h1 className="!text-white font-bold">Sizzling Solo</h1>
                    <FontAwesomeIcon className={`${isSizzlingVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight}/>
                </div>

            <div className={`${isSizzlingVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 grid grid-cols-2 gap-5 mx-5 
            transition-all`}>

                {SizzlingMenu.map((menu, index) => (
                    <div key={index} className='p-4 border border-gray-600 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>
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

            <div className="flex justify-center items-center bg-blue-300 mx-10 cursor-pointer"
                onClick={() => setIsComboVisible(!isComboVisible)}>
                    <h1 className="!text-white font-bold">Combo Meals</h1>
                    <FontAwesomeIcon className={`${isComboVisible ? "rotate-90" : "rotate-0"} bg-transparent ml-2 !text-white text-sm duration-200`} icon={faAngleRight}/>
                </div>

            <div className={`${isComboVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 grid grid-cols-2 gap-5 mx-5 
            transition-all`}>

                {ComboMenuList.map((menu, index) => (
                    <div key={index} className='p-4 border border-gray-600 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>
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

            <div className="flex justify-center gap-5">
                <button className="bg-gray-400 px-3 py-1 cursor-pointer hover:opacity-85">Back</button>
                <button className="bg-green-500 px-3 py-1 cursor-pointer hover:opacity-85">Next</button>
            </div>
        </div>
    );
}