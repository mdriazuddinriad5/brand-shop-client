import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';


const NavBar = () => {


    const navLinks = <>
        <li><NavLink to={'/'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#008080] underline" : ""
        }>Home</NavLink></li>
        <li><NavLink to={'/addProduct'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#008080] underline" : ""
        }>Add Product</NavLink></li>

        <li><NavLink to={'/about'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
        }>My Cart</NavLink></li>
    </>
    return (
        <div className="navbar w-5/6 mx-auto rounded-xl">    
        {/* bg-[#ff6b6b] */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-black text-white rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex w-12 h-12 ">
                    <a className="btn hidden md:inline-flex btn-ghost normal-case text-xl">Verve & <span className="text-[#008080]">Velvet</span></a>
                    <img className="rounded-full" src={logo} alt="" />
                </div>

            </div>
            <div className="navbar-center hidden md:flex md:ml-20 lg:ml-0">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end hidden lg:inline-flex">

                {


                    <button className="btn btn-sm">Login</button>

                }
            </div>

            <div className="lg:hidden navbar-end">
                {

                    <button className="btn btn-sm">Login</button>

                }
            </div>


        </div>
    );
};

export default NavBar;