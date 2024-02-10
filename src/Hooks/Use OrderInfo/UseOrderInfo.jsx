import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseOrderInfo = () => {
    const { user } = useContext(MyContext)

    const { data: ordersInfo,refetch } = useQuery({
      queryKey: ['orders'],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/orders/${user.email}`)
        return res.json()
      }
  
    })
    console.log(ordersInfo)
    return [ordersInfo,refetch]
};

export default UseOrderInfo;