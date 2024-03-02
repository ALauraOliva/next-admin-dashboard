import Image from "next/image";

function Transactions() {
  const transactions = [
    {
      name: "John Doe",
      status: "Pending",
      date: "14.02.2024",
      amount: "$3,200",
    },
    {
      name: "Jane Smith",
      status: "Done",
      date: "15.02.2024",
      amount: "$2,500",
    },
    {
      name: "Michael Johnson",
      status: "Cancelled",
      date: "16.02.2024",
      amount: "$1,800",
    },
    {
      name: "Emily Brown",
      status: "Pending",
      date: "17.02.2024",
      amount: "$4,000",
    },
  ];

  return (
    <div className="bg-gray-800 p-5 rounded-xl">
      <h2 className="mb-5 font-extralight text-gray-500 text-2xl">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-3">Name</td>
            <td className="p-3">Status</td>
            <td className="p-3">Date</td>
            <td className="p-3">Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="p-3">
                <div className="flex gap-3 items-center">
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {transaction.name}
                </div>
              </td>
              <td className="p-3">
                <span
                  className={`p-[5px] rounded-md text-sm ${
                    transaction.status === "Cancelled"
                      ? "bg-[#f7737375] text-white"
                      : transaction.status === "Done"
                      ? "bg-[#afd6ee75] text-white"
                      : "bg-[#f7cb7375]"
                  } `}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="p-3">{transaction.date}</td>
              <td className="p-3">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
