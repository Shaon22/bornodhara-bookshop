import { Link, useLoaderData } from "react-router-dom";
const AllBooks = () => {
  const allBooks = useLoaderData();
  return (
    <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {allBooks?.map((allBook) => (
        <Link
          className="block h-full"
          to={`/details/${allBook._id}`}
          key={allBook._id}
        >
          <div className="p-3 shadow-2xl rounded bg-white flex flex-col h-full cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-[150px] sm:h-[200px] overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-contain p-2"
                src={allBook.imageURL}
                alt={allBook.name}
              />
            </div>

            <div className="mb-2 text-center flex-grow flex flex-col justify-between">
              <div>
                <h1 className="text-sm sm:text-xl font-bold mt-5 line-clamp-2">
                  {allBook.name}
                </h1>
                <h1 className="text-xs sm:text-base font-medium sm:mt-1 line-clamp-1">
                  Author: {allBook.author}
                </h1>
                <h1 className="text-xs sm:text-base font-medium sm:mt-1">
                  Ratings: {allBook.ratings}
                </h1>
                <h1 className="text-xs sm:text-base font-medium sm:mt-1">
                  Price: {allBook.price}৳
                </h1>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllBooks;
