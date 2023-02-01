import React from "react";
import Hero from "./components/Hero";
import QuizCardSnap from "./components/QuizCardSnap";

const App = () => {
    return (
        <>
            <div className="">
                <Hero />
                <div className="flex flex-wrap gap-10  items-center justify-center my-20 max-w-6xl mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 8].map((e) => {
                        return <QuizCardSnap />;
                    })}
                </div>
            </div>
        </>
    );
};

export default App;
