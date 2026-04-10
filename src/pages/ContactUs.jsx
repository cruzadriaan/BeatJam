import './ContactUs.css';
import contactus from '../images/contacts.jpg'

export const ContactUs = () => {
    return (
      <div className='flex items-center justify-center  mx-auto'>
      <img src={contactus} alt="" />
      </div>
    );
}