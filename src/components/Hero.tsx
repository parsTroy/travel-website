import React from 'react';

const Hero = () => {
    return (
        <div className="w-full h-[90vh]">
            <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1583833008338-31a6657917ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="south korea"
            />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                    <div className="bg-black/60 rounded-md p-4">
                        <h1 className="font-bold text-4xl">
                            Find Your Special Trip
                        </h1>
                        <h2 className="text-4xl py-4 italic">With Weekaway</h2>
                        <p>
                            The best time was yesterday. The second best time is
                            Now!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
