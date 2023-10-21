import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const DetailsPage = () => {

    const location = useLocation();
    const { product } = location.state || {}

    const index = useParams();
    console.log(index);

    const { image, productName, brandName, price, description } = product;

    const handleAddToCart = () => {
        const cartData = {
            image,
            productName,
            brandName,
            price
        }

     

        console.log(cartData);

        fetch('https://brand-shop-server-six-theta.vercel.app/carts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Added to Cart',
                        'Product added to your cart successfully.',
                        'success');
                }

            })
            
    }


    console.log(product)
    return (
        <div className="w-5/6 my-20 mx-auto">

            <div className="relative flex lg:w-full  mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md lg:mt-10">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-[300px] w-full object-contain"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base md:font-semibold md:uppercase leading-relaxed tracking-normal text-red-900 antialiased">
                        {productName}
                    </h6>
                    <h6 className="mb-4 block font-sans text-base md:font-semibold md:uppercase leading-relaxed tracking-normal text-red-900 antialiased">
                        <span className="font-semibold text-blue-gray-700">Brand:</span> {brandName}
                    </h6>

                    <p className="mb-8 hidden md:block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>



                    <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                        <p className="mb-4 md:mb-0">Price: ${price}</p>
                        <button onClick={handleAddToCart} className='md:btn px-3 py-2 rounded-lg bg-red-400 text-sm'>
                            Add to Cart
                        </button>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default DetailsPage;