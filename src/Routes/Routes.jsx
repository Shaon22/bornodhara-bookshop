import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Contact from "../Pages/Contact/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserHome from "../Dashboard/UserDashboard/UserHome";
import ProtectedRoute from "./ProtectedRoute";
import BooksDetails from "../Pages/AllBooks/BooksDetails";
import SavedBooks from "../Dashboard/UserDashboard/SavedBooks";
import Orders from "../Dashboard/UserDashboard/Orders";
import Books from "../Dashboard/AdminDashboard/Books";

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
                path: 'allBooks',
                element: <ProtectedRoute> <AllBooks></AllBooks></ProtectedRoute>,
                loader: () => fetch`http://localhost:5000/allBooks`

            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'details/:_id',
                element: <BooksDetails></BooksDetails>,
                loader:({params})=> fetch(`http://localhost:5000/allbooks/${params._id}`)
            }

        ]
    },

    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'dashboard',
        element: <ProtectedRoute><DashboardLayout></DashboardLayout></ProtectedRoute>,
        children: [
            {

                path: 'userHome',
                element: <UserHome></UserHome>

            },
            {
                path: 'savedBooks',
                element:<SavedBooks></SavedBooks>

            },
           {
            path:'orders',
            element:<Orders></Orders>
           },
           {
            path:'books',
            element:<Books></Books>,
            loader: () => fetch`http://localhost:5000/allBooks`
           }
        ]
    }

])