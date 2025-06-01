import React, { useRef } from "react";

function Search(props) {
  const searchInput = useRef();
  return (
    <div className="sm:flex justify-center sm:items-baseline shadow-black">
      <input
        type="search"
        value={props.searchData}
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
        className="sm:mx-1 sm:h-15 sm:ml-19 w-30 sm:font-medium sm:text-2xl sm:w-xl border-2 duration-700 bg-amber-100 hover:bg-amber-200 border-black rounded p-3 hover:shadow-2xl hover:shadow-amber-50 "
      />
      <button
        onClick={props.searchWeather}
        className="p-2 sm:h-15 fl font-bold sm:text-3xl mt-4 sm:mx-2 border-2 rounded-xl bg-blue-950 text-white border-white cursor-pointer hover:bg-amber-200 hover:text-black hover:shadow-2xl hover:shadow-amber-50 duration-700 "
      >
        Search
      </button>
    </div>
  );
}

export default Search;
