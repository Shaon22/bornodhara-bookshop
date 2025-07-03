import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const About = () => {
    const {user } = useContext(MyContext)
    return (
        <div className="px-3 sm:px-0 ">
            <div className="flex flex-col sm:flex-row gap-10 sm:items-center">
                <p className="text-sm sm:text-base sm:w-[50%] md:w-[50%] text-center sm:text-left mx-auto text-gray-400 font-semibold ">
                    Dive into our online library—a digital haven of endless books and resources. From bestsellers to academic archives, explore a boundless world of knowledge at your fingertips. No dusty shelves, just seamless access to a universe of information, all from the comfort of your.
                    
                   <div className="text-center">
                   <Link to={user ? "" : "/login"}><button className={`${user?"btn btn-disabled w-[30%] sm:w-full text-white rounded bg-cyan-400 mt-3":"btn w-[30%] sm:w-full text-white rounded bg-cyan-400 mt-3"}`}>Get Started</button></Link>
                   </div>
                    </p>
                <img className="sm:w-[60%] border-2" src="https://i.ibb.co/94Gw6SD/pexels-yogendra-singh-731510-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;