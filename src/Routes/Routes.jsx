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
import AdminHome from "../Dashboard/AdminDashboard/AdminHome";
import Users from "../Dashboard/AdminDashboard/Users";
import PendingOrders from "../Dashboard/AdminDashboard/PendingOrders";
import AdminRoute from "./AdminRoute";
import BooksCategory from "../Pages/Home/BooksCategory";


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
                loader: () => fetch`https://bornodhara-bookshop-server.vercel.app/allBooks`

            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'details/:_id',
                element: <BooksDetails></BooksDetails>,
                loader:({params})=> fetch(`https://bornodhara-bookshop-server.vercel.app/allbooks/${params._id}`)
            },
            {
                path:'books/:category_name',
                element:<ProtectedRoute><BooksCategory></BooksCategory></ProtectedRoute>,
                loader:({params})=>fetch(`https://bornodhara-bookshop-server.vercel.app/books/${params.category_name}`)
            },

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
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
           {
            path:'books',
            element:<AdminRoute><Books></Books></AdminRoute>,
            loader: () => fetch`https://bornodhara-bookshop-server.vercel.app/allBooks`
           },
           {
            path:'users',
            element:<AdminRoute><Users></Users></AdminRoute>
           },
           {
            path:'pendingOrders',
            element:<AdminRoute><PendingOrders></PendingOrders></AdminRoute>
           },
           
        ]
    },
    

])