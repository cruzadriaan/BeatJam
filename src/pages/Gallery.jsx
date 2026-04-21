import './Gallery.css';
import {gallery, events} from './GalleryData.js';
import { useState } from 'react';

export const Gallery = () => {
    const [openImage, setOpenImage] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center mt-20'>  
            <h1 className=' bg-yellow-600 font-bold text-white w-[190px] rounded-lg'>Satisfied Customers</h1>
            <div className="grid grid-cols-2 gap-4 m-10 mt-2">
                {gallery.map((gal, index) => (
                    <img className='max-w-full cursor-pointer' key={index} src={gal.image} alt={gal.name} onClick={() => setOpenImage(gal)} />
                ))}
            </div>

            <h1 className='mt-4 bg-yellow-600 font-bold text-white w-[190px] rounded-lg'>Events</h1>
            <div className="grid grid-cols-2 gap-4 m-10 mt-2">
                {events.map((event) => (
                    <img className='max-w-full cursor-pointer' key={event.name} src={event.image} alt={event.name} onClick={() => setOpenImage(event)} />
                ))}
            </div>

            {openImage &&
            (
            <div className='bg-black bg-opacity-85 fixed inset-0 flex flex-col justify-center item-center' onClick={()=> setOpenImage(null)}>
                    <div className='bg-white'>
                        <img src={openImage.image} alt="" />
                    </div>
            </div>
            )}


        </div>

    );
}