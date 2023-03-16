import React from "react";

const MyMarker = ({ text, tooltip, $hover }) => {
    const handleClick = () => {
        console.log(`You clicked on ${tooltip}`);
    };

    return (
        <div className={$hover ? "bg-orange-700 text-white relative hover:bg-blue-600" : "bg-white-900 text-white-800 font-extrabold "} onClick={handleClick}>
            <span className="text-center absolute w-6/12" title={tooltip}>
                {text}
            </span>
        </div>
    );
};

export default MyMarker;
