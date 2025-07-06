import { Link, useLoaderData } from "react-router-dom";

const BooksCategory = () => {
    const books=useLoaderData()
    console.log(books)
    return (
        <div >
            <div className="grid grid-cols-2 gap-5">
            {
                books.map(book=>
                    <div key={book._id} className="flex p-5 gap-7 items-start rounded bg-base-100 shadow-2xl">
                       <img className="w-[150px]" src={book.imageURL} alt="" />
                       <div>
                        <h1 className="text-2xl font-bold mb-6">{book.name}</h1>
                        <h1 className=" font-medium">Author: {book.author}</h1>
                        <h1 className="font-medium my-2">Category: {book.category}</h1>
                        <h1 className="font-medium">Ratings: {book.ratings}</h1>
                        <Link  to={`/details/${book._id}`}><button className="btn btn-wide mt-7 bg-cyan-400">Details</button></Link>
                       </div>
                        
                    </div>
                    )
            }
            </div>
        </div>
    );
};

export default BooksCategory;