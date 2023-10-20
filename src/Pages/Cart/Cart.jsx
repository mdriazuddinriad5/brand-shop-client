import { useEffect, useState } from "react";
import CartDetails from "./CartDetails";

const Cart = () => {

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState(items)

    const [noFound, setNoFound] = useState('');

    const calculateTotalPrice = (items) => {
        return items.reduce((prevVal, currentVal) => prevVal + currentVal.price, 0);
    };

    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then((res) => res.json())
            .then((data) => {
                if (data && data.length > 0) {
                    setItems(data);
                } else {
                    setNoFound('No Data Found');
                }
            })
    }, [])

    useEffect(() => {
        setCartItems(items);
    }, [items]);


    return (
        <div>
            {cartItems.length > 0 && (
                <p className="text-center my-6">Total Price: {calculateTotalPrice(cartItems)}</p>
            )}

            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-5/6 mx-auto py-8 lg:py-12">
                        {cartItems.map((cart, index) => (
                            <CartDetails cart={cart}
                                key={index}
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                            ></CartDetails>
                        ))}
                    </div>
                </div>
            )}


        </div>
    );
};

export default Cart;