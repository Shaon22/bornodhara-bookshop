import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/UseAuth";
import useAxiosPublic from "../UseAxios/UseAxiosPublic";
const UseAdmin = () => {
    
        const {user}=useAuth()
        const axiosPublic=useAxiosPublic()
        const {data:isAdmin}=useQuery({
            queryKey:[user?.email,'isAdmin'],
            queryFn:async()=>{
                const res= await axiosPublic.get(`/user/admin/${user.email}`)
                return res.data?.admin
            }
        })
        return [isAdmin]
};

export default UseAdmin;