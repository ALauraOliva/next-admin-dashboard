import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

function UsersPage() {
  return (
    <div className="bg-gray-800 p-5 rounded-xl mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a user"} />
        <Link href="/dashboard/users/add">
          <button className="px-3 py-2 bg-[#5d57c9] rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-3">Name</td>
            <td className="p-3">Email</td>
            <td className="p-3">Created At</td>
            <td className="p-3">Role</td>
            <td className="p-3">Status</td>
            <td className="p-3">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">
              <div className="flex gap-3 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                John Doe
              </div>
            </td>
            <td className="p-3">john@gmail.com</td>
            <td className="p-3">13.02.2010</td>
            <td className="p-3">Admin</td>
            <td className="p-3">active</td>
            <td className="p-3">
              <div className="flex gap-3">
                <Link href="/">
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

export default UsersPage;
