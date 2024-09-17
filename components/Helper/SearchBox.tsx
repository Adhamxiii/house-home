import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SearchBox = () => {
  return (
    <div className="mx-auto flex h-[4rem] w-full flex-col justify-center rounded-lg bg-white px-4 sm:h-[5rem] sm:px-8 md:w-[80%]">
      <div className="flex h-full items-center justify-between">
        <input
          type="text"
          placeholder="Enter an address,city or ZIP to buy"
          className="block h-[60%] w-full rounded-lg border-none bg-gray-100 px-4 outline-none placeholder:text-sm focus:outline-none sm:flex-[0.8]"
        />
        <div className="ml-8 flex flex-[0.2] items-center space-x-6">
          <div className="hidden cursor-pointer items-center space-x-2 lg:flex">
            <HiAdjustmentsHorizontal className="size-6 text-gray-700" />
            <p className="font-semibold text-gray-700">Advanced</p>
          </div>
          <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-rose-600 text-white transition-all duration-150 hover:bg-rose-800">
            <FaSearch/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
