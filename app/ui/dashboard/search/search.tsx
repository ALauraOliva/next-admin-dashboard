import { MdSearch } from "react-icons/md";

type Props = {
  placeholder: string;
};

function Search({ placeholder }: Props) {
  return (
    <div className="flex items-center gap-5">
      <div className="bg-gray-700 flex items-center gap-3 p-2 rounded-xl">
        <MdSearch />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent border-none text-gray-500"
        />
      </div>
    </div>
  );
}

export default Search;
