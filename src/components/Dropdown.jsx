/* eslint-disable react/prop-types */

const Dropdown = ({ level, status, handleLevelChange, handleStatusChange }) => {
    return (
        <div className="bg-white absolute right-64 top-[68%] inline-block mt-2 mb-4 p-4 rounded-lg min-w-52 shadow">

            <DropdownSection currVal={status} handleChange={handleStatusChange} title="Status" options={["all", "active", "upcoming", "past"]} />
            <hr className="my-3" />
            <DropdownSection currVal={level} handleChange={handleLevelChange} title="Level" options={["easy", "medium", "hard"]} />
        </div>
    );
};

function DropdownSection({ currVal, title, options, handleChange }) {
    return (<div>
        <p className="font-medium mb-[10px] text-[16px] text-[#333]">{title}</p>
        {options.map((option) => (
            <label key={option} className="flex items-center gap-2 mb-2 cursor-pointer text-sm text-[#666666] capitalize">
                <input
                    type="checkbox"
                    checked={currVal === option}
                    onChange={() => handleChange(option)}
                />
                {option}
            </label>
        ))}
    </div>)
}

export default Dropdown;