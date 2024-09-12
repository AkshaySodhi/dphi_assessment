/* eslint-disable react/prop-types */
import { IoIosCloseCircle } from "react-icons/io"

function AddedFilters({ level, status, onRemoveLevel, onRemoveStatus }) {
    return (
        <div className="pt-4 flex gap-2 justify-center">
            {level && <div className="bg-[rgb(121,143,154)] flex items-center gap-[5px] py-[6px] px-3 rounded-2xl">
                <p className="text-sm text-white font-medium capitalize">{level}</p>
                <IoIosCloseCircle className="cursor-pointer" onClick={() => onRemoveLevel("")} />
            </div>}
            {status && <div className="bg-[rgb(121,143,154)] flex items-center gap-[5px] py-[6px] px-3 rounded-2xl">
                <p className="text-sm text-white font-medium capitalize">{status}</p>
                <IoIosCloseCircle className="cursor-pointer" onClick={() => onRemoveStatus("")} />
            </div>}
        </div>
    )
}

export default AddedFilters
