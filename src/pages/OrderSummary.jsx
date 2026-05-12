import { useNavigate } from "react-router-dom";


export const OrderSummary = () => {
    console.log("Hello World");

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("../orderSelection")
    }

    const handleNext = () => {
        navigate("");
    }

    return (
        <div className="mt-20">
            <h1 className="text-left ml-5">Step 2: Check the summary of your order</h1>
            <div className="">

                {/* Input Personal Details */}
                <div className="my-20 w-full">
                    <form className="flex flex-col  gap-5 justify-center items-center" action="">
                        <div className="flex justify-center items-center gap-5">
                            <input className="w-fit" type="text" placeholder="Enter your name" />
                            <input className="w-fit" type="tel" name="" id="" placeholder="Enter your phone number:" />
                        </div>
                        <textarea name="" id="" placeholder="Delivery Address"></textarea>
                    </form>
                </div>

                {/* Order Summary */}

                <div className="border border-gray-900 w-[400px] h-[150px] pt-2 space-y-5 mx-auto">
                    <h1>Order Summary</h1>
                    <div className="pl-10 text-left">
                        <h1>Subtotal: </h1>
                        <h1>Tax: </h1>
                        <h1>Total: </h1>
                    </div>

                </div>

            </div>


            <div>
                <h1>Select the payment method:</h1>
                <select name="" id="" className="cursor-pointer">
                    <option value="">Cash</option>
                    <option value="">Gcash</option>
                </select>
            </div>

            {/* Buttom buttons */}
            <div className="flex justify-center gap-5 py-10">
                <button className="bg-gray-300 px-3 py-1 cursor-pointer hover:opacity-85"
                    onClick={handleBack}>Back</button>
                <button className="bg-gray-300 px-3 py-1 cursor-pointer hover:opacity-85"
                    onClick={handleNext}>Next</button>
            </div>

        </div>

    );

}

