import { MenuDetails } from "./MenuDetails";
import {useState} from 'react';

export const OrderSelection = ({ deliveryOption }) => {

    const [isPancitVisible, setIsPancitVisible] = useState(false);
    const [isSizzlingVisible, setIsSizzlingVisible] = useState(false);

    return (
        <div className='w-full  mt-20 space-y-5'>
            <h1>{deliveryOption}</h1>

            <div className="bg-blue-300 w-[500px] mx-auto cursor-pointer text-white font-bold" 
            onClick={()=>setIsPancitVisible(!isPancitVisible)}>Pancit</div>

            <div className={`${isPancitVisible ? "max-h-[2000px]" : "max-h-0"} overflow-hidden duration-1000 grid grid-cols-2 gap-5 mx-5 px-[500px]
            transition-all`}>

                {MenuDetails.map((menu, index) => (
                    <div key={index} className='p-4 border border-gray-600 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>
                        <div className='flex items-center justify-center gap-3 mt-2'>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                            <h1>1</h1>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                        </div>
                        <div className='mt-2 mx-5'>
                            <p className='text-[13px]'>{menu.description}</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-sm bg-blue-500 text-white py-1 px-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="bg-blue-300 w-[500px] mx-auto cursor-pointer text-white font-bold" 
            onClick={()=>setIsSizzlingVisible(!isSizzlingVisible)}>Sizzler Solo</div>

        </div>
    );
}