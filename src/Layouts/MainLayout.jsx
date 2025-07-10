import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import Navbar2 from "../Components/Shared/Navbar2";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Navbar2></Navbar2>
           <div className="sm:w-[1200px] lg:w-full mx-auto px-10 mt-44">
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;