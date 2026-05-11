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
            <div className="border mx-5">

                <div className="">
                    <h1>Order Summary</h1>
                </div>
                <div>
                    <h1>Subtotal: </h1>
                    <h1>Tax: </h1>
                    <h1>Total: </h1>
                </div>
            </div>


            <div>
                <h1>Select the payment method:</h1>
                <select name="" id="">
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

