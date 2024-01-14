import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const About = () => {
    const {user } = useContext(MyContext)
    return (
        <div>
            <div className="flex gap-10 my-20 items-center">
                <p className="text-lg text-gray-400 font-semibold">
                    Dive into our online library—a digital haven of endless books and resources. From bestsellers to academic archives, explore a boundless world of knowledge at your fingertips. No dusty shelves, just seamless access to a universe of information, all from the comfort of your.
                    
                    <Link to={user ? "" : "/login"}><button className={`${user?"btn btn-disabled w-full text-white rounded bg-cyan-400 mt-3":"btn  w-full text-white rounded bg-cyan-400 mt-3"}`}>Get Started With Us</button></Link>
                    {/* {
                        user?  <button className="btn btn-disabled w-full text-white rounded bg-cyan-400 mt-3">Get Started With Us</button>:
                        <Link to={'/login'}><button className="btn w-full text-white rounded bg-cyan-400 mt-3">Get Started With Us</button></Link>
                       

                    } */}

                </p>
                <img className="w-[800px]" src="https://i.ibb.co/94Gw6SD/pexels-yogendra-singh-731510-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;