import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Review from "../../Components/Review/Review";


const Home = () => {
    return (
        <div>
            {/* <h2 className="text-2xl">Welcome Home</h2> */}
            <Banner></Banner>
            <Brands></Brands>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;