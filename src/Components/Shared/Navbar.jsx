import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { TbCameraUp } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import UseCartItemsInfo from "../../Hooks/UsecartItemsInfo/UseCartItemsInfo";
import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";

const Navbar = () => {
  const [isAdmin] = UseAdmin();
  const { user, logOut, updateUserProfile } = useContext(MyContext);
  const [booksInfo, refetch] = UseCartItemsInfo();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const imgbbApiKey = "cff1398e10b78c685b11967ae2e14a38" // replace with your imgbb api key

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result);
      });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        const imageUrl = data.data.url;
        await updateUserProfile(user.displayName, imageUrl);
        window.location.reload();
      } else {
        console.error('Failed to upload image:', data);
      }
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  refetch();

  const navlinks =
    <div className="text-lg font-semibold space-x-10 sm:">
      <>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>Home</NavLink>
        <NavLink to={'allBooks'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>All books</NavLink>
        <NavLink to={'contact'} className={({ isActive }) => (isActive ? 'text-cyan-400' : 'text-black')}>Contact</NavLink>
      </>
    </div>;

  return (
    <div className="navbar mx-auto bg-[#ffffff] fixed left-0 right-0 z-50 top-0 shadow-2xl">

      <div className="navbar-start">
        <div>
          <FaBarsStaggered className="relative block ml-2 sm:hidden" onClick={toggleMenu} />
          {
            isMenuVisible && (
              <div className="bg-cyan-500 rounded z-10 w-32 p-3 absolute list-none space-y-3 ">
                <li>
                  <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-white font-semibold' : 'text-black font-semibold')}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'allBooks'} className={({ isActive }) => (isActive ? 'text-white font-semibold' : 'text-black font-semibold')}>All books</NavLink>
                </li>
                <li>
                  <NavLink to={'Contact'} className={({ isActive }) => (isActive ? 'text-white font-semibold' : 'text-black font-semibold')}>Contact</NavLink>
                </li>
              </div>
            )
          }
        </div>

        <a ><img className="ml-10" src="https://i.ibb.co/prZxgTGx/Screenshot-8.png" alt="" /></a>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
            <>
              <div className="relative mr-10 flex justify-center items-center ">
                <Link to={'dashboard/savedBooks'}>
                  <button className="rounded-full p-2 bg-gray-100 ">
                    <BsCartCheck className="text-2xl" />
                  </button>
                </Link>
                <span className="absolute -top-2 -right-4 w-6 h-6 rounded-full flex justify-center items-center font-bold bg-cyan-400 text-white text-xs">
                  {booksInfo?.length}
                </span>
              </div>
              <h1 className=" hidden sm:block mr-5 uppercase font-bold">{user.displayName}</h1>
              <div className="relative mr-2 sm:mr-16">

                <img className="cursor-pointer h-6 w-6 sm:h-8 sm:w-8 rounded-full " onClick={toggleDropdown} src={user.photoURL} />
                {isDropdownVisible && (
                  <div className="absolute z-10 bg-cyan-400 rounded shadow-4xl w-44  p-5 mt-2 right-0 bg-opacity-90 sm:w-52">
                    <div className="flex justify-center relative">
                      <img className="h-20 w-20 rounded-full" src={user.photoURL} alt="" />
                      <label htmlFor="add">
                        <TbCameraUp className="text-2xl absolute bottom-0 right-0 cursor-pointer" />
                      </label>
                      <input className="hidden" type="file" accept="image/*" id="add" onChange={handleImageChange} />
                    </div>
                    <div className="">
                      <h1 className="text-center mt-2 text-lg font-bold text-white uppercase">{user.displayName}</h1>
                    </div>
                    <hr className="my-5" />
                    {
                      isAdmin ?
                        <div className="text-base font-semibold text-white flex items-center gap-2">
                          <MdOutlineDashboardCustomize />
                          <Link to={'/dashboard/adminHome'}>Dashboard</Link>
                        </div> :
                        <div className="text-base font-semibold text-white flex items-center gap-2">
                          <MdOutlineDashboardCustomize />
                          <Link to={'dashboard/userHome'}>Dashboard</Link>
                        </div>
                    }

                    <div className="text-base font-semibold text-white flex items-center gap-2">
                      <IoSettingsOutline />
                      <Link>Settings</Link>
                    </div>
                    <Link onClick={handleLogOut} to={'/'}><button className="btn rounded btn-sm border-none mt-2 bg-red-500 text-white" >Log Out <FiLogOut /></button></Link>
                  </div>
                )}
              </div>
            </>
            :
            <>
              <NavLink className={({ isActive }) => (isActive ? 'hidden' : '')} to={'/login'}>
                <button className="btn rounded mr-1 sm:mr-16 btn-sm border-none bg-cyan-400 text-white ">
                  login <FiLogIn />
                </button>
              </NavLink>
            </>
        }

      </div>
    </div>
  );
};

export default Navbar;
