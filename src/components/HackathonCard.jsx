import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHackathons } from "../context/HackathonContext";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdCloudUpload } from "react-icons/io";
import Preview from "../../public/Preview.svg";

const HackathonCard = () => {
  const [imageSrc, setImageSrc] = useState("");
  const { addHackathon, updateHackathon, hackathons } = useHackathons();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const isEditMode = Boolean(id);

  const navigate = useNavigate();

  const hackathonToEdit = isEditMode
    ? hackathons.find((h) => h.id === Number(id))
    : null;

  useEffect(() => {
    if (isEditMode && hackathonToEdit) {
      reset(hackathonToEdit);
      setImageSrc(hackathonToEdit.image);
    }
  }, [isEditMode, hackathonToEdit, reset]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    if (isEditMode) {
      updateHackathon({ ...data, id: Number(id), image: imageSrc });
    } else {
      addHackathon({ ...data, image: imageSrc });
      console.log(data);
    }
    navigate("/");
  };

  return (
    <div className="hackathon-card-container">
      <h2 className="hack-h2">{isEditMode ? "Edit" : ""} Challenge Details</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-[89px] py-6 space-y-6"
      >
        <div className="input-divs space-y-4">
          <label className="input-labels">Challenge Name</label>
          <input
            type="text"
            {...register("name", { required: "Challenge Name is required" })}
            className="input-fields"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="input-divs space-y-4">
          <label className="input-labels">Start Date</label>
          <input
            type="date"
            placeholder="Start"
            {...register("startDate", { required: "Start Date is required" })}
            className="input-fields"
          />
          {errors.startDate && (
            <p className="text-red-600 text-sm">{errors.startDate.message}</p>
          )}
        </div>

        <div className="input-divs space-y-4">
          <label className="input-labels">End Date</label>
          <input
            type="date"
            {...register("endDate", { required: "End Date is required" })}
            className="input-fields"
          />
          {errors.endDate && (
            <p className="text-red-600 text-sm">{errors.endDate.message}</p>
          )}
        </div>

        <div className="input-divs space-y-4">
          <label className="input-labels">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="input-textarea input-fields"
          />
          {errors.description && (
            <p className="text-red-600 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="input-divs space-y-4">
          <label className="input-labels">Image</label>
          {imageSrc ? <div>
            <div className="px-6 py-4 w-fit bg-[#f4f0f4] rounded-lg">
              <img
                src={imageSrc}
                alt="image"
                className="aspect-video h-auto w-full rounded-lg md:w-40"
              />
              <div className="mt-4 flex gap-2">
                <img src={Preview} alt="image" className="h-auto w-4" />
                <label
                  htmlFor="image"
                  className="cursor-pointer text-green-700 text-xs"

                >{`Change image ->`}</label>
              </div>
            </div>
            <input
              type="file"
              name="image"
              id="image"
              className="hidden"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div> : <label className="input-file">
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>
            {errors.image && (
              <p className="text-red-600 text-sm">{errors.image.message}</p>
            )}
            Upload
            <IoMdCloudUpload className="ml-2 text-xl" />
          </label>}
        </div>

        <div className="input-divs space-y-4">
          <label className="input-labels">Level Type</label>
          <select
            {...register("level", { required: "Level Type is required" })}
            className="input-fields input-select"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.level && (
            <p className="text-red-600 text-sm">{errors.level.message}</p>
          )}
        </div>

        <div>
          <button type="submit" className="submit-btn">
            {isEditMode ? "Update Challenge" : "Create Challenge"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HackathonCard;
