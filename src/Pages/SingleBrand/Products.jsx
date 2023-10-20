

const Products = ({ pro }) => {
    console.log(pro)
    const { image, productName, brandName, type, price, rating, detailsBtn, updateBtn } = pro;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-52" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2>Product Name: {productName}</h2>
                    <p>Brand Name: {brandName}</p>
                    <p>Category: {type}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline btn">{detailsBtn}</div>
                        <div className="badge badge-outline btn">{updateBtn}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;