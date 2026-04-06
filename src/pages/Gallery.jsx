import './Gallery.css';
import {gallery, events} from './GalleryData.js';

export const Gallery = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-7'>  
            <h1 className=' bg-yellow-600 font-bold text-white w-[190px] rounded-lg'>Satisfied Customers</h1>
            <div className="grid grid-cols-2 gap-2 m-2">
                {gallery.map((gal, index) => (
                    <img className='max-w-full' key={index} src={gal.image} alt={gal.name} />
                ))}
            </div>

            <h1 className='mt-4 bg-yellow-600 font-bold text-white w-[190px] rounded-lg'>Events</h1>
            <div className="grid grid-cols-2 gap-2 m-2">
                {events.map((event) => (
                    <img className='max-w-full' key={event.name} src={event.image} alt={event.name} />
                ))}
            </div>
        </div>

    );
}