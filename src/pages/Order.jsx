import './Order.css';
import Cat from '../images/copper.png';
import { useState } from 'react';

export const Order = () => {

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

    return (
        <>
            <div className='flex flex-col gap-5 p-[30px] mt-20 border border-gray-300  h-fit max-w-[90%] w-fit drop-shadow-sm items-center mx-auto'>
                
                <h1 className='font-bold text-2xl mb-5'>Order Form</h1>
                <div className='flex flex-row w-full items-center justify-center text-white gap-10'>
                    <button className='h-25 font-bold bg-red-500 p-10 rounded-xl hover:opacity-90'>Pick Up</button>
                    <button className='h-25 font-bold bg-green-600 p-10 rounded-xl hover:opacity-90'>Delivery</button>
                </div>
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
                    {/* <div className='flex flex-col justify-center items-center h-dv sm:mt-30 mt-[100px]'>
                        <img className='w-[300px] ' src={Cat} alt="" />
                        <h1>Order Page is currently in progress..</h1>
                        <p className='font-bold mb-20'>- Adrian</p>
                    </div> */}
                </form>

            </div>
        </>

    );
}