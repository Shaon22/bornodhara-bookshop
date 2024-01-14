import { useContext } from "react";
import { MyContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const{user,loading}=useContext(MyContext)
    const location=useLocation()
    if(loading){
        return <span className="loading loading-spinner text-success"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default ProtectedRoute;