const Pagination = () => {
  return (
    <div className="p-3 flex justify-between">
      <button
        disabled
        className="py-1 px-2 cursor-pointer disabled:cursor-not-allowed disabled:text-gray-700 bg-gray-600 rounded-sm"
      >
        Previous
      </button>
      <button className="py-1 px-2 cursor-pointer disabled:cursor-not-allowed bg-gray-600 rounded-sm">
        Next
      </button>
    </div>
  );
};

export default Pagination;
