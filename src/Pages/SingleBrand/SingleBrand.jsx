import { useLoaderData } from "react-router-dom";
import Products from "./Products";



const SingleBrand = () => {
  const brandData = useLoaderData();
  console.log(brandData);
  const { _id, name, image, sliderImages, product } = brandData;
  return (
    <div>
      <div className="w-5/6 mx-auto">
        <div className="carousel w-full h-[60vh] mt-4 mb-16 rounded-xl">
          <div id="item1" className="carousel-item w-full">
            <img src={sliderImages[0]} className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={sliderImages[1]} className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={sliderImages[2]} className="w-full" />
          </div>

        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-5/6 mx-auto">
        {product.length > 0 ?
          product?.map((pro, index) => <Products key={index} brandId={_id} index={index} pro={pro}></Products>)
          :
          <p className="justify-center md:col-span-2 h-[55vh] flex items-center text-3xl">No available product</p>
        }
      </div>
    </div>
  );
};

export default SingleBrand;