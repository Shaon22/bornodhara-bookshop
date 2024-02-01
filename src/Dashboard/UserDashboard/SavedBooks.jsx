
import { BsCashStack } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { TbReplace } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import { Link } from "react-router-dom";
import { RiDeleteBin3Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UseCartItemsInfo from "../../Hooks/UsecartItemsInfo/UseCartItemsInfo";
import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const SavedBooks = () => {

  const { user } = useContext(MyContext)
  const axiosPublic = useAxiosPublic()
  const [booksInfo, refetch] = UseCartItemsInfo()
  console.log(booksInfo)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deleteCart/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Deletd successfuly from cart",
                icon: "success"
              });
            }
          })
      }
    });
  }
  const orderInfo = {
    booksInfo, email: user.email
  }
  const handleOrder = () => {
    if (booksInfo?.length > 0) {
      axiosPublic.post('/orders', orderInfo)
        .then(res => {
          if (res.data.insertedId)
            Swal.fire({
              title: 'congratulations',
              text: 'Placed Order succcesfully',
              icon: 'success'
            })
        })
      axiosPublic.delete(`/deleteFullCart/${user.email}`)
        .then(res => {
          console.log(res.data)
          refetch()
        })
    }
    else {
      Swal.fire({
        title: 'sorry',
        text: 'Your cart is empty',
        icon: 'error'
      })
    }

  }

  return (
    <div>
      {
        booksInfo?.length < 1 ?
          <>
            <div className="h-screen flex justify-center items-center">
              <h1 className="text-3xl font-bold mb-20 mr-52">Your Cart Is Empty</h1>
            </div>

          </>
          :
          <>
            <div className="p-5 flex gap-5">

              <div>
                {
                  booksInfo?.map(bookInfo =>

                    <div className="flex gap-5 bg-[#FFFF] p-5 my-5" key={bookInfo._id}>
                      <img className="w-[100px]" src={bookInfo.imageURL} alt="" />
                      <div className="space-y-2 w-[400px]">

                        <h1 className="text-2xl font-bold">{bookInfo.name}</h1>

                        <h1 className="font-semibold">{bookInfo.author}</h1>
                        <RiDeleteBin3Line onClick={() => handleDelete(bookInfo._id)} className="text-2xl text-red-600" />


                      </div>
                    </div>


                  )
                }
              </div>

            </div>
           
          </>
      }
     
        <div className="text-lg font-semibold bg-[#FFFF] h-[40%] p-5 fixed right-5 top-5 my-5">
          <ul className="space-y-4">
            <li className="flex items-center gap-1"> <BsCashStack />Cash on Delivery Available</li>
            <li className="flex items-center gap-1"> <TbReplace />7 Days Replacement Policy</li>
            <li className="flex items-center gap-1"> <GiReturnArrow />100% Money Back Guarantee</li>
            <li className="flex items-center gap-1"><FaCoins />Purchase & Earn Points</li>
            <li className="flex items-center gap-1"><AiFillCheckCircle />100% Original Product</li>
          </ul>
        

      </div>
      <div className="fixed right-9 bottom-60">
        <Link><button onClick={handleOrder} className="btn sm:btn-wide bg-cyan-400 text-white border-none">Place Order</button></Link>
      </div>

    </div>

  );
};

export default SavedBooks;