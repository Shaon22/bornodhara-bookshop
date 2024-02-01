import { Link, useLoaderData } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
const AllBooks = () => {
    const allBooks = useLoaderData()
    return (
        <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {
                allBooks?.map(allBook =>
                    <div className="relative p-3 shadow-2xl rounded" key={allBook._id}>
                        <div>
                            <img className="h-[150px] sm:h-[200px] mx-auto" src={allBook.imageURL} alt="" />
                        </div>
                        <div className="mb-2 text-center">
                            <h1 className="text-sm sm:text-xl font-bold mt-5">{allBook.name}</h1>
                            <h1 className="text-xs  sm:text-base font-medium sm:mt-1">Author: {allBook.author}</h1>
                            
                            <h1 className="text-xs sm:text-base font-medium sm:mt-1">Ratings :{allBook.ratings}</h1>
                            <div className="flex mx-auto">
                            <Link to={`/details/${allBook._id}`}>
                                <button className="absolute bottom-2 sm:bottom-4 left-[32%]  btn btn-xs sm:btn-sm bg-cyan-400 text-white">
                                    <CgDetailsMore className="text-lg" />
                                    Details
                                </button>
                            </Link>
                            </div>
                        </div>

                    </div>
                )
            }

        </div>
    );
};

export default AllBooks;