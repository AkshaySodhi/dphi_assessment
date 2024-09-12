/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"

function SearchBar({ query, handleChange, dropOpen, handleDropToggle }) {
    return (
        <>
            <div className="flex items-center gap-5">
                <div className="bg-white rounded-[10px] py-[6px] px-[10px] flex items-center">
                    <IoSearch className="ml-2 text-xl" />
                    <input type="text" value={query} onChange={(e) => handleChange(e.target.value)} placeholder="Search" className="text-lg text-[rgb(133,133,133)] border-none w-[800px] p-[10px] outline-none"></input>
                </div>
                <div className="relative inline-block">
                    <button onClick={handleDropToggle} className="bg-white border border-white py-3 px-5 cursor-pointer rounded-xl text-xl flex items-center justify-between">Filter
                        {dropOpen ? <RiArrowDropUpLine className="pl-2 text-4xl" /> : <RiArrowDropDownLine className="pl-2 text-4xl" />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchBar
