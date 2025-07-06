import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="sm:w-[1200px] lg:w-full mx-auto px-10 mt-28">
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;