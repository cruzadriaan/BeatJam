import './Order.css';
import Cat from '../images/copper.png';

export const Order = () => {
    return (
        <div className='flex flex-col justify-center items-center h-dvh'>
            <img className='w-[300px] ' src={Cat} alt="" />
            <h1>Order Page is currently in progress..</h1>
            <p className='font-bold mb-20'>- Adrian</p>
        </div>
    );
}