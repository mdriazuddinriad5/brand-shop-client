import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import SingleBrand from "../Pages/SingleBrand/SingleBrand";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Cart from "../Pages/Cart/Cart";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
            },
            {
                path: '/singleBrand/:id',
                element: <SingleBrand></SingleBrand>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-theta.vercel.app/brands/${params.id}`)
            },
            {
                path: '/details/:index',
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                 
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
            },
            {
                path: '/update/:brandId/:index',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute> 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ])
    }
])

export default Router;