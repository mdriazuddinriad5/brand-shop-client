import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ShowReview = ({ review }) => {
    const { name, text } = review;
    console.log(review);
    useEffect(()=>{
        Aos.init({duration:3000});
    },[])
    return (
        <div>
            <div data-aos='flip-left' className="carousel-item">
                <div className="card w-56 h-56 bg-white shadow-xl py-8">
                    <div className="card-body">
                        <h2 className="text-center font-semibold ">&quot;{text}&quot;</h2>

                        <div className="flex justify-center items-center gap-6 mt-4 md:mt-10">
                            <h2 className="text-base font-serif font-medium">{name}</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowReview;