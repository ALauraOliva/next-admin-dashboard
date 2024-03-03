import Image from "next/image";

function SingleUserPage() {
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-1 p-5 bg-gray-800 rounded-md font-bold text-gray-400 h-max">
        <div className="w-full h-64 relative rounded-md overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className="flex-[3] p-5 bg-gray-800 rounded-md">
        <form action="" className="flex flex-col">
          <label className="text-xs">Username</label>
          <input
            type="text"
            name="username"
            placeholder="John Doe"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          />
          <label className="text-xs">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          />
          <label className="text-xs">Password</label>
          <input
            type="password"
            name="password"
            placeholder="+1234567"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          />
          <label className="text-xs">Address</label>
          <textarea
            name="address"
            placeholder="New York"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          ></textarea>
          <label className="text-xs">is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label className="text-xs">is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button className="w-full p-3 bg-teal-700 text-white rounded-md cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingleUserPage;
