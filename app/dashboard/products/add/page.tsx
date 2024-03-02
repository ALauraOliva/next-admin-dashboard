function AddProductPage() {
  return (
    <div className="bg-gray-800 p-5 rounded-xl mt-5">
      <form action="" className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="p-7 w-[45%] bg-gray-700 rounded-md mb-7"
        />
        <select
          name="cat"
          id="cat"
          className="p-7 bg-gray-700 rounded-md mb-7 w-[45%]"
        >
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          className="p-7 w-[45%] bg-gray-700 white rounded-md mb-7"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className="p-7 w-[45%] bg-gray-700 rounded-md mb-7"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="p-7 w-[45%] bg-gray-700 rounded-md mb-7"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="p-7 w-[45%] bg-gray-700 rounded-md mb-7"
        />
        <textarea
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
          className="p-7 bg-gray-700 rounded-md mb-7 w-full"
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

export default AddProductPage;
