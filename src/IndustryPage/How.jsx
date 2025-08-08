import React from "react";

export default function How() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-[80vh] bg-gray-100 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        How can we help you?
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-8">
        Are you ready to push boundaries and explore new frontiers of
        innovation? Let us be your guide to what’s possible.
      </p>
      <button className="px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-full hover:bg-white hover:text-gray-900 hover:border hover:border-gray-900 transition duration-300">
        Let's work together
      </button>
    </div>
  );
}
