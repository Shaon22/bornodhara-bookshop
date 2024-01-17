import { Link, useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const allBooks = useLoaderData()
    return (
            <div className="p-5 sm:p-0 grid grid-cols-1 sm:grid-cols-4 gap-5">
               {
                    allBooks.map(allBook =>
                        <div className="p-5 sm:p-3 shadow-2xl rounded text-center sm:text-left  " key={allBook._id}>
                           <div>
                           <img className="h-[350px] mx-auto sm:mx-0" src={allBook.imageURL} alt="" />
                           </div>
                            <div>
                            <h1 className="text-2xl font-bold mt-5">{allBook.name}</h1>
                            <h1 className=" font-medium mt-1">Author: {allBook.author}</h1>
                            <h1 className=" font-medium mt-1">Category: {allBook.category}</h1>
                            <h1 className=" font-medium mt-1">Ratings :{allBook.ratings}</h1>
                            
                            </div>
                            <div>
                                <Link to={`/updateBooks/${allBook._id}`}><button className="btn btn-sm bg-cyan-400 mt-auto inline-block ">Update</button></Link>
                            </div>
                        </div>)
                }
                
               </div>
    );
};

export default AllBooks;