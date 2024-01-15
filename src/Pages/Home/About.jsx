import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const About = () => {
    const {user } = useContext(MyContext)
    return (
        <div className="px-3 my-5">
            <div className="flex flex-col gap-5">
                <p className="text-sm text-center mx-auto text-gray-400 font-semibold">
                    Dive into our online library—a digital haven of endless books and resources. From bestsellers to academic archives, explore a boundless world of knowledge at your fingertips. No dusty shelves, just seamless access to a universe of information, all from the comfort of your.
                    
                   <div className="text-center">
                   <Link to={user ? "" : "/login"}><button className={`${user?"btn btn-disabled w-[30%]  text-white rounded bg-cyan-400 mt-3":"btn w-[30%] text-white rounded bg-cyan-400 mt-3"}`}>Get Started</button></Link>
                   </div>
                    </p>
                <img className="" src="https://i.ibb.co/94Gw6SD/pexels-yogendra-singh-731510-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;