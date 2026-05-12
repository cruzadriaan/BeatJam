
export const Cart = ({ isCartOpen, setIsCartOpen }) => {

    return (

        <>
            {isCartOpen &&
                <div className="bg-black bg-opacity-50 fixed inset-0 z-40"
                    onClick={() => setIsCartOpen(false)}>
                </div>
            }

            <div className={`${isCartOpen ? "translate-x-0" : "translate-x-full"} duration-500 transition-all fixed bg-white top-0 right-0 w-[200px] shadow-lg h-full z-50`}>
                <div className="flex flex-col items-end p-2 bg-transparent">
                    <button className="p-2 rounded-full w-10 bg-yellow-200 cursor-pointer" onClick={() => setIsCartOpen(false)}>X</button>
                </div>
                <h1 className="mt-5">Cart Page</h1>

                <div className="bg-transparent flex justify-center items-center">
                    <button>Checkout</button>
                </div>
            </div>



        </>


    )
}