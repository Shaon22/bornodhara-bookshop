import { useLoaderData } from "react-router-dom";

const Books = () => {
    const allBooks = useLoaderData()
    console.log(allBooks)
    return (
        <div>
           books 
        </div>
    );
};

export default Books;