import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin/UseAdmin";


const DashboardLayout = () => {
    const [isAdmin] = UseAdmin()
    return (
        <div className="flex">
            <div className="w-[35%] sm:w-[15%] h-screen bg-cyan-400 list-none p-2 sm:p-5 text-sm sm:text-lg font-semibold space-y-3 fixed">
                {
                    isAdmin ?
                            <ul>
                                <li>
                                    <NavLink to={'adminHome'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'books'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>All Books</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'users'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'boo'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Pending Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Pending Orders</NavLink>
                                </li>

                            </ul> :
                        
                            <ul>
                                <li>
                                    <NavLink to={'userHome'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`savedBooks`} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Saved Books </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'orders'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Orders</NavLink>
                                </li>
                            </ul>
                       
                }

                <hr />

            </div>

            <div className="flex-1 ml-[35%] sm:ml-[15%] bg-slate-100 min-h-screen">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;