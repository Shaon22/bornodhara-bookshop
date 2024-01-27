import { Link, useLoaderData } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
const AllBooks = () => {
    const allBooks = useLoaderData()
    return (
        <div className="p-5 sm:p-0 grid grid-cols-1 sm:grid-cols-4 gap-5">
            {
                allBooks?.map(allBook =>
                    <div className="p-5 relative sm:p-3 shadow-2xl rounded text-center sm:text-left  " key={allBook._id}>
                        <div>
                            <img className="h-[350px] mx-auto sm:mx-0" src={allBook.imageURL} alt="" />
                        </div>
                        <div className="mb-2">
                            <h1 className="text-2xl font-bold mt-5">{allBook.name}</h1>
                            <h1 className="font-medium mt-1">Author: {allBook.author}</h1>
                            <h1 className=" font-medium mt-1">Category: {allBook.category}</h1>
                            <h1 className=" font-medium mt-1">Ratings :{allBook.ratings}</h1>

                        </div>
                        <Link  to={`/details/${allBook._id}`}>
                        <button className="flex absolute bottom-2 items-center btn btn-sm bg-cyan-400 text-white">
                        <CgDetailsMore className="text-lg" />
                        Details
                        </button>
                        </Link>
                    </div>
                )
            }

        </div>
    );
};

export default AllBooks;