import { Link, useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const allBooks = useLoaderData()
    return (
            <div className="grid grid-cols-1  gap-5">
               {
                    allBooks.map(allBook =>
                        <div className="flex flex-col justify-between shadow-2xl mx-auto p-3 rounded" key={allBook._id}>
                           <div>
                           <img className="h-[350px]" src={allBook.imageURL} alt="" />
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