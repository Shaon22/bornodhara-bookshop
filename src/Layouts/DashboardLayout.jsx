import { NavLink } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="h-screen w-[30%] bg-cyan-400">
           <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>Home</NavLink>
           <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>Home</NavLink>
           <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>Home</NavLink>
           <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>Home</NavLink>
        </div>
    );
};

export default DashboardLayout;