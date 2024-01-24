import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import Button from "../../Components/Shared/Button";

const SavedBooks = () => {
  const { user } = useContext(MyContext)

  const { data: booksInfo } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/cart/${user.email}`)
      return res.json()
    }

  })
  console.log(booksInfo)

  return (
    <div className="grid grid-cols-2  gap-5">
      {
        booksInfo?.map(bookinfo =>
          <div className="relative border-dashed border-2 " key={bookinfo._id}>
            <img className="w-[70%] mx-auto sm:w-[50%]  sm:mx-auto h-full " src={bookinfo.imageURL} alt="" />
            <div className="absolute left-[15%] sm:left-[25%] bottom-0 h-full w-[70%] sm:w-[50%] bg-black/50 opacity-0 hover:opacity-100">
              <div className="absolute  bottom-2 left-5 sm:left-5 text-white">
                <h1 className="text-xs sm:text-2xl font-bold">{bookinfo.name}</h1>
                <h1 className="text-[8px] sm:text-lg font-semibold">{bookinfo.author}</h1>
              <div className="space-x-1 sm:space-x-2 mt-5">
              <Button>Read Now</Button>
              <Button className="" >Return</Button>
              <Button>Buy Now</Button>
              </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default SavedBooks;