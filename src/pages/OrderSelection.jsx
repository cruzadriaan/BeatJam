import { MenuDetails } from "./MenuDetails";

export const OrderSelection = ({ deliveryOption }) => {
    return (
        <div className='w-full  mt-20 space-y-5'>
            <h1>{deliveryOption}</h1>
            <div className='grid grid-cols-2 mx-5 gap-5'>

                {MenuDetails.map((menu, index) => (
                    <div key={index} className='h-[250px] w-[200px] border border-gray-600 p-2 rounded-md'>
                        <img src={menu.img} alt="" className='flex mx-auto w-[150px]' />

                        <h1 className='text-md'>{menu.name}</h1>
                        <div className='flex items-center justify-center gap-3 mt-2'>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>+</button>
                            <h1>1</h1>
                            <button className='h-6 w-6 rounded-full border border-gray-500'>-</button>
                        </div>
                        <div className='mt-2 mx-5'>
                            <p className='text-[13px]'>{menu.description}</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-sm bg-blue-500 text-white py-1 px-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}