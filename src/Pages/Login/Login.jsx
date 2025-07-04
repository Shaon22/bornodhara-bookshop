// import { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { FcGoogle, FcHome } from 'react-icons/fc';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { MyContext } from '../../AuthProvider/AuthProvider';
// import useAxiosPublic from '../../Hooks/UseAxiosPublic';
// const Login = () => {
//     const axiosPublic = useAxiosPublic()
//     const { signIn, googleLogin } = useContext(MyContext)
//     const location = useLocation()
//     const navigate = useNavigate()
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = data => {
//         const email = data.email
//         const password = data.password
//         signIn(email, password)
//             .then(result => {
//                 console.log(result)
//                 navigate(location?.state ? location.state : '/')

//             })
//     }
//     const handleGoogle = () => {
//         googleLogin()
//             .then(result => {
//                 console.log(result.user)

//                 const userInfo = {
//                     name: result.user?.displayName,
//                     email: result.user?.email,
//                     role:'user'
//                 }
//                 toast('hello')
//                 axiosPublic.post('/users', userInfo)
//                     .then(res => {
//                         console.log(res.data)

//                     })
               
//                 navigate(location?.state ? location.state : '/')
//             })
//             .catch(error => {
//                 console.error(error)

//             })
            
//     } 
//     return (
//         <div className="bg-[url('https://i.ibb.co/R4YWzn6S/Books-HD-8314929977.jpg')] h-screen bg-no-repeat w-full bg-cover bg-center">
//             <Link to={'/'}><button className='p-5'><FcHome className="text-2xl sm:text-4xl" /></button></Link>
//             <div className='px-5'>
//                 <h1 className='text-lg sm:text-2xl mb-10 font-bold text-center text-white'>Login Now</h1>
//                 <div className=" mx-auto sm:w-[25%] bg-black p-5 bg-opacity-50 rounded">
//                     <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-5 ">

//                         <input {...register("email", { required: true })} className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2" placeholder="Email" type="email" />
//                         {errors.email && <span className="text-red-500">Email is required</span>}

//                         <input className="w-full  p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2" placeholder="Password" type="password" {...register("password",
//                             {
//                                 required: "field is required",
//                                 minLength: {
//                                     value: 6,
//                                     message: 'Password must be 6 character'
//                                 },
//                                 pattern: {
//                                     value: /[A-Z]/,
//                                     message: "Please provide at least one uppercase character "
//                                 },

//                             })} />
//                         {errors.password && <span className="text-red-500">{errors.password.message}</span>}

//                         <div className="text-center">
//                             <input className="btn btn-sm w-full bg-cyan-400 border-none text-white" type="submit" value="LOG IN" />
//                         </div>
//                     </form>
//                     <hr className="my-5" />
//                     <button onClick={handleGoogle} className="btn btn-sm w-full bg-cyan-400 border-none text-white">SIGN IN WITH<FcGoogle className="text-xl" /></button>
//                     <h1 className="text-white m-5 text-center">Dont Have any account? <Link to={'/register'} className="text-cyan-400 text-lg font-bold">Register</Link></h1>
//                 </div>

//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Login;

// gemini code


import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle, FcHome } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../Hooks/UseAxiosPublic';

const Login = () => {
    const axiosPublic = useAxiosPublic();
    const { signIn, googleLogin } = useContext(MyContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        signIn(email, password)
            .then(result => {
                console.log(result);
                toast.success('Login Successful!');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error("Login Error:", error);
                let errorMessage = "An unknown error occurred. Please try again.";

                if (error.code === 'auth/invalid-email') {
                    errorMessage = 'Invalid email address.';
                } else if (error.code === 'auth/user-disabled') {
                    errorMessage = 'This account has been disabled.';
                } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                    errorMessage = 'Invalid email or password.';
                } else if (error.message) {
                    errorMessage = error.message;
                }

                toast.error(errorMessage);
            });
    };

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    role: 'user'
                };
                toast.success('Google Login Successful!');
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.error("Error saving user info:", err);
                        toast.error('Failed to save user information.');
                    });

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error("Google Login Error:", error);
                let errorMessage = "Google login failed. Please try again.";
                if (error.message) {
                    errorMessage = error.message;
                }
                toast.error(errorMessage);
            });
    };

    return (
        <div className="bg-[url('https://i.ibb.co/R4YWzn6S/Books-HD-8314929977.jpg')] h-screen bg-no-repeat w-full bg-cover bg-center">
            <Link to={'/'}><button className='p-5'><FcHome className="text-2xl sm:text-4xl" /></button></Link>
            <div className='px-5'>
                {/* Removed the H1 from here */}
                <div className=" mx-auto sm:w-[25%] bg-black p-5 bg-opacity-50 rounded">
                    {/* Moved the H1 here, inside the box */}
                    <h1 className='text-lg sm:text-2xl mb-10 font-bold text-center text-white'>Login Now</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-5 ">

                        <input {...register("email", { required: true })} className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2" placeholder="Email" type="email" />
                        {errors.email && <span className="text-red-500">Email is required</span>}

                        <div className="relative">
                            <input
                                className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2 pr-10"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                {...register("password",
                                    {
                                        required: "field is required",
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 character'
                                        },
                                        pattern: {
                                            value: /[A-Z]/,
                                            message: "Please provide at least one uppercase character "
                                        },
                                    })}
                            />
                            <span
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                        <div className="text-center">
                            <input className="btn btn-sm w-full bg-cyan-400 border-none text-white" type="submit" value="LOG IN" />
                        </div>
                    </form>
                    <hr className="my-5" />
                    <button onClick={handleGoogle} className="btn btn-sm w-full bg-cyan-400 border-none text-white">SIGN IN WITH<FcGoogle className="text-xl" /></button>
                    <h1 className="text-white m-5 text-center">Dont Have any account? <Link to={'/register'} className="text-cyan-400 text-lg font-bold">Register</Link></h1>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;