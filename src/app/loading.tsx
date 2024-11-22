import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="flex justify-center items-center">
        <p className="text-7xl font-thin">L</p>
        <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-black"></div>
        <p className="text-7xl font-thin">ading....</p>
      </div>
    </div>
  );
};

export default LoadingPage;
