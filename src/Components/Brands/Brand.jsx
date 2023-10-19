import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { _id, name, image } = brand;

    return (
        <Link>
            <div className="card md:h-56 lg:h-72 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="ml-3 mt-3">
                    <h2 className=" text-yellow-900 font-extrabold">{name}</h2>
                </div>
            </div>
        </Link>



    );
};
export default Brand;