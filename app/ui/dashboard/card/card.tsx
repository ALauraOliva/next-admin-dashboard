import { MdSupervisedUserCircle } from "react-icons/md";
function Card() {
  return (
    <div className="bg-gray-800 p-5 rounded-xl flex gap-5 cursor-pointer w-full hover:bg-gray-700">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>Total Users</span>
        <span className="text-2xl font-semibold">10.273</span>
        <span className="text-xs font-light ">
          <span className="text-lime-400">12%</span> more than previous weeks
        </span>
      </div>
    </div>
  );
}

export default Card;
