import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
  return (
    <div className="relative flex items-center w-full max-w-[13rem] px-0 shadow-sm">
    <IoIosSearch className="absolute left-3 text-white" size={25} />
    <button className="py-3 pl-10 pr-4 rounded-full w-full text-white bg-secondary hover:bg-[#4338CA] duration-300">
    Start your search
    </button>
    </div>
  )
}

export default SearchButton