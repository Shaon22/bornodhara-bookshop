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
    <div className=" p-5">
      {
        booksInfo?.map(bookinfo =>
          <div className="flex gap-5 bg-slate-100 p-5" key={bookinfo._id}>
            <img className="w-[10%]" src={bookinfo.imageURL} alt="" />
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">{bookinfo.name}</h1>
                <h1 className="font-semibold">{bookinfo.author}</h1>
                <Button>Delete</Button>
              </div>
              <div>
                
              </div>
            </div>
          
        )
      }
    </div>
  );
};

export default SavedBooks;