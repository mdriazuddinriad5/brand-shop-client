import { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);


    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const text = form.text.value;

        const reviewData = {
            name,
            text
        }
        

        fetch('https://brand-shop-server-six-theta.vercel.app/review', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })



    }



    useEffect(() => {
        fetch('https://brand-shop-server-six-theta.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:gap-12 lg:gap-20 w-full bg-orange-200 mt-16 mx-auto'>
            <div>
            <h2 className="text-3xl font-bold mt-12 md:mt-0 mb-4 md:mb-6">Give Feedback</h2>
                <form onSubmit={handleReview} >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea maxLength={50} className="textarea textarea-bordered h-24" name='text' placeholder="Review"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Review</button>
                    </div>
                </form>
            </div>
            <div className="md:my-10 pt-6 md:py-14 bg-slate-300 text-center">
                <h2 className="text-3xl font-bold mb-6">Reviews</h2>
                <p className="text-xl font-normal mb-6">Our Happy Clients</p>
                <div className="carousel flex flex-row w-1/2 md:w-3/4 lg:w-full mx-auto p-4 space-x-4 bg-neutral rounded-box">
                    {
                        reviews.map((review, index) => <ShowReview review={review} key={index}></ShowReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;