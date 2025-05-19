import { useContext, useState } from "react";
import { AuthContext } from "../../../Authantication/AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import FromBtn from "../../../Component/FromBtn";

/* eslint-disable react/prop-types */
const AddTask = ({ openModal, setOpenModal, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxios();
  const [color, setColor] = useState("#3B82F6");
  const [textColor, setTextColor] = useState("#ffffff");

  const handelAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      title: form?.title.value,
      details: form?.details.value,
      taskfor: user?.email,
      priority: form?.priority.value,
      list: form?.list.value,
      bgColor: form?.color.value,
      textColor: form?.textColor.value,
      lastUpdated: new Date(),
    };
    axiosPublic.post("/addTask", data).then((res) => {
      refetch();
      form.reset();
      res?.data?.acknowledged
        ? Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Task successfully added",
            showConfirmButton: false,
            timer: 1500,
          })
        : Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    });
  };

  return (
    <div
      onClick={(e_) => e_.stopPropagation()}
      className={`absolute transition-all duration-700 ease-in-out lg:min-w-[700px] w-full rounded-lg bg-white border shadow-2xl border-black dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] 
    ${
      openModal
        ? "opacity-100 translate-y-0 scale-100 right-4 top-5"
        : "opacity-0 translate-y-10 scale-95 right-4 top-5 pointer-events-none"
    }`}
    >
      <form
        className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
        onSubmit={handelAdd}
      >
        <svg
          onClick={() => setOpenModal(false)}
          className="mx-auto mr-2 w-10 cursor-pointer fill-black dark:fill-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
          </g>
        </svg>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give a meaningful title"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Color
            </label>
            <div className="flex gap-5">
              {/* Text Color Picker */}
              <div className="relative h-12 w-12 group">
                <input
                  type="color"
                  name="textColor"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <div
                  className="h-full w-full rounded-full border-2 border-gray-300 shadow-md pointer-events-none transition hover:scale-110 dark:border-gray-600"
                  style={{ backgroundColor: textColor }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-gray-400 font-bold text-lg select-none drop-shadow-md">
                    +
                  </span>
                </div>
                {/* Hover Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                  Text
                </div>
              </div>

              {/* BG Color Picker */}
              <div className="relative h-12 w-12 group">
                <input
                  type="color"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <div
                  className="h-full w-full rounded-full border-2 border-gray-300 shadow-md pointer-events-none transition hover:scale-110 dark:border-gray-600"
                  style={{ backgroundColor: color }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-gray-400 font-bold text-lg select-none drop-shadow-md">
                    +
                  </span>
                </div>
                {/* Hover Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                  Background
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              In
            </label>
            <select name="list" className="select select-bordered  w-full">
              <option>To Do</option>
              <option>On going</option>
              <option>Completed</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Priority
            </label>
            <select
              name="priority"
              className="select select-bordered  w-full"
              required
            >
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Task Description
          </label>
          <textarea
            name="details"
            rows="5"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mb-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write Task details here..."
          ></textarea>
        </div>
        <FromBtn btnName={"Add this task"}></FromBtn>
      </form>
    </div>
  );
};

export default AddTask;
