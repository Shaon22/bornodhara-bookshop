
import Button from "../../Components/Shared/Button";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { BsCashStack } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { TbReplace } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import CartItemsInfo from "./SavedBooks/CartItemsInfo";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
const SavedBooks = () => {
  const axiosPublic = useAxiosPublic()
  const [booksInfo, refetch] = CartItemsInfo()
  console.log(booksInfo)
  

  const handleIncreaseUpdate = (event) => {
event.preventDefault()
const form=event.target
const quantity=form.quantity.value
console.log(quantity)
   
  }

  return (
    <div className="p-5 flex gap-5">
      <div>
        {
          booksInfo?.map(bookInfo =>

            <div className="flex gap-5 bg-[#FFFF] p-5 my-5" key={bookInfo._id}>
              <img className="w-[100px]" src={bookInfo.imageURL} alt="" />
              <div className="space-y-2 w-[400px]">

                <h1 className="text-2xl font-bold">{bookInfo.name}</h1>

                <h1 className="font-semibold">{bookInfo.author}</h1>
                <Button>Delete</Button>
              </div>
              <form>
                <div className="flex items-center gap-3 text-2xl p-5 ">
                  <button className="" ><CiSquareMinus className="text-4xl" /></button>
                  <input className="w-[10%]" type="text" name="quantity" id="" defaultValue={bookInfo.quantity} />
                  <button className="flex items-center" onSubmit={handleIncreaseUpdate} ><CiSquarePlus className="text-4xl" /></button>
                </div>
              </form>
            </div>


          )
        }
      </div>
      <div >
        <div className="text-lg font-semibold bg-[#FFFF] h-[40%] p-5 fixed right-5 my-5">
          <ul className="space-y-4">
            <li className="flex items-center gap-1"> <BsCashStack />Cash on Delivery Available</li>
            <li className="flex items-center gap-1"> <TbReplace />7 Days Replacement Policy</li>
            <li className="flex items-center gap-1"> <GiReturnArrow />100% Money Back Guarantee</li>
            <li className="flex items-center gap-1"><FaCoins />Purchase & Earn Points</li>
            <li className="flex items-center gap-1"><AiFillCheckCircle />100% Original Product</li>
          </ul>
        </div>
        <div className="fixed right-5 top-60 border-4">
        </div>
      </div>
    </div>
  );
};

export default SavedBooks;