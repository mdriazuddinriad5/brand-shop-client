
const AddProduct = () => {

    const handleAdd = async (e) => {
        e.preventDefault();
        const form = e.target;

        const image = form.photo.value;
        const productName = form.name.value;
        const brandName = form.brand.value;
        const priceVal = form.price.value;
        const price = parseInt(priceVal);
        const ratingVal = form.rating.value;
        const rating = parseInt(ratingVal);
        const description = form.description.value;

        const type = form.querySelector('select[name="productType"]').value;

        const detailsBtn = 'Details';
        const updateBtn = 'Update';

        const newProduct = {
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

        console.log(newProduct)

        try {
            const response = await fetch('http://localhost:5000/brands/add-product', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ brandName: brandName, newProduct: newProduct })
            });

            const result = await response.json();
            console.log(result);
        }
        catch (error) {
            console.log(error)

        }

    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Product</h1>
                    </div>
                    <div className="card flex-shrink-0  w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleAdd} className="card-body grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Enter product photo url" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter product name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Enter brand name" name="brand" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Choose product type</span>
                                </label>
                                <select name="productType" className="select select-bordered">
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
                                <input type="number" placeholder="Enter product price" name="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="Give rating" name="rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input type="text" placeholder="Write short description" name="description" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6 md:col-span-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;