import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <div className="w-[35%] sm:w-[15%] h-screen bg-cyan-400 list-none p-2 sm:p-5 text-sm sm:text-lg font-semibold space-y-3">
            <li>
                <NavLink to={'userHome'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'savedBooks'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Saved Books </NavLink>
            </li>
            <li>
                <NavLink to={'bought'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Bought Books</NavLink>
            </li>
            <li>
                <NavLink to={'orders'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>Orders</NavLink>
            </li>
            </div>
       <div className="flex-1">
       <Outlet></Outlet>
       </div>
        </div>
    );
};

export default DashboardLayout;