// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { MyContext } from "../../AuthProvider/AuthProvider";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FcHome } from "react-icons/fc";
// import useAxiosPublic from "../../Hooks/UseAxiosPublic";
// const Register = () => {
//     const { createUser, updateUserProfile } = useContext(MyContext)
//     const axiosPublic = useAxiosPublic()
//     const location = useLocation()
//     const navigate = useNavigate()
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = data => {
//         const name = data.name
//         const email = data.email
//         const password = data.password

//         createUser(email, password)
//             .then(result => {

//                 updateUserProfile(name)
//                 console.log(result.user)
//                 console.log('updated')
//                 const userInfo = {
//                     name: data?.name,
//                     email: data?.email,
//                     role:'user'
//                 }
//                 axiosPublic.post('/users', userInfo)
//                     .then(res => {
//                         if (res.data.insertedId) {

//                             toast('Registartion Successful')
//                         }

//                     })
//                 navigate(location?.state ? location.state : '/')

//             })
//     }
//     return (
//         <div className="bg-[url('https://i.ibb.co/n14ssT2/register-2.jpg')] h-screen bg-no-repeat bg bg-cover bg-center">
//             <Link to={'/'}><button className='p-5'><FcHome className="text-2xl sm:text-4xl" /></button></Link>
//             <div className="px-5">
//                 <h1 className='text-lg sm:text-2xl mb-10 font-bold text-center text-white'>Register Your Account</h1>
//                 <div className="sm:w-[30%] mx-auto bg-black p-5 bg-opacity-50 rounded">
//                     <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-5 ">

//                         <input {...register("name", { required: true })} className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2" placeholder="Name" type="text" />
//                         {errors.name && <span className="text-red-500"> Name is required</span>}

//                         <input {...register("email", { required: true })} className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2" placeholder="Email" type="email" />
//                         {errors.email && <span className="text-red-500">Email is required</span>}

//                         <input className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2" placeholder="Password" type="password" {...register("password",
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
//                             <input className="btn btn-sm w-full bg-cyan-400 border-none text-white" type="submit" value="REGISTER" />
//                         </div>
//                     </form>
//                     <hr className="my-5" />
//                     <button className="btn btn-sm w-full bg-cyan-400 border-none text-white">SIGN UP WITH<FcGoogle className="text-xl" /></button>
//                     <h1 className="text-white m-5 text-center">Already Have an account? <Link to={'/login'} className="text-cyan-400 text-lg font-bold">Login</Link></h1>
//                 </div>

//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Register;

// gemini code

import { useContext, useState } from "react"; // Import useState
import { useForm } from "react-hook-form";
import { FcGoogle, FcHome } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../Hooks/UseAxiosPublic";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(MyContext);
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();

    // State for password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm(); // Add watch for password comparison
    const password = watch("password"); // Watch the password field for comparison

    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;

        // Client-side check for password match (though react-hook-form handles this)
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile(name)
                    .then(() => { // Chain update profile to ensure it completes
                        console.log(result.user);
                        console.log('User profile updated successfully.');

                        const userInfo = {
                            name: data?.name,
                            email: data?.email,
                            role: 'user'
                        };

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success('Registration Successful!');
                                }
                            })
                            .catch(err => {
                                console.error("Error saving user info to DB:", err);
                                toast.error('Registration successful, but failed to save user info. Please contact support.');
                            });

                        navigate(location?.state ? location.state : '/');
                    })
                    .catch(profileUpdateError => {
                        console.error("Error updating user profile:", profileUpdateError);
                        toast.error("Registration successful, but failed to update profile. Please try logging in.");
                    });
            })
            .catch(error => {
                console.error("Registration Error:", error);
                let errorMessage = "An unknown error occurred during registration. Please try again.";

                if (error.code === 'auth/email-already-in-use') {
                    errorMessage = 'This email is already registered. Please try logging in or use a different email.';
                } else if (error.code === 'auth/weak-password') {
                    errorMessage = 'Password is too weak. Please choose a stronger password.';
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = 'Invalid email address format.';
                } else if (error.message) {
                    errorMessage = error.message;
                }
                toast.error(errorMessage);
            });
    };

    return (
        <div className="bg-[url('https://i.ibb.co/n14ssT2/register-2.jpg')] h-screen bg-no-repeat bg bg-cover bg-center">
            <Link to={'/'}><button className='p-5'><FcHome className="text-2xl sm:text-4xl" /></button></Link>
            <div className="px-5">
                {/* Removed the H1 from here */}
                <div className="sm:w-[30%] mx-auto bg-black p-5 bg-opacity-50 rounded">
                    {/* Moved the H1 here, inside the box */}
                    <h1 className='text-lg sm:text-2xl mb-10 font-bold text-center text-white'>Register Your Account</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-5 ">

                        <input {...register("name", { required: true })} className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2" placeholder="Name" type="text" />
                        {errors.name && <span className="text-red-500"> Name is required</span>}

                        <input {...register("email", { required: true })} className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2" placeholder="Email" type="email" />
                        {errors.email && <span className="text-red-500">Email is required</span>}

                        {/* Password Field */}
                        <div className="relative">
                            <input
                                className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2 pr-10"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                {...register("password",
                                    {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        },
                                        pattern: {
                                            value: /(?=.*[A-Z])/,
                                            message: "Password must contain at least one uppercase letter."
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

                        {/* Confirm Password Field */}
                        <div className="relative">
                            <input
                                className="w-full p-2 font-semibold outline-none rounded hover:border-b-cyan-400 border-2 pr-10"
                                placeholder="Confirm Password"
                                type={showConfirmPassword ? "text" : "password"}
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: value =>
                                        value === password || "Passwords do not match."
                                })}
                            />
                            <span
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-600"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}


                        <div className="text-center">
                            <input className="btn btn-sm w-full bg-cyan-400 border-none text-white" type="submit" value="REGISTER" />
                        </div>
                    </form>
                    <hr className="my-5" />
                    <button className="btn btn-sm w-full bg-cyan-400 border-none text-white">SIGN UP WITH<FcGoogle className="text-xl" /></button>
                    <h1 className="text-white m-5 text-center">Already Have an account? <Link to={'/login'} className="text-cyan-400 text-lg font-bold">Login</Link></h1>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;