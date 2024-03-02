function AddUserPage() {
  return (
    <div className="bg-gray-800 p-5 rounded-xl mt-5">
      <form action="" className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className="p-7 w-[45%] bg-[#2e374a] rounded-md mb-7 "
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          className="p-7 w-[45%] bg-[#2e374a] rounded-md mb-7 "
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          className="p-7 w-[45%] bg-[#2e374a] rounded-md mb-7 "
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="p-7 w-[45%] bg-[#2e374a] rounded-md mb-7 "
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-7 bg-[#2e374a] rounded-md mb-7  w-[45%]"
        >
          <option value="false" selected>
            isAdmin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-7 bg-[#2e374a] rounded-md mb-7  w-[45%]"
        >
          <option value="true" selected>
            isActive?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
          className="p-7 bg-[#2e374a] rounded-md mb-7  w-full"
        ></textarea>
        <button
          type="submit"
          className="w-full p-7 bg-teal-700 text-white rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUserPage;
