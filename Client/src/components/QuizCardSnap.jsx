import React from "react";
import { useNavigate } from "react-router-dom";
const QuizCardSnap = (props) => {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/quiz");
    };
    return (
        <div
            className="w-60 cursor-pointer  h-52 rounded-md overflow-hidden  shadow-md hover:shadow-lg transition ease-out  hover:bg-blue-50 bg-white"
            onClick={() => handleClick()}
        >
            <div className="flex w-full h-3 overflow-hidden ">
                <div className="flex-1 h-3 bg-blue-200"></div>
                <div className="flex-1 h-3 bg-blue-400"></div>
                <div className="flex-1 h-3 bg-blue-600"></div>
            </div>

            <div className=" flex h-full w-full items-center justify-center flex-col space-y-3">
                {/* <h1 className="text-3xl font-bold">{props.value}</h1> */}
                <h1 className="text-xl font-bold text-center text-gray-800">
                    Computer Programming
                </h1>
                <p className="text-xs font-semibold uppercase">30 questions</p>
            </div>
        </div>
    );
};

export default QuizCardSnap;
