import React from "react";

function Header() {
  return (
    <header className=" bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 h-[300px] flex justify-center items-center ">
      <div className="text-center ">
        <h1 className="text-white text-5xl mb-4">NextJs Pokemon Finder App</h1>
        <p className="text-white text-2xl">Find your favorite Pokemon</p>
        <form action=" " className=" flex mt-2">
          <input
            type="text"
            className="w-full rounded-md border borde-gray-300 px-3 py-2 text-gray-700 shadow-md"
            placeholder="Pokemon Name..."
          />
          <button
            className="inline-flex items-center mx-2 px-4 rounded-md bg-green-500 text-white"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
