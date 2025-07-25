import { useQuery } from "@tanstack/react-query";
import { CiDeliveryTruck } from "react-icons/ci";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";

const PendingOrders = () => {
     const { data: allOrders,refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`https://bornodhara-bookshop-server.vercel.app/orders`)
            return res.json()
        }

    })
    const axiospubic=useAxiosPublic()
const handleDelivery=(id)=>{
    axiospubic.patch(`orders/${id}`)
    .then(res=>{
        console.log(res.data) 
        refetch()
    })
   
}
   

    return (
        <div >

            {
                allOrders?.map(item =>
                    <div className="flex items-center justify-around m-5 bg-[#FFFF]" key={item._id} >
                        <div className="grid grid-cols-5  "  >
                            {
                                item.booksInfo.map(info => (
                                    <div className="w-[120px] text-center p-5" key={info._id}>
                                        <img className="w-[100px] mx-auto" src={info.imageURL} alt="" />
                                        <h1 >{info.name}</h1>
                                        <h1 className="text-xs">{info.author}</h1>
                                    </div>

                                ))
                            }
                        </div>
                        <div className="text-center">
                            <h1 className="text-lg font-bold underline">Order Details</h1>
                            <h1>{item.time}</h1>
                            {
                                item.status == 'delivered' ?
                                <button className="btn sm:btn-sm btn-xs bg-green-500 text-white border-none">
                                <h1 className="flex justify-center items-center text-lg capitalize font-bold">{item.status}<CiDeliveryTruck className="text-2xl" /></h1>
                            </button> :
                                    <button onClick={()=>handleDelivery(item._id)} className="btn sm:btn-sm btn-xs bg-cyan-400  border-none">
                                        <h1 className="flex justify-center items-center text-lg capitalize font-bold text-yellow-300">{item.status}<CiDeliveryTruck className="text-2xl" /></h1>
                                    </button>

                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default PendingOrders;