import Swal from "sweetalert2";

const CartDetails = ({ cart, cartItems, setCartItems }) => {
    const { _id, image, productName, brandName, price } = cart;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                            const remaining = cartItems.filter(cart => cart._id !== _id);
                            setCartItems(remaining);
                        }
                    })

            }
        })
    }
    
    return (
        <div>

            <div className="flex items-center rounded-lg">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            className="h-60 w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {productName} of {brandName}
                        </h6>
                        
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                           Price: {price}
                        </h4>
                        
                        <button  onClick={() => handleDelete(_id)} className="btn absolute right-0 bottom-0">Delete</button>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default CartDetails;