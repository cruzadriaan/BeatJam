
import Delivery from '../images/icon/delivery.png';
import PickUp from '../images/icon/pickup.png';
import { useNavigate } from 'react-router-dom';


export const DeliveryOptions = ({setDeliveryOption}) => {


    const navigate = useNavigate();

    const handleOrderPickUp = () => {
        setDeliveryOption("Delivery Options: Pick up");
        navigate('/orderSelection');
    }

        const handleOrderDelivery = () => {
        setDeliveryOption("Delivery Options: Delivery");
        navigate('/orderSelection');
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className="flex flex-col text-white gap-12 sm:py-[80px] py-[60px] md:px-[120px] sm:px-[60px] px-[20px] bg-gray-800 rounded-xl">
                <div className="bg-transparent">
                    <h1 className=" text-white sm:text-4xl text-3xl ">Delivery Options</h1>
                </div>

                <div className="flex sm:gap-12 gap-7 bg-transparent">

                    <div className='flex flex-col items-center justify-center gap-5 cursor-pointer font-bold bg-red-500 sm:w-[180px] w-[160px] sm:p-10 p-5 rounded-xl hover:opacity-90 ' onClick={handleOrderPickUp}>
                        <img src={PickUp} className='sm:w-[60px] w-[40px] bg-transparent' alt="" />
                        <button className='' >Pick Up</button>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-5 cursor-pointer font-bold bg-green-500 sm:w-[180px] w-[160px] sm:p-10 p-5 rounded-xl hover:opacity-90'  onClick={handleOrderDelivery}>
                        <img src={Delivery} className='sm:w-[80px] w-[60px] bg-transparent' alt="" />
                        <button className=''>Delivery</button>
                    </div>

                </div>

            </div>

        </div>
    );

}