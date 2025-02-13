const Search = () => {
  return (
    <div className="flex justify-center items-center h-30">
      <div className="flex flex-row items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded mb-2 placeholder-stone-600 border-blue-300 shadow-md"
        />
        <button className="btn bg-blue-500 text-white p-2 rounded -mt-2  ml-1">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
