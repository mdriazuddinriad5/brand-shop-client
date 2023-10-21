import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

const MainLayout = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };


    return (
        <div className={`relative font-serif ${isDarkMode ? "dark" : ""}`}>
            <NavBar></NavBar>
            <div className="absolute top-0 left-0 lg:top-2 lg:left-2">
                <button onClick={toggleTheme} className="lg:btn py-1 px-2 bg-orange-400 rounded-lg">{isDarkMode?"Light Mode" : "Dark Mode"}</button>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;