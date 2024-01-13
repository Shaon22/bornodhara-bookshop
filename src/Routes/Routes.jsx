import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Contact from "../Pages/Contact/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import Borrowed from "../Dashboard/UserDashboard/Borrowed";
import Bought from "../Dashboard/UserDashboard/Bought";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/allBooks',
                element:<AllBooks></AllBooks>,
                loader:()=>fetch`http://localhost:5000/allBooks`
                
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path:'login',
        element:<Login></Login>
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard/borrowed',
                element:<Borrowed></Borrowed>
            },
            {
                path:'/dashboard/bought',
                element:<Bought></Bought>
            }
        ]
    }
])