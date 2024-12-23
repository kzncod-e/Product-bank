import sort from "../img/Alphabetical Sorting.png";
const Toolbar = () => {
  return (
    <div className="flex flex-wrap scale-75 lg:scale-100  w-full xl:justify-between gap-4 lg:py-4 py-1 justify-center    rounded-lg">
      {/* Search Input */}
      <div className="flex  w-96 text-center justify-center  bg-[#fff] border-[0.2px] border-[#C1C1C1] shadow-lg rounded-[12.5px]  py-4 px-7  ">
        <input
          type="text"
          placeholder="Cari berdasarkan nama"
          className="outline-none text-xl text-gray-700  w-full "
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.42-1.42l3.85 3.86a1 1 0 11-1.42 1.42l-3.85-3.86zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button className="flex w-72 bg-[#fff]  border border-gray-300 py-4 px-7 rounded-[9px] items-center shadow-lg font-medium text-xl text-[#000]">
          Kredit Pemilikan...
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 "
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06-.02L10 10.87l3.71-3.68a.75.75 0 011.06 1.06l-4.24 4.18a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Sort Button */}
      <button className="flex bg-[#fff] items-center border border-gray-300 shadow-lg rounded-[12.5px] w-52 gap-5 text-xl font-semibold  py-4 px-7 ">
        <img src={sort} className="h-10" alt="" />
        Sort
      </button>

      {/* Add Product Button */}
      <button className="flex w-64  bg-blue-500 text-white shadow-lg rounded-[12.5px]  py-4 px-7 text-xl items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 5a.75.75 0 01.75.75V9.5h3.75a.75.75 0 010 1.5h-3.75v3.75a.75.75 0 01-1.5 0v-3.75H6a.75.75 0 010-1.5h3.25V5.75A.75.75 0 0110 5z"
            clipRule="evenodd"
          />
        </svg>
        Tambah Product
      </button>
    </div>
  );
};

export default Toolbar;
