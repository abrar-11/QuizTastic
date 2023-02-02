import React from "react";

const Quiz = () => {
    return (
        <div className="center_all bg-gray-50  w-screen h-screen">
            <div className="w-96 md:w-[30rem]  bg-white  shadow-md rounded-xl h-96 p-5">
                <h1 className="text-gray-800">
                    1- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique sed dolore facilis id ipsum optio.?
                </h1>

                <div className="flex flex-col space-y-4 mt-5">
                 
                    <div class="flex items-center pl-4 border border-gray-200 rounded 0">
                        <input
                            id="bordered-radio-1"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                            for="bordered-radio-1"
                            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 "
                        >
                            Default radio
                        </label>
                    </div>
                    <div class="flex items-center pl-4 border border-gray-200 rounded ">
                        <input
                            checked
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                            for="bordered-radio-2"
                            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 "
                        >
                            Checked state
                        </label>
                    </div>
                    <div class="flex items-center pl-4 border border-gray-200 rounded ">
                        <input
                            checked
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                            for="bordered-radio-2"
                            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 "
                        >
                            Checked state
                        </label>
                    </div>
                    <div class="flex items-center pl-4 border border-gray-200 rounded ">
                        <input
                            checked
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        />
                        <label
                            for="bordered-radio-2"
                            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 "
                        >
                            Checked state
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
