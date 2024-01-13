import { Link, useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const allBooks = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-4  gap-10 mt-10">
                {
                    allBooks.map(allBook =>
                        <div className="h-[700px]" key={allBook._id}>
                            <img className="h-[350px]" src={allBook.imageURL} alt="" />
                            <h1 className="text-2xl font-bold mt-5">{allBook.name}</h1>
                            <h1 className=" font-medium mt-1">Author: {allBook.author}</h1>
                            <h1 className=" font-medium mt-1">Category: {allBook.category}</h1>
                            <h1 className=" font-medium mt-1">Ratings :{allBook.ratings}</h1>
                            <Link to={`/updateBooks/${allBook._id}`}><button className="btn btn-sm bg-cyan-400 mt-1">Update</button></Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllBooks;