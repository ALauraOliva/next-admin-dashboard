import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

function Products() {
  return (
    <div className="bg-gray-800 p-5 rounded-xl mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a product"} />
        <Link href="/dashboard/products/add">
          <button className="px-3 py-2 bg-[#5d57c9] rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-3">Title</td>
            <td className="p-3">Description</td>
            <td className="p-3">Price</td>
            <td className="p-3">Created At</td>
            <td className="p-3">Stock</td>
            <td className="p-3">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">
              <div className="flex gap-3 items-center">
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                iphone
              </div>
            </td>
            <td className="p-3">This product blah</td>
            <td className="p-3">$123</td>
            <td className="p-3">Oct. 29 2023</td>
            <td className="p-3">active</td>
            <td className="p-3">
              <div className="flex gap-3">
                <Link href="/dashboard/products/test">
                  <button className="py-1 px-3 rounded-md cursor-pointer bg-teal-700">
                    View
                  </button>
                </Link>
                <button className="py-1 px-3 rounded-md cursor-pointer bg-red-900">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default Products;
