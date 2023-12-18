import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="w-[1200px] mx-auto">
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;