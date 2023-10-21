import Aos from "aos";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const location = useLocation();
    const { product } = location.state || {}

    const { image, productName, brandName, type, price, rating, description } = product;

    const { brandId, index } = useParams();
    console.log(brandId);
    console.log(index);

    useEffect(()=>{
        Aos.init({duration:3000});
    },[])


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const image = form.photo.value;
        const productName = form.name.value;
        const brandName = form.brand.value;
        const priceVal = form.price.value;
        const price = parseInt(priceVal);
        const ratingVal = form.rating.value;
        const rating = parseFloat(ratingVal);
        const description = form.description.value;



        const detailsBtn = 'Details';
        const updateBtn = 'Update';

        const type = form.querySelector('select[name="productType"]').value;


        const updatedProduct = {
            image,
            productName,
            brandName,
            price,
            rating,
            description,
            type,
            detailsBtn,
            updateBtn
        }

        console.log(updatedProduct)

        const url = `https://brand-shop-server-six-theta.vercel.app/brands/update-product`;

        const requestBody = {
            brandId,
            index,
            updatedProduct,
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });



    }

    return (
        <div>
            <div data-aos='flip-right' className="hero  bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Product</h1>
                    </div>
                    <div className="card flex-shrink-0  w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdate} className="card-body grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Enter product photo url" name="photo" defaultValue={image} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter product name" name="name" defaultValue={productName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Enter brand name" name="brand" defaultValue={brandName} className="input input-bordered" required disabled/>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Choose product type</span>
                                </label>
                                <select defaultValue={type} name="productType" className="select select-bordered">
                                    <option disabled selected>Pick one</option>
                                    <option>Clothing</option>
                                    <option>Footwear</option>
                                    <option>Accessories</option>
                                    <option>Outerwear</option>
                                    <option>Activewear</option>
                                    <option>Intimates</option>
                                    <option>Swimwear</option>
                                    <option>Formal Wear</option>
                                    <option>Plus Size</option>
                                    <option>Vintage and Retro</option>
                                    <option>Sustainable and Eco-Friendly</option>
                                    <option>Custom and Personalized</option>
                                    <option>Fashion Tech</option>
                                    <option>Shapewear</option>
                                    <option>Workwear</option>
                                    <option>Maternity</option>
                                    <option>Ethnic and Cultural Wear</option>
                                    <option>Kids and Baby Clothing</option>
                                    <option>Home and Lifestyle</option>
                                    <option>Beauty and Cosmetics</option>
                                    <option>Fragrances</option>
                                    <option>Fashion Subscription Boxes</option>
                                </select>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Enter product price" name="price" defaultValue={price} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="Give rating" name="rating" defaultValue={rating} className="input input-bordered" required />
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input type="text" placeholder="Write short description" name="description" defaultValue={description} className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6 md:col-span-2">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;