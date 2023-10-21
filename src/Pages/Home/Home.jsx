import { useEffect, useState } from "react";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Review from "../../Components/Review/Review";


const Home = () => {

    /*   const [theme, setTheme] = useState("light");
  
      useEffect(() => {
          if (theme === "dark") {
              document.documentElement.classList.add("dark");
          } else {
              document.documentElement.classList.remove("dark");
          }
      }, [theme]);
  
      const handleTheme = () => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
      } */

    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    return (
        <div >
            {/* <div className="absolute -top-16 left-2">
                <button onClick={toggleTheme} className="btn rounded-lg">Dark Mode</button>
            </div> */}
            <Banner></Banner>
            <Brands></Brands>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;