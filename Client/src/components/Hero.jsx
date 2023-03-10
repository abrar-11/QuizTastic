import React from "react";

const Hero = () => {
    return (
        <div className="w-full flex items-center   bg_hero ">
            <div className="container mx-auto py-32 px-10">
                <div className=" ">
                    <h1 className="text-white text-7xl mb-5 font-bold">
                        QuizTastic
                    </h1>

                    <div className="space-y-2">
                        <p className="text-white text-sm">
                            Test your programming skills with engaging quizzes!
                        </p>
                        <p className="text-white text-sm">
                            Sharpen your coding knowledge with our programming
                            quizzes.
                        </p>
                        <p className="text-white text-sm">
                            Advance your programming skills with our fun and
                            challenging quizze
                        </p>
                    </div>
                </div>
                <div className="my-10">
                    {/* <form className="w-full">
                        <label
                            for="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only "
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="Search Mockups, Logos..."
                                required=""
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-sm text-sm px-4 py-2 "
                            >
                                Search
                            </button>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
