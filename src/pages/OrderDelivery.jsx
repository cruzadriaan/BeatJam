import './Order.css';
import Cat from '../images/copper.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const OrderDelivery = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        deliveryAddress: "",
        notes: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleClear = () => {
        setFormData({
            firstName: "",
            lastName: "",
            contact: "",
            email: "",
            deliveryAddress: "",
            notes: ""
        })
    }

    const handleSubmit = () => {
        alert("Order muna bago submit unggoy!");
    }

    const handleBack = () => {
        navigate('/deliveryOptions');
    }

    return (
        <div className='flex flex-col mt-20 '>
            <h1 className='font-bold text-2xl mb-5'>Order Delivery</h1>

            <div className='flex flex-row items-center justify-between w-[600px] mx-auto border'>
                <div className='flex pl-2'>
                    <h1 className=''>Chami</h1>
                </div>

                <div className='flex w-[400px] justify-between '>
                    <label className='flex flex-col items-center text-sm'>Single<input type="radio" name='chami' className="accent-red-500 w-5 h-5"/></label>
                    <label  className='flex flex-col items-center text-sm'>Double<input type="radio" name='chami' className="accent-red-500 w-5 h-5"/></label>
                    <label  className='flex flex-col items-center text-sm'>Sharing<input type="radio" name='chami' className="accent-red-500 w-5 h-5"/></label>
                    <label  className='flex flex-col items-center text-sm'>Barkada<input type="radio" name='chami' className="accent-red-500 w-5 h-5"/></label>
                </div>
            </div>

            <div className='flex flex-col gap-5 px-[20px] py-[30px] mt-20 border border-gray-300  h-fit max-w-[90%] w-fit drop-shadow-sm items-center mx-auto ' >




                <form className='flex flex-col gap-5 w-fit mt-5'>
                    <div className='flex items-left gap-5 bg-transparent '>
                        <label className='text-sm text-left font-semibold text-gray-700 '>
                            First Name:
                            <input type="text" className='border border-gray-400 p-1 w-full rounded-md ' name="firstName" value={formData.firstName} onChange={handleInput} required />
                        </label>

                        <label className='text-sm text-left font-semibold text-gray-700'>
                            Last Name:
                            <input type="text" className='border border-gray-400  p-1 w-full rounded-md' name="lastName" value={formData.lastName} onChange={handleInput} required />
                        </label>
                    </div>


                    <div className='flex flex-row gap-10 '>
                        <label className='text-sm text-left font-semibold  text-gray-700 '>
                            Contact Number:
                            <input type="tel" placeholder="09xx-xxx-xxxx" className=' border border-gray-400  p-1 ml-1 w-full rounded-md' name="contact" value={formData.contact} onChange={handleInput} />
                        </label>
                    </div>

                    <div className='flex flex-row gap-10 bg-transparent'>
                        <label className='text-sm text-left font-semibold  text-gray-700 '>
                            Email Address:
                            <input type="email" placeholder="(optional)" className='border border-gray-400  p-1 ml-1 w-full rounded-md' name="email" value={formData.email} onChange={handleInput} />
                        </label>
                    </div>

                    <div className='flex flex-col gap-2  bg-transparent'>
                        <div className='flex flex-col '>
                            <label className='flex items-left justify-left text-sm font-semibold text-gray-700 '>
                                Delivery Address:
                            </label>
                            <textarea type="text" className='border border-gray-400  p-1 w-full  rounded-md resize-none' name="deliveryAddress" value={formData.deliveryAddress} onChange={handleInput} required />
                        </div>

                        <div className='flex flex-col '>
                            <label className='flex items-left justify-left text-sm font-semibold text-gray-700 '>
                                Notes:
                            </label>
                            <textarea type="text" className='border border-gray-400  p-1 w-full rounded-md resize-none ' name="notes" value={formData.notes} onChange={handleInput} required />
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-5 bg-transparent'>
                        <button className='p-3 border w-[140px]  rounded-lg bg-yellow-500 text-white font-bold' onClick={handleSubmit}>Submit Order</button>
                        <button className='p-3 border w-[140px] rounded-lg bg-red-500 text-white font-bold' onClick={handleClear}>Clear</button>
                        
                    </div>
                    <div className='flex flex-col items-center justify-center w-full mt-5'>
                        <button className='p-1 border w-[80px] rounded-lg bg-gray-500 text-white ' onClick={handleBack}>Back</button>
                    </div>
                    
                    {/* <div className='flex flex-col justify-center items-center h-dv sm:mt-30 mt-[100px]'>
                        <img className='w-[300px] ' src={Cat} alt="" />
                        <h1>Order Page is currently in progress..</h1>
                        <p className='font-bold mb-20'>- Adrian</p>
                    </div> */}
                </form>

            </div>
        </div>

    );
}