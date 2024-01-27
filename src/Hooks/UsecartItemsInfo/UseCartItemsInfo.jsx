import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseCartItemsInfo = () => {
    const { user } = useContext(MyContext)

    const { data: booksInfo,refetch } = useQuery({
      queryKey: ['books'],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/cart/${user.email}`)
        return res.json()
      }
  
    })
    console.log(booksInfo)
    return [booksInfo,refetch]
};

export default UseCartItemsInfo;