
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import UseCartItemsInfo from "../../Hooks/UsecartItemsInfo/UseCartItemsInfo";

const BooksDetails = () => {
    const { user } = useContext(MyContext);
    const axiosPublic = useAxiosPublic();
    const booksInfo = useLoaderData();
    const [, refetch] = UseCartItemsInfo();

    const { imageURL, name, author, category, shortDescription } = booksInfo;

    const handleAddToCart = () => {
        const bookInfo = {
            imageURL,
            name,
            author,
            email: user.email,
            quantity: "1",
        };

        axiosPublic.post("/addToCart", bookInfo).then((res) => {
            if (res.data.insertedId) {
                toast.success("Added for read later successfully");
                refetch(); // ✅ Trigger cart count update in Navbar
            }
        });
    };

    return (
        <div className="min-h-screen container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-5">Details</h1>

            {/* Responsive layout: column on small screens, row on md+ screens */}
            <div className="flex flex-col md:flex-row gap-7 mt-10">
                <img
                    className="w-full md:w-[300px] h-auto object-cover p-3"
                    src={imageURL}
                    alt=""
                />
                <div className="flex flex-col justify-start">
                    <h1 className="text-2xl font-bold mb-6">{name}</h1>
                    <h1 className="text-lg font-medium my-1">Author: {author}</h1>
                    <h1 className="text-lg font-medium my-1">Category: {category}</h1>
                    <p className="font-medium my-5">{shortDescription}</p>

                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-sm bg-cyan-400 text-white"
                        >
                            Add To Cart
                        </button>
                        <button className="btn btn-sm bg-cyan-400 text-white">
                            Read Now
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BooksDetails;
