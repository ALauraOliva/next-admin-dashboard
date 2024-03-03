import Image from "next/image";

function SingleProductPage() {
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-1 p-5 bg-gray-800 rounded-md font-bold text-gray-400 h-max">
        <div className="w-full h-64 relative rounded-md overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className="flex-[3] p-5 bg-gray-800 rounded-md">
        <form action="" className="flex flex-col">
          <label className="text-xs">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Iphone"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          />
          <label className="text-xs">Price</label>
          <input
            type="number"
            name="price"
            placeholder="john@gmail.com"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          />
          <label className="text-xs">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="+1234567"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          />
          <label className="text-xs">Color</label>
          <input
            type="string"
            name="color"
            placeholder="+1234567"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          />
          <label className="text-xs">Size</label>
          <input
            type="text"
            name="size"
            placeholder="+1234567"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          />
          <label className="text-xs">Category</label>
          <select
            name="cat"
            id="cat"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          >
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label className="text-xs">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="Description"
            className="p-3 rounded-md bg-gray-600 my-3 mx-0"
          ></textarea>
          <button className="w-full p-3 bg-teal-700 text-white rounded-md cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;
