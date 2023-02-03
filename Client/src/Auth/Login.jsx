import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { toast, Toaster } from "react-hot-toast";

const Login = (props) => {
    // const { type } = useParams();
    const [icon, setIcon] = useState(null);
    const nav = useNavigate();
    const initialValues = {
        email: "",
        password: "",
    };

    const formik = useFormik({
        initialValues: initialValues,
        validate: (values) => {
            const errors = {};
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            if (!values.email) {
                errors.email = toast.error("Email address required");
            } else if (values.email == "") {
                errors.email = toast.error("Email can't be empty string");
            } else if (!values.password) {
                errors.password = toast.error("Password Required...!");
            } else if (values.password.includes(" ")) {
                errors.password = toast.error("Wrong Password...!");
            } else if (values.password.length < 4) {
                errors.password = toast.error(
                    "Password must be more than 4 characters long"
                );
            } else if (!specialChars.test(values.password)) {
                errors.password = toast.error(
                    "Password must have special character"
                );
            }

            return errors;
        },
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: async (values) => {
            console.log(values);
            nav("/");
        },
    });

    return (
        <div>
            <Toaster></Toaster>
            <div className="h-screen md:flex">
                <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#091E61] to-[#091e61ee] i justify-around items-center hidden">
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
                                    <form
                                        className="w-full "
                                        onSubmit={formik.handleSubmit}
                                    >
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input
                                                type="email"
                                                name="login"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-800 focus:border-indigo-800 appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                                {...formik.getFieldProps(
                                                    "email"
                                                )}
                                            />
                                            <label
                                                for="login"
                                                className="absolute uppercase text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Email
                                            </label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input
                                                type="password"
                                                name="password"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-800 focus:border-indigo-800 appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                                {...formik.getFieldProps(
                                                    "password"
                                                )}
                                            />
                                            <label
                                                for="password"
                                                className="absolute uppercase text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Password
                                            </label>
                                        </div>

                                        <div className="flex  justify-center items-center text-sm mx-8 text-gray-800  sm:space-y-0">
                                            <span className="cursor-pointer hover:text-indigo-700">
                                                Forgot Password?
                                            </span>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-sm text-gray-800 my-8  sm:space-y-0">
                                            <button
                                                className="cursor-pointer bg-gray-800 sm:px-8 px-4 py-3 text-gray-50 uppercase"
                                                type="submit"
                                            >
                                                Log In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className=" mb-5 justify-center items-center text-sm  space-x-2 text-gray-800  sm:space-y-0 text-center">
                                <span className="">
                                    {" "}
                                    Don't have an account?
                                </span>
                                <Link
                                    to="/register"
                                    className="cursor-pointer text-gray-700 font-semibold hover:text-indigo-700"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
