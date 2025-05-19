/* eslint-disable react/prop-types */
import { MdOutlineDelete } from "react-icons/md";
import { GoGear } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const SingleCard = ({ setActive, Task, handelDelete }) => {
  return (
    <div
      onDragEnd={() => setActive(Task?._id)}
      onDragStart={() => setActive(null)}
      draggable
      className={`border-transparent grid duration-500 border-2 min-h-52 active:border-black`}
      style={{ backgroundColor: Task?.bgColor, color: Task?.textColor }}
    >
      <div className="block max-w-sm p-6 rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
          {Task?.title}
        </h5>
        <p className="font-normal dark:text-gray-400">{Task?.details}</p>
      </div>
      <div className="flex gap-3 items-end mb-5 justify-evenly">
        <div onClick={() => handelDelete(Task)}>
          <MdOutlineDelete className="text-4xl font-bold" />
        </div>

        <a href={`/users/update/${Task?._id}`}>
          <button>
            <GoGear className="text-4xl font-bold" />
          </button>
        </a>
        <span className="text-xl font-bold">{Task?.priority}</span>
      </div>
    </div>
  );
};

export default SingleCard;
