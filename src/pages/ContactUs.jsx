import './ContactUs.css';
// import contactus from '../images/contacts.jpg'

export const ContactUs = () => {
  return (
    <div className='flex flex-col mt-20'>
      <h1 className=' text-3xl mb-10'>Contact Us</h1>

      <div className='flex flex-col items-center justify-center text-md gap-3 '>
        <div className=''>
          <h1>Address: Cawayan Uno Badajos, San Francisco Quezon</h1>
        </div>
        <div>
          <h1>Phone number: 0999-954-8120</h1>
        </div>
        <div>
          <h1>Email Address: beatjamrestobar@gmail.com</h1>
        </div>
        <div>
          <h1>Social media:</h1>
        </div>

        <form action="" className='flex flex-col gap-5 items-center justify-center  mt-10'>
          <input type="text" placeholder='First Name' className=''/>
          <input type="email" placeholder='Email' />
          <textarea name="" id="" placeholder='Message' className='h-[200px] border resize-none'></textarea>
          <div className='flex gap-5'>
            <button className='w-[80px] py-1 border border-gray-900'>Submit</button>
            <button className='w-[80px] py-1 border border-gray-900'>Clear</button>
          </div>

        </form>
      </div>

    </div>
  );
}