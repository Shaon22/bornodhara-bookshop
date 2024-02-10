import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../UseAxiosPublic";
const UseAdmin = () => {
    
       const {user}=useContext(MyContext)
       const axiosPublic=useAxiosPublic()
        const {data:isAdmin,isPending:isAdminLoading}=useQuery({
            queryKey:[user?.email,'isAdmin'],
            queryFn:async()=>{
                const res= await axiosPublic.get(`/user/admin/${user.email}`)
                return res.data?.admin
            }
        })
        return [isAdmin,isAdminLoading]
};

export default UseAdmin;