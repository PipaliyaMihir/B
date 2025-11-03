import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0e0e0e] text-white text-center px-6">
      <h1 className="text-9xl font-bold text-gray-700">404</h1>
      <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-[#3B6E54] hover:bg-[#3f7559] text-white px-6 py-3 rounded-md text-sm font-medium transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;