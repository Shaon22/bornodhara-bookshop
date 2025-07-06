import { RiDeleteBin3Line } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
const Books = () => {
    const allBooks = useLoaderData()
    const axiosPublic=useAxiosPublic()
    console.log(allBooks)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/deleteBook/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Deletd successfuly from cart",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>category</th>
                        <th>shortDescription</th>
                        <tr className="flex justify-center">
                            <th >actions</th>
                        </tr>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        allBooks.map((allbook, index) =>
                            <tr key={allbook._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-[100px]" src={allbook.imageURL} alt="Image unavailable" /></td>
                                <td>{allbook.name}</td>
                                <td>{allbook.author}</td>
                                <td>{allbook.category}</td>
                                <td>{allbook.shortDescription}</td>
                                <td> <RiDeleteBin3Line onClick={()=>handleDelete(allbook._id)} className="text-2xl text-red-600" /></td>
                                <td><GrUpdate   className="text-xl text-cyan-400" /></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Books;