import { useState, useEffect, useContext } from "react";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import FromBtn from "../../../Component/FromBtn";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Authantication/AuthProvider/AuthProvider";

const UpdateTask = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();
  const [task, setTask] = useState({
    title: "",
    details: "",
    priority: "Low",
    list: "To Do",
    bgColor: "#3B82F6",
    textColor: "#ffffff",
  });
  const [loading, setLoading] = useState(true);

  // Fetch task data when component mounts or id changes
  useEffect(() => {
    if (id) {
      axiosPublic
        .get(`/Tasks/${id}`)
        .then((res) => {
          setTask(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching task:", err);
          setLoading(false);
        });
    }
  }, [id, axiosPublic]);
  const navigate = useNavigate();
  console.log(task);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      title: form.title.value,
      details: form.details.value,
      priority: form.priority.value,
      taskfor: user?.email,
      list: form.list.value,
      bgColor: form.color.value,
      textColor: form.textColor.value,
      lastUpdated: new Date(),
    };

    axiosSecure
      .put(`/Task/${id}`, updatedData)
      .then((res) => {
        res?.data?.acknowledged
          ? navigate("/") &&
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Task updated successfully",
              showConfirmButton: false,
              timer: 1500,
            })
          : Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
      })
      .catch((err) => {
        console.error("Error updating task:", err);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Could not update the task",
        });
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#801D83]"></div>
      </div>
    );
  }

  return (
    <div className="transition-all m-auto duration-700 ease-in-out lg:min-w-[700px] w-full rounded-lg my-10 bg-white shadow-2xl dark:bg-gray-900 drop-shadow-2xl sm:w-[500px]">
      <form
        className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
        onSubmit={handleUpdate}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={task.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  defaultValue={task.textColor}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <div
                  className="h-full w-full rounded-full border-2 border-gray-300 shadow-md pointer-events-none transition hover:scale-110 dark:border-gray-600"
                  style={{ backgroundColor: task.textColor }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-gray-400 font-bold text-lg select-none drop-shadow-md">
                    +
                  </span>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                  Text
                </div>
              </div>

              {/* BG Color Picker */}
              <div className="relative h-12 w-12 group">
                <input
                  type="color"
                  name="color"
                  defaultValue={task.bgColor}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <div
                  className="h-full w-full rounded-full border-2 border-gray-300 shadow-md pointer-events-none transition hover:scale-110 dark:border-gray-600"
                  style={{ backgroundColor: task.bgColor }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-gray-400 font-bold text-lg select-none drop-shadow-md">
                    +
                  </span>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                  Background
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Status
            </label>
            <select
              name="list"
              className="select select-bordered w-full"
              defaultValue={task.list}
            >
              <option value="To Do">To Do</option>
              <option value="On going">On going</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Priority
            </label>
            <select
              name="priority"
              className="select select-bordered w-full"
              required
              defaultValue={task.priority}
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
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
            defaultValue={task.details}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mb-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <FromBtn btnName={"Update Task"}></FromBtn>
      </form>
    </div>
  );
};

export default UpdateTask;
