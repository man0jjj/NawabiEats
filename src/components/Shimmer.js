import React from "react";

const Shimmer = () => {
  return (
    <div className="p-4 space-y-4">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 animate-pulse"
          >
            
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
            </div>

            
            <div className="relative w-28 h-24 flex-shrink-0 mt-4 md:mt-0">
              <div className="w-full h-full bg-gray-300 rounded-md"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-200 px-4 py-2 text-sm font-bold rounded-lg shadow-md"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
