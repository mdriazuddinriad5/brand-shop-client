import { useLoaderData, useParams } from "react-router-dom";


const SingleBrand = () => {
    const brandData= useLoaderData();
    console.log(brandData);
    const {_id, name, image, sliderImages, product}= brandData;
    return (
        <div>
            <h2>Hey</h2>
        </div>
    );
};

export default SingleBrand;