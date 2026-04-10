import './ContactUs.css';
import contactus from '../images/contacts.jpg'

export const ContactUs = () => {
    return(
        <div className='flex items-center justify-center m-1 mt-10'>
            <img src={contactus} alt="" />
        </div>
    );
}