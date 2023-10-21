import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import SingleBrand from "../Pages/SingleBrand/SingleBrand";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Cart from "../Pages/Cart/Cart";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";


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
                element: <AddProduct></AddProduct>
            },
            {
                path: '/singleBrand/:id',
                element: <SingleBrand></SingleBrand>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-theta.vercel.app/brands/${params.id}`)
            },
            {
                path: '/details/:index',
                element: <DetailsPage></DetailsPage>
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
            },
            {
                path: '/update/:brandId/:index',
                element: <UpdateProduct></UpdateProduct>
            }
        ])
    }
])

export default Router;