import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";

const SavedBooks = () => {
  const { user } = useContext(MyContext)

  const { data: booksInfo } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/savedBooks/${user.email}`)
      return res.json()
    }

  })
  console.log(booksInfo)

  return (
    <div>
      {
        booksInfo?.map(bookinfo =>
          <div className="relative border-4" key={bookinfo._id}>
            <img className="w-[25%] " src={bookinfo.imageURL} alt="" />
            <div className="absolute   bottom-0 h-full w-[25%] bg-black/25 opacity-0 hover:opacity-100">
              <div className="absolute bottom-2 left-5 text-white">
                <h1 className="text-2xl">{bookinfo.name}</h1>
                <h1 className="text-lg">{bookinfo.author}</h1>
                <button className="btn">read</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default SavedBooks;