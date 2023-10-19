import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {
    const [brands, setBrands] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])



    return (
        <div className="w-5/6 mx-auto mt-16 bg-blue-gray-500 px-8 pt-8 pb-12 rounded-xl">
            <h2 className="text-2xl text-center mb-8">Signature Brand Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {showAll ?
                    brands.map(brand => <Brand brand={brand} key={brand._id}></Brand>)
                    :
                    brands.slice(0, 6).map(brand => <Brand brand={brand} key={brand._id}></Brand>)
                }
            </div>
            <button onClick={() => setShowAll(!showAll)} className="btn bg-gray-600 mt-4 mx-auto flex justify-center">
                <p>{showAll ? 'Show Less' : 'Show All'}</p>
            </button>
        </div>
    );
};

export default Brands;