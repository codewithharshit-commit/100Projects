import React, { useState } from "react";
import { movies } from "./data.js";

const Movie = () => {
  const [movieList, setMovieList] = useState(movies);

  const filterByCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category == cat));
  };

  return (
    <>
      <div className="fixed w-screen flex justify-center gap-10 items-center h-15 bg-white/10 backdrop-blur-md border  p-6 shadow-lg">
        <button
          type="button"
          onClick={() => setMovieList(movies)}
          className="text-white cursor-pointer bg-linear-to-r rounded-xl from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          All
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Action")}
          className="text-white cursor-pointer bg-linear-to-r rounded-xl from-red-500 via-red-600 to-red-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          Action
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Horror")}
          className="text-white cursor-pointer bg-linear-to-r rounded-xl from-green-500 via-green-600 to-green-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          Horror
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Thriller")}
          className="text-white cursor-pointer bg-linear-to-r rounded-xl from-pink-500 via-pink-600 to-pink-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          Thriller
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Animation")}
          className="text-white cursor-pointer bg-linear-to-r rounded-xl from-orange-500 via-orange-600 to-orange-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          Animation
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Drama")}
          className="text-white cursor-pointer bg-linear-to-r rounded-xl from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          Drama
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Sci-Fi")}
          className="text-white bg-linear-to-r rounded-xl from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          Sci-Fi
        </button>
      </div>
      <div className="flex flex-wrap gap-x-15 justify-center items-center h-screen">
        {movieList.map((data) => {
          return (
            <div key={data.id} className="w-50">
              <img src={data.poster_path} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
