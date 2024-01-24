import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MyContext } from "../AuthProvider/AuthProvider";

const DashboardLayout = () => {

    return (
        <div className="flex">
            <div className="w-[35%] sm:w-[15%] h-screen bg-cyan-400 list-none p-2 sm:p-5 text-sm sm:text-lg font-semibold space-y-3 fixed">
                <li>
                    <NavLink to={'userHome'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={`savedBooks`} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Saved Books </NavLink>
                </li>
                <li>
                    <NavLink to={'bought'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Bought Books</NavLink>
                </li>
                <li>
                    <NavLink to={'orders'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>Orders</NavLink>
                </li>
                <hr />
                <Link to={'/'}>home</Link>
            </div>

            <div className="flex-1 ml-[35%] sm:ml-[15%]">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;