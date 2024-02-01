import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin/UseAdmin";
import { useContext } from "react";
import { MyContext } from "../AuthProvider/AuthProvider";
import { FcHome } from "react-icons/fc";


const DashboardLayout = () => {
    const { user } = useContext(MyContext)
    const [isAdmin] = UseAdmin()
    return (
        <div className="flex">
            <div className="w-[35%] sm:w-[15%] h-screen bg-cyan-400 list-none p-2 sm:p-5 text-sm sm:text-lg font-semibold space-y-3 fixed shadow-2xl">
                {
                    isAdmin ?
                        <div>
                             <div className="flex justify-center " >
                                <div className=" rounded-full ">
                               
                                <img className="rounded-full p-1  ring-8 ring-gradient-to-r from-[#bf60fe] to-[#0750d4] ring-inset" src={user.photoURL} alt="" />
                               
                                </div>
                            </div>
                            <h1 className="text-center uppercase font-bold mt-3 ">
                            {user.displayName}</h1>
                            <h1 className="text-sm text-center mb-5">{user.email}</h1>
                            <hr className="my-3" />
                            <ul>
                                <li>
                                    <NavLink to={'adminHome'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Admin Home</NavLink>
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

                            </ul>
                        </div> :
                        <div>
                            <div className="flex justify-center " >
                                <div className=" rounded-full ">
                               
                                <img className="rounded-full p-1  ring-8 ring-gradient-to-r from-[#bf60fe] to-[#0750d4] ring-inset" src={user.photoURL} alt="" />
                               
                                </div>
                            </div>
                            <h1 className="text-center uppercase font-bold mt-3 ">
                            {user.displayName}</h1>
                            <h1 className="text-sm text-center mb-5">{user.email}</h1>
                            <hr className="my-3" />
                            <ul className="space-y-2">
                                <li>
                                    <NavLink to={'userHome'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`savedBooks`} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Saved Books </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'orders'} className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}>Orders</NavLink>
                                </li>
                            </ul>

                        </div>
                }

                <hr />
                <li>
                <Link to={'/'}><button className=''><FcHome className="text-2xl sm:text-4xl" /></button></Link>

                </li>
            </div>

            <div className="flex-1 ml-[35%] sm:ml-[15%] bg-slate-100 min-h-screen">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;