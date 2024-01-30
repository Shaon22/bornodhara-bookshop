import UseUserInfo from "../../Hooks/UseUserInfo.jsx/UseUserInfo";

const Users = () => {
    const [userInfo] = UseUserInfo()

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        userInfo?.map((user,index) =>
                            <tr className="bg-base-200" key={user._id}>
                                <th>{index+1}</th>
                                <td><img src="" alt="coming soon" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>



    );
};

export default Users;