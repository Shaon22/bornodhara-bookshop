import { useContext } from "react";
import { MyContext } from "../AuthProvider/AuthProvider";
import UseAdmin from "../Hooks/UseAdmin/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(MyContext)
    const [isAdmin,isAdminLoading]=UseAdmin() 
    const location=useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner text-success"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default AdminRoute;