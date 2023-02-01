import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Register = (props) => {
  
    const nav = useNavigate();

    const handleSubmit = (link) => {
        console.log(link);
        props.setUser(type);
        nav("/");
    };
    return (
        <div>
            <div className="h-screen md:flex">
                <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-blue-700 i justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-6xl font-sans ">
                            QuizTastic
                        </h1>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2 justify-center  items-center bg-white">
                    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden w-full">
                        <div className="relative bg-white px-6 shadow-xl rounded-lg ring-1 ring-gray-900/5 sm:max-w-xl lg:w-80 sm:mx-auto py-4">
                            <div className=" my-5">
                                <div className="py-4 text-base leading-7  text-gray-600 flex flex-col items-center mx-8">
                                    <form className="w-full ">
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input
                                                type="text"
                                                name="fullName"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-800 focus:border-indigo-800 appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                for="fullName"
                                                className="absolute capitalize text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Enter Full Name
                                            </label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-800 focus:border-indigo-800 appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                for="login"
                                                className="absolute capitalize text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Enter UserName
                                            </label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-800 focus:border-indigo-800 appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                for="login"
                                                className="absolute capitalize text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Enter Email
                                            </label>
                                        </div>

                                        <div className="relative z-0 mb-6 w-full group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-800 focus:border-indigo-800 appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                for="login"
                                                className="absolute capitalize text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Create Password
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="flex flex-row justify-center items-center text-sm text-gray-800 my-8  sm:space-y-0">
                                <div
                                    className="cursor-pointer bg-gray-800 sm:px-8 px-4 py-3 text-gray-50 uppercase"
                                    onClick={() => handleSubmit(type)}
                                >
                                    Create Account
                                </div>
                            </div>

                            <div className=" mb-5 justify-center items-center text-sm  space-x-2 text-gray-800  sm:space-y-0 text-center">
                                <span className="">
                                    {" "}
                                    Already have an account?
                                </span>
                                <Link
                                    to="/"
                                    className="cursor-pointer text-gray-900 font-medium  hover:text-indigo-700"
                                >
                                    Login Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
