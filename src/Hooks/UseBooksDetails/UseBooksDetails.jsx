import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../UseAxiosPublic";

const UseBooksDetails = () => {
    const axiosPublic=useAxiosPublic()
    const {data:booksInfo=[]}=useQuery({
        queryKey:['books'],
        queryFn:async(_id)=>{
            const res=await axiosPublic.get(`/allBooks/:${_id}`)
            return res.data
        }
    })
    return [booksInfo]
};

export default UseBooksDetails;