import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";

const SavedBooks = () => {
  const {user}=useContext(MyContext)
  const axiosPublic=useAxiosPublic()
  const {data:booksInfo } = useQuery({
    queryKey: ['books'],
    queryFn:async () =>{
      const res= await axiosPublic.get(`http://localhost:5000/savedBooks/${user.email}`)
      return res.data
    }
     
  })
    return (
      <div>
        {booksInfo.data.email}
      </div>
    );
};

export default SavedBooks;