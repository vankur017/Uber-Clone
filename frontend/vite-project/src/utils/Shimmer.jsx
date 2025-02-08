
import React from 'react';
import Shimmer from './Shimmer';

const ShimmerLocation = () => {
    return (
        <div className="mt-[-38px]">
            {Array(5).fill("").map((e, index) => (
                <div key={index} className="flex items-center justify-start p-3 mb-2 rounded-md">
                    <div className="flex items-center justify-start">
                        <div className="bg-[#eeeeee] h-8 w-10 flex items-center justify-center rounded-full">
                            <Shimmer />
                        </div>
                        <div className="font-medium px-2 w-40">
                            <Shimmer />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShimmerLocation;