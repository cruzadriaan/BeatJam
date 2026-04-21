
import Delivery from '../images/icon/delivery.png';
import PickUp from '../images/icon/pickup.png';
import { useNavigate } from 'react-router-dom';

export const DeliveryOptions = () => {

    const navigate = useNavigate();

    const handleOrderPickUp = () => {
        navigate('/orderPickUp');
    }

        const handleOrderDelivery = () => {
        navigate('/orderDelivery');
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className="flex flex-col text-white gap-12 py-[80px] md:px-[120px] sm:px-[60px] px-[18px] bg-gray-800 rounded-xl">
                <div className="bg-transparent">
                    <h1 className=" text-white sm:text-4xl text-3xl ">Delivery Options</h1>
                </div>

                <div className="flex sm:gap-12 gap-7 bg-transparent">

                    <div className='flex flex-col items-center justify-center gap-10 cursor-pointer font-bold bg-red-500 w-[200px] sm:p-10 p-5 rounded-xl hover:opacity-90 ' onClick={handleOrderPickUp}>
                        <img src={PickUp} className=' w-[60px] bg-transparent' alt="" />
                        <button className=''>Pick Up</button>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-10 cursor-pointer font-bold bg-green-500 w-[200px] sm:p-10 p-5 rounded-xl hover:opacity-90'  onClick={handleOrderDelivery}>
                        <img src={Delivery} className=' w-[80px] bg-transparent' alt="" />
                        <button className=''>Delivery</button>
                    </div>

                </div>

            </div>

        </div>
    );

}