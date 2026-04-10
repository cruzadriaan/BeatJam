import './Order.css';
import Cat from '../images/copper.png';

export const Order = () => {
    return (
        <>
            <div className='flex flex-col gap-5 pt-[20px] m-10 border border-gray-300  rounded-xl h-[550px] sm:w-[700px] w-[500px] drop-shadow-sm items-center mx-auto'>

                <h1 className='font-bold text-3xl mb-5'>Order Form</h1>

                <form className='flex flex-col gap-5 w-[400px]'>
                    <div className='flex items-left gap-5'>
                        <label className='text-sm text-left font-semibold text-gray-700'>
                            First Name:
                            <input type="text" className='border border-gray-400 p-1   flex-1 rounded-md' required />
                        </label>

                        <label className='text-sm text-left font-semibold text-gray-700'>
                            Last Name:
                            <input type="text" className='border border-gray-400  p-1  flex-1 rounded-md' required />
                        </label>
                    </div>

                    <div className='flex flex-row gap-10'>
                        <label className='text-sm text-left font-semibold  text-gray-700 '>
                            Email Address:
                            <input type="email" placeholder="(optional)" className='border border-gray-400  p-1 ml-1 flex-1 rounded-md' />
                        </label>
                    </div>

                    <div className='flex flex-col gap-2  '>
                        <div className='flex flex-col '>
                            <label className='flex items-left justify-left text-sm font-semibold text-gray-700 '>
                                Delivery Address:
                            </label>
                            <textarea type="text" className='border border-gray-400  p-1  flex-1 rounded-md' required />
                        </div>

                        <div className='flex flex-col '>
                            <label className='flex items-left justify-left text-sm font-semibold text-gray-700 '>
                                Notes:
                            </label>
                            <textarea type="text" className='border border-gray-400  p-1  flex-1 rounded-md' required />
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <button className='p-3 border w-[140px]  rounded-lg bg-yellow-500 text-white font-bold'>Submit Order</button>
                        <button className='p-3 border w-[140px] rounded-lg bg-red-500 text-white font-bold'>Clear</button>
                    </div>
                </form>
                <div className='flex flex-col justify-center items-center h-dv sm:mt-30 mt-[100px]'>
                    <img className='w-[300px] ' src={Cat} alt="" />
                    <h1>Order Page is currently in progress..</h1>
                    <p className='font-bold mb-20'>- Adrian</p>
                </div>
            </div>
        </>

    );
}