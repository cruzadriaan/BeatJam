import './ContactUs.css';
// import contactus from '../images/contacts.jpg'

export const ContactUs = () => {
  return (
    <div className=''>
    <div className='flex flex-col mt-20 4xl:mx-[900px] 3xl:mx-[700px] 2xl:mx-[500px] xl:mx-[300px] lg:mx-[200px] md:mx-20 mx-3 
    border border-gray-900  p-8 rounded-lg '>
      <h1 className=' text-3xl mb-10'>Contact Us</h1>

      <div className='flex flex-col items-center justify-center md:text-lg sm:text-md text-sm gap-3 '>
        <div className=''>
          <h1>Address: Cawayan Uno Badajos, San Francisco Quezon Orange Apartment</h1>
        </div>
        <div>
          <h1>Phone number: 0999-954-8120</h1>
        </div>
        <div>
          <h1>Email Address: beatjamrestobar@gmail.com</h1>
        </div>

        <form action="" className='flex flex-col gap-5 items-center justify-center mt-10 px-15'>
          <input type="text" placeholder='First Name' className='' />
          <input type="email" placeholder='Email' />
          <textarea name="" id="" placeholder='Message' className='h-[200px] border resize-none'></textarea>
          <div className='flex gap-5 text-white'>
            <button className='w-[80px] py-1 shadow-gray-900 bg-yellow-500 hover:opacity-80'>Submit</button>
            <button className='w-[80px] py-1 border shadow-gray-900 bg-red-600 hover:opacity-80'>Clear</button>
          </div>
        </form>

      </div>

    </div>
    <div className='flex flex-col mt-2'>
      <iframe className='h-[500px]' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1372.4957632093249!2d122.51799599252081!3d13.350011874017499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3adab670a3c4d%3A0x51f69f47e0d4a482!2sBEAT-JAM%20Restobar!5e0!3m2!1sen!2sph!4v1776771447137!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'></iframe>
    </div>
    
    </div>

  );
}